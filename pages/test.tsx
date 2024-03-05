import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Navigation = () => {
  const [navItems, setNavItems] = useState<any[]>([]);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [labels, setLabels] = useState<string[]>([]);
  const [urls, setUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchNavItems = async () => {
      try {
        const response = await axios.get("/api/navigationItem");
        setNavItems(response.data);
        // Initialize labels and urls arrays with labels and URLs of fetched navigation items
        const initialLabels = response.data.map((item: { label: any; }) => item.label);
        const initialUrls = response.data.map((item: { url: any; }) => item.url);
        setLabels(initialLabels);
        setUrls(initialUrls);
      } catch (error) {
        console.error("Error fetching navigation items:", error);
      }
    };
  
    fetchNavItems();
  }, []);
  

  const toggleCustomization = () => {
    setIsCustomizing(!isCustomizing);
  };

  const handleInputChange = (index: number, field: string, value: string) => {
    if (field === "label") {
      const newLabels = [...labels];
      newLabels[index] = value;
      setLabels(newLabels);
    } else if (field === "url") {
      const newUrls = [...urls];
      newUrls[index] = value;
      setUrls(newUrls);
    }
  };

  const handleSave = async () => {
    try {
      const updateRequests = navItems.map(async (item, index) => {
        const updatedItem: any = { _id: item._id };
  
        if (labels[index]?.trim() !== "") {
          updatedItem.label = labels[index];
        }
        if (urls[index]?.trim() !== "") {
          updatedItem.url = urls[index];
        }
  
        // Use Axios PUT request to update each navigation item individually
        const response = await axios.put(`/api/navigationItem?id=${item._id}`, updatedItem);
        return response.data; // Return updated item data
      });
  
      // Wait for all update requests to complete
      const updatedItems = await Promise.all(updateRequests);
  
      // Update state and UI with the updated items
      setNavItems(updatedItems);
      setLabels([]);
      setUrls([]);
      setIsCustomizing(false);
  
      console.log("Navigation items updated successfully!");
    } catch (error) {
      console.error("Error updating navigation items:", error);
    }
  };
  
  

  return (
    <div>
      <div className="flex gap-12 items-center pb-2">
        <p className="font-bold">Links</p>
        {isCustomizing ? (
          <p className="">Edit</p>
        ) : (
          <Link
            href={""}
            onClick={toggleCustomization}
            className="text-primary hover:underline"
          >
            Edit
          </Link>
        )}
      </div>
      {navItems
        .filter((item: any) => item.category === "nav")
        .map((item: any, index) =>
          isCustomizing ? (
            <form key={item._id}>
              <div className="flex gap-4">
                <div className="">
                  <label htmlFor="">Field {index + 1}</label>
                  <input
                    className="bg-[#B3B3B3]/25 my-2 p-4"
                    value={
                      labels[index] !== undefined ? labels[index] : item.label
                    }
                    onChange={(e) =>
                      handleInputChange(index, "label", e.target.value)
                    }
                  />
                </div>
                <div className="">
                  <label htmlFor="">Link</label>
                  <input
                    className="bg-[#B3B3B3]/25 my-2 p-4"
                    value={urls[index] !== undefined ? urls[index] : item.url}
                    onChange={(e) =>
                      handleInputChange(index, "url", e.target.value)
                    }
                  />
                </div>
              </div>
            </form>
          ) : (
            <input
              key={item._id}
              className="bg-[#B3B3B3]/25 my-2 p-4"
              value={item.label}
              disabled
            />
          )
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
        {isCustomizing && (
          <button
            className={`w-[124px] h-[43px] bg-[#4A6FBB] text-white text-center rounded-[6px] ${
              isCustomizing ? "" : "cursor-not-allowed"
            }`}
            onClick={handleSave}
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default Navigation;
