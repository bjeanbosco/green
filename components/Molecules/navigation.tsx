import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Navigation = ({ user }: any) => {
  const [homeValue, setHomeValue] = useState("");
  const [homeLink, setHomeLink] = useState("");
  const [aboutValue, setAboutValue] = useState("About us");
  const [educationValue, setEducationValue] = useState("Education");
  const [admissionValue, setAdmissionValue] = useState("Admissions");
  const [newsValue, setNewsValue] = useState("News & Events");
  const [contactValue, setContactValue] = useState("Contact Us");
  const [applyValue, setApplyValue] = useState("Apply");
  const [studentValue, setStudentValue] = useState("Student Experience");
  const [alumniValue, setAlumniValue] = useState("Alumni");
  const [calendarValue, setCalendarValue] = useState("Calendar");
  const [navItems, setNavItems] = useState<any[]>([]);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [labels, setLabels] = useState<string[]>([]);
  const [urls, setUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchNavItems = async () => {
      try {
        const response = await axios.get("/api/navigationItem");
        setNavItems(response.data);
      } catch (error) {
        console.error("Error fetching navigation items:", error);
      }
    };

    fetchNavItems();
  }, []);

  const [formData, setFormData] = useState({
    label: "",
    url: "",
    category: "",
  });
  const [activeTab, setActiveTab] = useState("navbar");
  const toggleCustomization = () => {
    setIsCustomizing(!isCustomizing);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchNavItems = async () => {
      try {
        const response = await axios.get("/api/navigationItem");
        setNavItems(response.data);
      } catch (error) {
        console.error("Error fetching navigation items:", error);
      }
    };

    fetchNavItems();
  }, []);

  const handleAddItem = async () => {
    try {
      const response = await axios.post("/api/navigationItem", formData);
      setNavItems([...navItems, response.data]);
      setFormData({ label: "", url: "", category: "" });
    } catch (error) {
      console.error("Error adding navigation item:", error);
    }
  };

  const handleSave = async () => {
    try {
      // Create an array to hold the updated items
      const updatedItems: any[] = [];
  
      // Loop through each item and include non-empty values
      navItems.forEach((item: any, index) => {
        const updatedItem: any = { _id: item._id };
        if (labels[index].trim() !== "") {
          updatedItem.label = labels[index];
        }
        if (urls[index].trim() !== "") {
          updatedItem.url = urls[index];
        }
        updatedItem.category = "nav";
        updatedItems.push(updatedItem);
      });
  
      // Send the updatedItems array in the request
      const response = await axios.put("/api/navigationItems", updatedItems);
  
      // Update the state with the response data
      setNavItems(response.data);
  
      // Reset labels and urls arrays
      setLabels([]);
      setUrls([]);
  
      // Exit editing mode
      setIsCustomizing(false);
  
      console.log("Navigation items updated successfully!");
    } catch (error) {
      console.error("Error updating navigation items:", error);
    }
  };
  

  const handleEditItem = async (itemId: string, categoryItem: string) => {
    try {
      // Create an array to hold the updated values
      const updatedItems: any[] = [];

      // Loop through each item and include non-empty values
      navItems.forEach((item, index) => {
        const updatedItem: any = { _id: item._id };
        if (labels[index].trim() !== "") {
          updatedItem.label = labels[index];
        }
        if (urls[index].trim() !== "") {
          updatedItem.url = urls[index];
        }
        updatedItem.category = categoryItem;
        updatedItems.push(updatedItem);
      });

      // Send the updatedItems array in the request
      const response = await axios.put(
        `/api/navigationItem/?id=${itemId}`,
        updatedItems
      );

      // Update the state with the response data
      setNavItems(response.data);
    } catch (error) {
      console.error("Error updating navigation items:", error);
    }
  };

  

  return (
    <div className="my-4 md:w-[80%] bg-white p-4">
      <ul className="flex md:p-4 sm:py-4 border-b-2">
        <li className="md:mr-4 sm:hidden">
          <a
            className={`text-gray-600 md:p-4 sm:py-4 hover:text-primary relative ${
              activeTab === "navbar" ? "font-bold" : "font-bold"
            }`}
            href="#navbar"
            onClick={() => handleTabClick("navbar")}
          >
            Navbar
            {activeTab === "navbar" && (
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary"></span>
            )}
          </a>
        </li>
        <li className="md:mr-4 sm:hidden">
          <a
            className={`text-gray-600 md:p-4 sm:py-4 hover:text-primary relative ${
              activeTab === "menu" ? "font-bold" : "font-bold"
            }`}
            href="#menu"
            onClick={() => handleTabClick("menu")}
          >
            Menu
            {activeTab === "menu" && (
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary"></span>
            )}
          </a>
        </li>
      </ul>
      <div className="md:container md:mx-auto mt-4">
        {activeTab === "navbar" && (
          <div>
            <div className="flex gap-12 items-center pb-2">
              <p className="font-bold">Links</p>
              {isCustomizing ? (
                <p className=" text-lg">Edit</p>
              ) : (
                user?.permissions
                  .map((permission: string) => permission.toLowerCase())
                  .includes("edit".toLowerCase()) && (
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
                      value={labels[index] !== "" ? labels[index] : item.label}
                      onChange={(e) => {
                        const newLabels = [...labels];
                        newLabels[index] = e.target.value;
                        setLabels(newLabels);
                      }}
                    />
                  </div>
                  <div className="">
                    <label htmlFor="">Link</label>
                    <input
                      className="bg-[#B3B3B3]/25 my-2 p-4"
                      value={urls[index] !== "" ? urls[index] : item.url}
                      onChange={(e) => {
                        const newUrls = [...urls];
                        newUrls[index] = e.target.value;
                        setUrls(newUrls);
                      }}
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

            {isCustomizing ? (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={aboutValue}
                onChange={(e) => {
                  setAboutValue(e.target.value);
                }}
              />
            ) : (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={aboutValue}
                disabled
              />
            )}
            {isCustomizing ? (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={educationValue}
                onChange={(e) => {
                  setEducationValue(e.target.value);
                }}
              />
            ) : (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={educationValue}
                disabled
              />
            )}
            {isCustomizing ? (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={admissionValue}
                onChange={(e) => {
                  setAdmissionValue(e.target.value);
                }}
              />
            ) : (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={admissionValue}
                disabled
              />
            )}
            {isCustomizing ? (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={newsValue}
                onChange={(e) => {
                  setNewsValue(e.target.value);
                }}
              />
            ) : (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={newsValue}
                disabled
              />
            )}
            {isCustomizing ? (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={contactValue}
                onChange={(e) => {
                  setContactValue(e.target.value);
                }}
              />
            ) : (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={contactValue}
                disabled
              />
            )}
            <p className="font-bold mt-8 pb-2">Button</p>
            {isCustomizing ? (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={applyValue}
                onChange={(e) => {
                  setApplyValue(e.target.value);
                }}
              />
            ) : (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={applyValue}
                disabled
              />
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
        )}
        {activeTab === "menu" && (
          <div>
            <div className="flex gap-12 items-center pb-2">
              <p className="font-bold">Links</p>
              {isCustomizing ? (
                <p className=" text-lg">Edit</p>
              ) : (
                user?.permissions
                  .map((permission: string) => permission.toLowerCase())
                  .includes("edit".toLowerCase()) && (
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
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={homeValue}
                onChange={(e) => {
                  setHomeValue(e.target.value);
                }}
              />
            ) : (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={homeValue}
                disabled
              />
            )}{" "}
            {isCustomizing ? (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={aboutValue}
                onChange={(e) => {
                  setAboutValue(e.target.value);
                }}
              />
            ) : (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={aboutValue}
                disabled
              />
            )}
            {isCustomizing ? (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={admissionValue}
                onChange={(e) => {
                  setAdmissionValue(e.target.value);
                }}
              />
            ) : (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={admissionValue}
                disabled
              />
            )}
            {isCustomizing ? (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={studentValue}
                onChange={(e) => {
                  setStudentValue(e.target.value);
                }}
              />
            ) : (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={studentValue}
                disabled
              />
            )}
            {isCustomizing ? (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={alumniValue}
                onChange={(e) => {
                  setAlumniValue(e.target.value);
                }}
              />
            ) : (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={alumniValue}
                disabled
              />
            )}
            {isCustomizing ? (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={newsValue}
                onChange={(e) => {
                  setNewsValue(e.target.value);
                }}
              />
            ) : (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={newsValue}
                disabled
              />
            )}
            {isCustomizing ? (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={calendarValue}
                onChange={(e) => {
                  setCalendarValue(e.target.value);
                }}
              />
            ) : (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={calendarValue}
                disabled
              />
            )}
            {isCustomizing ? (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={contactValue}
                onChange={(e) => {
                  setContactValue(e.target.value);
                }}
              />
            ) : (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={contactValue}
                disabled
              />
            )}
            <p className="font-bold mt-8 pb-2">Button</p>
            {isCustomizing ? (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={applyValue}
                onChange={(e) => {
                  setApplyValue(e.target.value);
                }}
              />
            ) : (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={applyValue}
                disabled
              />
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
                className={`w-[124px] h-[43px] bg-[#4A6FBB] text-white text-center rounded-[6px] ${
                  isCustomizing ? "" : "cursor-not-allowed"
                }`}
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
