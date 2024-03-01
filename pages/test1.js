// Import the addAllDataToDB function
import { useEffect, useState } from 'react';
import addAllDataToDB from '../utils/dbadd'; // Update the path to the file containing the function

// Define your component
const YourComponent = () => {
  const [isLoading, setIsLoading] = useState(true); // State to track loading state

  useEffect(() => {
    // Function to load data and add it to the database
    const loadDataAndAddToDB = async () => {
      try {
        // Call the function to add all data to the database
        await addAllDataToDB();
        setIsLoading(false); // Set loading state to false when data is added
      } catch (error) {
        console.error('Error adding data to the database:', error);
        setIsLoading(false); // Set loading state to false in case of error
      }
    };

    // Call the function to load data and add it to the database
    loadDataAndAddToDB();
  }, []); // Call the effect only once, on component mount

  // Render loading message while data is being added to the database
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Render your component content here
  return (
    <div>
      done
    </div>
  );
};

// Export your component
export default YourComponent;
