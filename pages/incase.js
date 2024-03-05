import axios from 'axios';
import useImageUploader from '@/utils/useImageUploader'; // Import the useImageUploader hook

const handleSaveStaff = async () => {
  // Destructure variables and functions from the useImageUploader hook
  const { handleSubmit } = useImageUploader();

  try {
    // Call the handleSubmit function from the useImageUploader hook to upload images
    await handleSubmit();

    // If image upload is successful, proceed with posting staff data
    const res = await axios.post("/api/staff", newStaffData);
    // Update the staff state and perform other necessary actions
    setStaff((prevStaff) => [...prevStaff, res.data]);
    closeModal();
    resetNewStaffData(); // Reset newStaffData
  } catch (error) {
    // If there is an error in image upload, log the error and handle it accordingly
    console.error('Error uploading images or saving staff data:', error);
    // You may add additional error handling or display messages to the user
  }
};
