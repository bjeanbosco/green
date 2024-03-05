// Import necessary modules
import dbConnect from './db';
import LeadershipModel from '../Models/LeadershipModel';
import {
  boardingLeaderData,
  staffData,
  highSchoolStaffData,
  middleSchoolStaffData,
  primarySchoolStaffData,
  nurserySchoolStaffData,
} from './leadershipData'; // Update the path to your data file

// Function to add data to the database based on category
const addDataToDB = async (data, category) => {
  try {
    await dbConnect.connect(); // Connect to the database

    // Map over the data array and save each document to the database
    await Promise.all(
      data.map(async (item) => {
        const newLeaderMember = new LeadershipModel({
          name: item.name,
          title: item.title,
          imageUrl: item.imageUrl,
          category: category,
        });
        await newLeaderMember.save(); // Save the document
      })
    );

    console.log(`${category} data added to the database successfully.`);
  } catch (error) {
    console.error(`Error adding ${category} data to the database:`, error);
  }
};

// Function to add all data to the database
const addAllDataToDB = async () => {
  await addDataToDB(boardingLeaderData, 'boarding');
  await addDataToDB(staffData, 'staff');
  await addDataToDB(highSchoolStaffData, 'high_school');
  await addDataToDB(middleSchoolStaffData, 'middle_school');
  await addDataToDB(primarySchoolStaffData, 'primary_school');
  await addDataToDB(nurserySchoolStaffData, 'nursery_school');
};

// Export the function
export default addAllDataToDB;
