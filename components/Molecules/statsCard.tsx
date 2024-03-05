/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */

import React, { memo, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Stats = memo(() => {
  const [learnerCount, setLearnerCount] = useState(0);
  const [nationalityCount, setNationalityCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);
  const [educatorCount, setEducatorCount] = useState(0);

  const targetCounts = {
    learnerCount: 2050, // Set the desired number for learners
    nationalityCount: 60, // Set the desired number for nationalities
    courseCount: 80, // Set the desired number for courses
    educatorCount: 180, // Set the desired number for educators
  };

  useEffect(() => {
    // You can replace this with your actual data fetching logic
    const fetchData = async () => {
      const intervalId = setInterval(() => {
        setLearnerCount((prevCount) =>
          prevCount < targetCounts.learnerCount ? prevCount + 20 : prevCount
        );
        setNationalityCount((prevCount) =>
          prevCount < targetCounts.nationalityCount ? prevCount + 20 : prevCount
        );
        setCourseCount((prevCount) =>
          prevCount < targetCounts.courseCount ? prevCount + 20 : prevCount
        );
        setEducatorCount((prevCount) =>
          prevCount < targetCounts.educatorCount ? prevCount + 20 : prevCount
        );
      }, 1000);

      // Cleanup interval on component unmount
      return () => clearInterval(intervalId);
    };

    fetchData();

    // You may also want to fetch initial data here
  }, [targetCounts]);

   const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });

  return (
    <div
      className="w-full sm:h-[200px] h-[400px] bg-fixed bg-cover bg-no-repeat bg-center flex justify-center"
      ref={ref}
      style={{
        backgroundImage:
          `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url(${inView ? "https://greenhillsacademy.rw:8081/images/DSC_6818_fwdzpf.jpg" : ""})`,
      }}
    >
      <div className="w-[80%] place-items-center grid grid-cols-4 gap-4">
        {/* Learners */}
        <div className="grid gap-4 items-center">
          <div className="flex justify-center">
            <img
              loading="lazy"
              src="/icons/Learners_g6now4.png"
              alt=""
              className="sm:w-[30px] sm:h-[30px] w-[80px] h-[80px]"
            />
          </div>
          <h1 className="text-center text-[yellow] font-black">
            {learnerCount}
          </h1>
          <p className="sm:text-xs text-white text-center">Learners</p>
        </div>

        {/* Nationalities */}
        <div className="grid gap-4">
          <div className="flex justify-center">
            <img
              loading="lazy"
              src="/icons/Nationalities_zqfvf4.png"
              alt="Nationalities"
              className="sm:w-[30px] sm:h-[30px] w-[80px] h-[80px]"
            />
          </div>
          <h1 className="text-center text-[yellow] font-black">
            {nationalityCount}+
          </h1>
          <p className="sm:text-xs text-white text-center">Nationalities</p>
        </div>

        {/* Courses */}
        <div className="grid gap-4">
          <div className="flex justify-center">
            <img
              loading="lazy"
              src="/icons/Courses_igvtpi.png"
              alt="Courses"
              className="sm:w-[30px] sm:h-[30px] w-[80px] h-[80px]"
            />
          </div>
          <h1 className="text-center text-[yellow] font-black">
            {courseCount}+
          </h1>
          <p className="sm:text-xs text-white text-center">Courses</p>
        </div>

        {/* Educators */}
        <div className="grid gap-4">
          <div className="flex justify-center">
            <img
              loading="lazy"
              src="/icons/Educators_tf8ipr.png"
              alt="Educators"
              className="sm:w-[30px] sm:h-[30px] w-[80px] h-[80px]"
            />
          </div>
          <h1 className="text-center text-[yellow] font-black">
            {educatorCount}
          </h1>
          <p className="sm:text-xs text-white text-center">Educators</p>
        </div>
      </div>
    </div>
  );
});
Stats.displayName = "Stats";
export default Stats;
