// pages/api/numbers.ts
import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/db';
import NumberModel from '@/Models/NumberModel';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    await dbConnect.connect();

    switch (req.method) {
        case 'GET':
            return getNumbers(req, res);
        case 'POST':
            return createNumber(req, res);
        case 'PUT':
            return updateNumber(req, res);
        default:
            res.status(405).json({ message: 'Method Not Allowed' });
    }
}

async function getNumbers(req: NextApiRequest, res: NextApiResponse<any>) {
    try {
        const numbers = await NumberModel.find({});
        res.status(200).json(numbers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

async function createNumber(req: NextApiRequest, res: NextApiResponse<any>) {
    try {
        const { sectionSlug, number, title } = req.body;
        const newNumber = new NumberModel({ sectionSlug, number, title });
        await newNumber.save();
        res.status(201).json(newNumber);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

async function updateNumber(req: NextApiRequest, res: NextApiResponse<any>) {
    try {
        const { id } = req.query;
        const { sectionSlug, number, title } = req.body;

        const updatedNumber = await NumberModel.findByIdAndUpdate(id, { sectionSlug, number, title }, { new: true });
        if (updatedNumber) {
            res.status(200).json(updatedNumber);
        } else {
            res.status(404).json({ message: 'Number not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
