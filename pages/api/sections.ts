// pages/api/sections.ts
import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/db';
import SectionModel from '@/Models/Section';

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
        const { title, description } = req.body;

        // Update the fields based on the provided values
        const updateFields: any = {};
        if (title !== undefined && title.trim() !== "") {
            updateFields["content.title"] = title.trim();
        }
        if (description !== undefined && description.trim() !== "") {
            updateFields["content.description"] = description.trim();
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


