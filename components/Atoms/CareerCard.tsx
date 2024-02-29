import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiSolidStarHalf } from "react-icons/bi";
import { VscBriefcase } from "react-icons/vsc";
import Button from "./Button";
// interface CareerCardProps {
//     slug: string;
//     title: string;
//     type: string;
//     posted: string;
//     isPublished?: boolean;
//     deadline?: string;
//     publishDate: string;
//     industry?: string;
//     jobLevel?: string;
//     experience?: string;
//     salary?: string;
//     imageUrl: string;
//     description: string;

// }

interface CareerCardProps {
  slug: string;
  title: string;
  type: string;
  posted: string;
  imageUrl: string;
  description: string;
}

export default function CareerCard({
  description,
  imageUrl,
  posted,
  slug,
  title,
  type,
}: CareerCardProps) {
  return (
    <div className="border bg-primary text-white rounded-xl shadow-lg p-2">
      <div
        className="w-full h-[300px] rounded-2xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex-col justify-start items-start gap-8 flex ml-4">
          <div className="grid place-items-center mt-4 text-white px-4 py-1 text-center bg-[yellow] bg-opacity-50 rounded-lg text-xs font-['Outfit']">
            <div className="flex">
              {type}{" "}
              <div className="animate-bounce w-2 h-2 h-full rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </div>
      <div className="p-2">
        <h5 className="text-2xl font-bold">{title}</h5>
        <div className="flex space-x-4 my-2">
          <div className="flex text-sm text-gray-200 space-x-1.5">
            <VscBriefcase className="text-sm mt-0.5 font-bold" />{" "}
            <span>{type}</span>
          </div>
          <div className="flex text-sm text-gray-200 space-x-1.5">
            <AiOutlineClockCircle className="text-sm mt-0.5 font-bold" />{" "}
            <span>{posted}</span>
          </div>
        </div>
        <hr />
        <p className="text-justify text-lg my-2">
          {truncateString(description)}
        </p>
      </div>
      <div className="">
        <Button
          action={`/news/career_page/${slug}?tab=career`}
          name="Apply now"
          background="#fff"
          border="1px solid var(--color-border)"
          color="#018c79"
          icon={<BiSolidStarHalf className="" />}
        />
      </div>
    </div>
  );
}
function truncateString(str: string): string {
  if (str.length > 100) {
    return str.substring(0, 100) + "...";
  }
  return str;
}
