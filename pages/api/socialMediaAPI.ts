import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/db';
import NavigationItemModel from '@/Models/socialMedia';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  await dbConnect.connect();

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
    const navItems = await NavigationItemModel.find({});
    res.status(200).json(navItems);
  } catch (error) {
    console.error('Error fetching navigation items:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function postHandler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const { label, url, category } = req.body;
    const newNavigationItem = new NavigationItemModel({ label, url, category });
    const savedItem = await newNavigationItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    console.error('Error creating navigation item:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function deleteHandler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const id = req.query.id as string;
    const deletedNav = await NavigationItemModel.findByIdAndDelete(id);
    if (deletedNav) {
      res.status(200).json({ message: 'Navigation item deleted successfully' });
    } else {
      res.status(404).json({ message: 'Navigation item not found' });
    }
  } catch (error) {
    console.error('Error deleting navigation item:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function updateHandler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const id = req.query.id as string;
    const { label, url, category } = req.body;
    console.log(label, url, category)
    const updatedNav = await NavigationItemModel.findByIdAndUpdate(id, { label, url, category }, { new: true });
    if (updatedNav) {
      res.status(200).json(updatedNav);
    } else {
      res.status(404).json({ message: 'Navigation item not found' });
    }
  } catch (error) {
    console.error('Error updating navigation item:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
