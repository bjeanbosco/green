// pages/saveInitialSections.tsx
import React, { useEffect } from "react";
import axios from "axios";
import sections from "../utils/testJson";
import HighSchoolPage from "@/components/Organisms/HighSchoolPage";

const SaveInitialSectionsPage: React.FC = () => {
  // useEffect(() => {
  //   const saveInitialSections = async () => {
  //     try {
  //       const response = await axios.post("/api/initialSections", { sections });
  //       console.log("Initial sections saved:", response.data);
  //     } catch (error) {
  //       console.error("Error saving initial sections:", error);
  //     }
  //   };

  //   saveInitialSections();
  // }, []); 

  return <div><HighSchoolPage/></div>;
};

export default SaveInitialSectionsPage;
