// pages/api/users.ts
import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/db';
import UserModel from '@/Models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    await dbConnect.connect(); // Correct invocation of connect function

    if (req.method === 'POST') {
        const { email, password } = req.body;

        try {
            // Check if user with the given email exists
            const user = await UserModel.findOne({ email });

            if (!user) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }
            console.log(user.password)
            // Check if the password is correct
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            // Generate JWT
            let token;
            if (process.env.JWT_SECRET) {
                token = jwt.sign({ userId: user._id, email: user.email, permissions: user.permissions, department: user.department, profilePicture: user.profilePicture, }, process.env.JWT_SECRET, { expiresIn: '1h' });
            } else {
                console.error("JWT secret is not defined in environment variables.");
                return res.status(500).json({ message: 'Internal Server Error' });
            }

            // Return JWT to the client
            res.status(200).json({ token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
