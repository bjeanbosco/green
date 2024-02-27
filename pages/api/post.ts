// pages/api/staff.ts
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/utils/db";
import PostModel from "@/Models/Post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await dbConnect.connect(); // Correct invocation of connect function

  switch (req.method) {
    case "GET":
      return getHandler(req, res);
    case "POST":
      return postHandler(req, res);
    case "DELETE":
      return deleteHandler(req, res);
    case "PUT":
      return updateHandler(req, res);
    default:
      res.status(405).json({ message: "Method Not Allowed" });
  }
}

async function getHandler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const post = await PostModel.find({});
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function postHandler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const { name, email, phoneNumber, department } = req.body;
    const newPost = new PostModel({
      name,
      email,
      phoneNumber,
      department,
    });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function deleteHandler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const id = req.query.id as string;
    const deletedPost = await PostModel.findByIdAndDelete(id);
    if (deletedPost) {
      res.status(200).json({ message: "post deleted successfully" });
    } else {
      res.status(404).json({ message: "post not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function updateHandler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const id = req.query.id as string;
    const { name, email, phoneNumber, department } = req.body;

    const updatedPost = await PostModel.findByIdAndUpdate(
      id,
      { name, email, phoneNumber, department },
      { new: true }
    );
    if (updatedPost) {
      res.status(200).json(updatedPost);
    } else {
      res.status(404).json({ message: "post not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
