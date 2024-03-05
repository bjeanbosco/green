// pages/api/new.ts
import multer from "multer";
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/utils/db";
import NewModel from "@/Models/New";

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
    const post = await NewModel.find({});
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function postHandler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const { title, selectedFile, description, privacy } = req.body;
    console.log(title, selectedFile, description, privacy);
    const newPost = new NewModel({
      title,
      selectedFile,
      description,
      privacy,
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
    const deletedPost = await NewModel.findByIdAndDelete(id);
    if (deletedPost) {
      res.status(200).json({ message: "news deleted successfully" });
    } else {
      res.status(404).json({ message: "news not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function updateHandler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const id = req.query.id as string;
    const { title, selectedFile, description, privacy } = req.body;

    const updatedPost = await NewModel.findByIdAndUpdate(
      id,
      { title, selectedFile, description, privacy },
      { new: true }
    );
    if (updatedPost) {
      res.status(200).json(updatedPost);
    } else {
      res.status(404).json({ message: "news not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}