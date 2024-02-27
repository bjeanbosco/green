import Link from 'next/link';
import React, { useState } from 'react';
import User from "@/types/user";
import axios from 'axios'; // Import axios for making HTTP requests

interface LearnerProps {
  user: User | undefined;
  numberValue: number | string
  title: string
}

const Courses = ({ user, numberValue,title }: LearnerProps) => {
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const [newValue, setNewValue] = useState("");
  const toggleCustomization = () => {
    setIsCustomizing(!isCustomizing);
  };

  const handleSave = async () => {
    if (!isCustomizing) return; // Exit early if not in customization mode

    try {
      const res = await axios.put(`/api/numbers/${numberValue}`, {
        titleValue: titleValue,
        number: newValue,
      });
      console.log(res.data); // Log the response data for debugging
      // Add any additional handling you want for successful update
    } catch (error) {
      console.error(error); // Log any errors for debugging
      // Handle errors as needed
    }
  };

  return (
    <div className="my-4 md:w-1/2">
      <div className="flex gap-12 items-center pb-2">
        <p className="font-bold">Section</p>
        {user && isCustomizing ? (
          <p className="text-lg">Edit</p>
        ) : (
          user?.permissions.map(permission => permission.toLowerCase()).includes("edit".toLowerCase()) && (
            <Link
              href={""}
              onClick={toggleCustomization}
              className="text-lg text-primary hover:underline"
            >
              Edit
            </Link>
          )
        )}
      </div>
      {isCustomizing ? (
        <input
          className="bg-[#B3B3B3]/25"
          defaultValue={title}
          value={titleValue}
          onChange={(e) => {
            setTitleValue(e.target.value);
          }}
        />
      ) : (
        <input className="bg-[#B3B3B3]/25" value={title} disabled />
      )}{" "}
      <p className="font-bold mt-8 pb-2">Number</p>
      {isCustomizing ? (
        <input
          className="bg-[#B3B3B3]/25"
          defaultValue={numberValue}
          value={newValue}
          onChange={(e) => {
            setNewValue(e.target.value);
          }}
        />
      ) : (
        <input className="bg-[#B3B3B3]/25" value={numberValue} disabled />
      )}
      <div className="flex justify-end gap-8 items-center mt-8">
        {isCustomizing ? (
          <Link
            href={""}
            onClick={toggleCustomization}
            className="cursor-pointer text-xs"
          >
            Cancel
          </Link>
        ) : null}
        <button
          onClick={handleSave}
          className={`w-[124px] h-[43px] bg-[#4A6FBB] text-white text-center rounded-[6px] ${
            isCustomizing ? "" : "cursor-not-allowed"
          }`}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Courses;