import React, { useEffect, useState } from "react";
import Dashboard from "@/components/dashboard";
import Learners from "@/components/Molecules/learners";
import Nationalities from "@/components/Molecules/nationality";
import Courses from "@/components/Molecules/courses";
import Educators from "@/components/Molecules/educator";
import NumberType from "@/types/number";
import User from "@/types/user";
import { decodeToken } from "@/lib/jwt";
import axios from "axios";


const MainWebPages = () => {
  const [activeTab, setActiveTab] = useState("learners");
  // Create a function to handle tab click
  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };
  const [numbers, setNumbers] = useState<NumberType[]>([])
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("user_session");
        if (token) {
          const user = decodeToken(token);
          setUser(user);
        }
        const response = await axios.get("/api/numbers");
        setNumbers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Dashboard>
      <main className="bg-[#F5FBFF]">
        <section className="flex justify-center">
          <div className="w-[100%]">
            <div>
              <h3 className="font-bold">Numbers</h3>
              <p className="">Welcome Back, {user?.name ? user.name.split(' ')[0] : "Guest"}!</p>

            </div>
            <div className="flex my-8 gap-12 p-4">
              <button
                className={`${
                  activeTab === "learners"
                    ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                    : "text-[#616161] hover:text-white hover:bg-primary bg-[#B3B3B3]/25"
                } flex items-center rounded-[6px] py-2 justify-center cursor-pointer px-8`}
                onClick={() => handleTabClick("learners")}
              >
                Learners
              </button>
              <button
                className={`${
                  activeTab === "nationality"
                    ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                    : "text-[#616161] hover:text-white hover:bg-primary bg-[#B3B3B3]/25"
                } flex items-center rounded-[6px] py-2 justify-center cursor-pointer px-8`}
                onClick={() => handleTabClick("nationality")}
              >
                Nationalities
              </button>
              <button
                className={`${
                  activeTab === "courses"
                    ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                    : "text-[#616161] hover:text-white hover:bg-primary bg-[#B3B3B3]/25"
                } flex items-center rounded-[6px] py-2 justify-center cursor-pointer px-8`}
                onClick={() => handleTabClick("courses")}
              >
                Courses
              </button>
              <div
                className={`${
                  activeTab === "educators"
                    ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                    : "text-[#616161] hover:text-white hover:bg-primary bg-[#B3B3B3]/25"
                } flex items-center rounded-[6px] py-2 justify-center cursor-pointer px-8`}
                onClick={() => handleTabClick("educators")}
              >
                Educators
              </div>
            </div>
            <div className="md:h-screen mx-8">
              {activeTab === "learners" && (
                <div>
                  <Learners user={user} title={numbers.find(item => item.sectionSlug === "LEARNERS")?.title || "No Data"} numberValue={numbers.find(item => item.sectionSlug === "LEARNERS")?.number || "No Data"} />
                </div>
              )}
              {activeTab === "nationality" && (
                <div>
                  <Nationalities user={user} title={numbers.find(item => item.sectionSlug === "NATIONALITIES")?.title || "No Data"} numberValue={numbers.find(item => item.sectionSlug === "NATIONALITIES")?.number || "No Data"} />
                </div>
              )}
              {activeTab === "courses" && (
                <div>
                  <Courses user={user} title={numbers.find(item => item.sectionSlug === "COURSES")?.title || "No Data"} numberValue={numbers.find(item => item.sectionSlug === "COURSES")?.number || "No Data"} />
                </div>
              )}
              {activeTab === "educators" && (
                <div>
                  <Educators user={user} title={numbers.find(item => item.sectionSlug === "EDUCATORS")?.title || "No Data"} numberValue={numbers.find(item => item.sectionSlug === "EDUCATORS")?.number || "No Data"} />
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </Dashboard>
  );
};

export default MainWebPages;
