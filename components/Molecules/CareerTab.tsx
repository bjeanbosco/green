import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiSolidStarHalf } from "react-icons/bi";
import { VscBriefcase } from "react-icons/vsc";
import { CareerData } from "../../utils/news&eventData";
import CareerCard from "../Atoms/CareerCard";

const CareerTab = () => {
  function truncateString(str: string): string {
    if (str.length > 100) {
      return str.substring(0, 100) + "...";
    }
    return str;
  }
  return (
    <div className="flex justify-center">
      <div className="my-4 w-full">
        <div className="flex flex-col items-center w-full">
          <h1 className="font-bold capitalize text-primary text-center">
            Available Vacancy
          </h1>

          <p className="text-center pb-6">Find The One That’s Right For You</p>
        </div>

        <div className="my-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {CareerData.length > 0 ? (
            CareerData.map((job, index) => (
              <CareerCard
                description={job.description}
                imageUrl={job.imageUrl}
                posted={job.posted}
                slug={job.slug}
                title={job.title}
                type={job.type}
                key={index}
              />
            ))
          ) : (
            <h2 className="font-bold text-primary">No vacancies available</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerTab;
