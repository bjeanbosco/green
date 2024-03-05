
import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/db';
import LeadershipModel from '@/Models/LeadershipModel';

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
    const Leader = await LeadershipModel.find({});
    res.status(200).json(Leader);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}


async function postHandler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const { name, title, imageUrl, category } = req.body;
    const newLeaderMember = new LeadershipModel({  name, title, imageUrl, category});
    await newLeaderMember.save();
    res.status(201).json(newLeaderMember);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function deleteHandler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const id = req.query.id as string;
    const deletedLeader = await LeadershipModel.findByIdAndDelete(id);
    if (deletedLeader) {
      res.status(200).json({ message: 'Leader member deleted successfully' });
    } else {
      res.status(404).json({ message: 'Leader member not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function updateHandler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const id = req.query.id as string;
    const {  name, title, imageUrl, category} = req.body;
   
    const updatedLeader = await LeadershipModel.findByIdAndUpdate(id, {  name, title, imageUrl, category}, { new: true });
    if (updatedLeader) {
      res.status(200).json(updatedLeader);
    } else {
      res.status(404).json({ message: 'Leader member not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

