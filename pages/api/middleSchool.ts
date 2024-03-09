// pages/api/highSchool.ts
import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/db';
import SectionModel from '@/Models/MiddleSchoolModel';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    await dbConnect.connect(); // Correct invocation of connect function

    switch (req.method) {
        case 'GET':
            return getHandler(req, res);
        case 'POST':
            return postHandler(req, res);
        case 'DELETE':
            return deleteHandler(req, res);
        case 'PUT':
            return updateHandler(req, res);
        default:
            res.status(405).json({ message: 'Method Not Allowed' });
    }
}

async function getHandler(req: NextApiRequest, res: NextApiResponse<any>) {
    try {
        const sections = await SectionModel.find({});
        res.status(200).json(sections);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

async function postHandler(req: NextApiRequest, res: NextApiResponse<any>) {
    try {
        const { slug, content } = req.body;
        const newSection = new SectionModel({ slug, content });
        await newSection.save();
        res.status(201).json(newSection);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

async function deleteHandler(req: NextApiRequest, res: NextApiResponse<any>) {
    try {
        const slug = req.query.slug as string;
        const deletedSection = await SectionModel.findOneAndDelete({ slug });
        if (deletedSection) {
            res.status(200).json({ message: 'Section deleted successfully' });
        } else {
            res.status(404).json({ message: 'Section not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

async function updateHandler(req: NextApiRequest, res: NextApiResponse<any>) {
    try {
        const slug = req.query.slug as string;
        const { title, description, subtitle, backgroundImage, imageUrl } = req.body;

        // Update the fields based on the provided values
        const updateFields: any = {};
        if (title !== undefined && title.trim() !== "") {
            updateFields["content.title"] = title.trim();
        }
        if (description !== undefined && Array.isArray(description)) {
            updateFields["content.description"] = description.map((item: string) => item.trim());
        }
        if (subtitle !== undefined && subtitle.trim() !== "") {
            updateFields["content.subtitle"] = subtitle.trim();
        }
        if (backgroundImage !== undefined && backgroundImage.trim() !== "") {
            updateFields["content.backgroundImage"] = backgroundImage.trim();
        }

        if (imageUrl !== undefined) {
            if (typeof imageUrl === 'string') {
                updateFields["content.imageUrl"] = imageUrl;
            } else if (Array.isArray(imageUrl)) {
                updateFields["content.imageUrl"] = imageUrl;
            }
        }

        // Update the section in the database
        const updatedSection = await SectionModel.findOneAndUpdate(
            { slug },
            { $set: updateFields },
            { new: true }
        );

        if (!updatedSection) {
            return res.status(404).json({ message: "Section not found" });
        }

        res.status(200).json(updatedSection);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}



