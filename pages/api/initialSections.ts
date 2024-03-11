// pages/api/initialSections.ts
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/utils/db";
import SectionModel from "@/Models/AboutUsModel"; // Assuming you have a Section model

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await dbConnect.connect(); // Correct invocation of connect function

  switch (req.method) {
    case "POST":
      return postHandler(req, res);
    default:
      res.status(405).json({ message: "Method Not Allowed" });
  }
}

async function postHandler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const sections = req.body.sections; // Assuming sections are passed in the request body

    // Inserting sections to the database
    const insertedSections = await SectionModel.insertMany(sections);

    res.status(201).json(insertedSections);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
