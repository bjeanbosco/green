import Link from "next/link";
import React, { useState } from "react";

const SocialMedia = ({ user }: any) => {
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [facebookValue, setFacebookValue] = useState("");
  const [instagramValue, setInstagramValue] = useState("");
  const [youtubeValue, setYoutubeValue] = useState("");
  const [twitterValue, setTwitterValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const toggleCustomization = () => {
    setIsCustomizing(!isCustomizing);
  };
  const [activeTab, setActiveTab] = useState("links");

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <div className="my-4 md:w-[80%] bg-white p-4">
      <div>
        <p>Social Media </p>
        <hr className="my-4" />
        <div className="flex gap-12 items-center pb-2">
          <p className="font-bold">Links</p>
          {isCustomizing ? (
            <p className=" text-lg">Edit</p>
          ) : (
            user?.permissions.includes("write") && (
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
            value={facebookValue}
            onChange={(e) => {
              setFacebookValue(e.target.value);
            }}
            placeholder="Facebook Link"
          />
        ) : (
          <input
            className="bg-[#B3B3B3]/25 my-2 p-4"
            value={facebookValue}
            disabled
            placeholder="Facebook Link"
          />
        )}{" "}
        {isCustomizing ? (
          <input
            className="bg-[#B3B3B3]/25 my-2 p-4"
            value={instagramValue}
            onChange={(e) => {
              setInstagramValue(e.target.value);
            }}
            placeholder="Instagram Link"
          />
        ) : (
          <input
            className="bg-[#B3B3B3]/25 my-2 p-4"
            value={instagramValue}
            disabled
            placeholder="Instagram Link"
          />
        )}
        {isCustomizing ? (
          <input
            className="bg-[#B3B3B3]/25 my-2 p-4"
            value={youtubeValue}
            onChange={(e) => {
              setYoutubeValue(e.target.value);
            }}
            placeholder="Youtube Link"
          />
        ) : (
          <input
            className="bg-[#B3B3B3]/25 my-2 p-4"
            value={youtubeValue}
            disabled
            placeholder="Youtube Link"
          />
        )}
        {isCustomizing ? (
          <input
            className="bg-[#B3B3B3]/25 my-2 p-4"
            value={twitterValue}
            onChange={(e) => {
              setTwitterValue(e.target.value);
            }}
            placeholder="Twitter Link"
          />
        ) : (
          <input
            className="bg-[#B3B3B3]/25 my-2 p-4"
            value={twitterValue}
            placeholder="Twitter Link"
            disabled
          />
        )}
        {isCustomizing ? (
          <input
            className="bg-[#B3B3B3]/25 my-2 p-4"
            value={phoneValue}
            placeholder="Phone Number"
            onChange={(e) => {
              setPhoneValue(e.target.value);
            }}
          />
        ) : (
          <input
            className="bg-[#B3B3B3]/25 my-2 p-4"
            value={phoneValue}
            placeholder="Phone Number"
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
    </div>
  );
};

export default SocialMedia;
