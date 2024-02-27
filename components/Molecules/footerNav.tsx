import Link from "next/link";
import React, { useState } from "react";

const FooterNav = ({ user }: any)  => {
    const [isCustomizing, setIsCustomizing] = useState(false);
    const [homeValue, setHomeValue] = useState("Home");
    const [aboutValue, setAboutValue] = useState("About us");
    const [educationValue, setEducationValue] = useState("Education");
    const [admissionValue, setAdmissionValue] = useState("Admissions");
    const [newsValue, setNewsValue] = useState("News & Events");
    const [contactValue, setContactValue] = useState("Contact Us");
    const [applyValue, setApplyValue] = useState("Apply");
    const [locationValue, setLocationValue] = useState(" Kigali KG 278 St, Nyarutarama Kigali");
    const [phoneValue, setPhoneValue] = useState("+250735832348");
    const [emailValue, setEmailValue] = useState("info@greenhillsacademy.rw");
  const toggleCustomization = () => {
    setIsCustomizing(!isCustomizing);
  };
  const [activeTab, setActiveTab] = useState("links");

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <div className="my-4 md:w-[80%] bg-white p-4">
      <ul className="flex md:p-4 sm:py-4 border-b-2">
        
        <li className="md:mr-4 sm:hidden">
          <a
            className={`text-gray-600 md:p-4 sm:py-4 hover:text-primary relative ${
              activeTab === "links" ? "font-bold" : "font-bold"
            }`}
            href="#links"
            onClick={() => handleTabClick("links")}
          >
            Links
            {activeTab === "links" && (
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary"></span>
            )}
          </a>
        </li>
        <li className="md:mr-4 sm:hidden">
          <a
            className={`text-gray-600 md:p-4 sm:py-4 hover:text-primary relative ${
              activeTab === "address" ? "font-bold" : "font-bold"
            }`}
            href="#address"
            onClick={() => handleTabClick("address")}
          >
            Address
            {activeTab === "address" && (
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary"></span>
            )}
          </a>
        </li>
      </ul>
      <div className="md:container md:mx-auto mt-4">
        {activeTab === "links" && (
          <div>
            <div className="flex gap-12 items-center pb-2">
              <p className="font-bold">Links</p>
              {isCustomizing ? (
                <p className=" text-lg">Edit</p>
              ) : (
                user?.permissions.includes("write") && (<Link
                  href={""}
                  onClick={toggleCustomization}
                  className="text-lg text-primary hover:underline"
                >
                  Edit
                </Link>)
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
        {activeTab === "address" && (
          <div>
            <div className="flex gap-12 items-center pb-2">
              <p className="font-bold">Address</p>
              {isCustomizing ? (
                <p className=" text-lg">Edit</p>
              ) : (
                user?.permissions.includes("write") && (<Link
                  href={""}
                  onClick={toggleCustomization}
                  className="text-lg text-primary hover:underline"
                >
                  Edit
                </Link>)
              )}
            </div>
            {isCustomizing ? (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={locationValue}
                onChange={(e) => {
                  setLocationValue(e.target.value);
                }}
              />
            ) : (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={locationValue}
                disabled
              />
            )}{" "}
            {isCustomizing ? (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={phoneValue}
                onChange={(e) => {
                  setPhoneValue(e.target.value);
                }}
              />
            ) : (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={phoneValue}
                disabled
              />
            )}
            {isCustomizing ? (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={emailValue}
                onChange={(e) => {
                  setEmailValue(e.target.value);
                }}
              />
            ) : (
              <input
                className="bg-[#B3B3B3]/25 my-2 p-4"
                value={emailValue}
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


export default FooterNav
