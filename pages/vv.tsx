// pages/saveInitialSections.tsx
import React, { useEffect } from "react";
import axios from "axios";
import sections from "../utils/testJson";

const SaveInitialSectionsPage: React.FC = () => {
  useEffect(() => {
    const saveInitialSections = async () => {
      try {
        const response = await axios.post("/api/initialSections", { sections });
        console.log("Initial sections saved:", response.data);
      } catch (error) {
        console.error("Error saving initial sections:", error);
      }
    };

    // Call the function to save the initial sections
    saveInitialSections();
  }, []); // Run only once when the component mounts

  return <div>Saving initial sections...</div>;
};

export default SaveInitialSectionsPage;
