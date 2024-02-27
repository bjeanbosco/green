import React, { useEffect, useState } from "react";
import LandingPage from "@/components/Molecules/WebPages/landing";
import AboutPage from "@/components/Molecules/WebPages/about";
import EducationMainPage from "@/components/Molecules/WebPages/education";
import AdmissionPage from "@/components/Molecules/WebPages/admission";
import BoardingPage from "@/components/Molecules/WebPages/boarding";
import ContactPage from "@/components/Molecules/WebPages/contact";
import LearnerLifePage from "@/components/Molecules/WebPages/learnerLife";
import LeadershipPage from "@/components/Molecules/WebPages/leadership";
import FacilitiesPage from "@/components/Molecules/WebPages/facilities";
import AccreditationPage from "@/components/Molecules/WebPages/accreditations";
import Dashboard from "@/components/dashboard";
import User from "@/types/user";
import { decodeToken } from "@/lib/jwt";

const MainWebPages = () => {
  const [activeTab, setActiveTab] = useState("landing");

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  const [user, setUser] = useState<User>();

  useEffect(() => {
    const token = localStorage.getItem("user_session");
    if (token) {
      const decodedUser = decodeToken(token);
      setUser(decodedUser);
    }
  }, []);

  return (
    <Dashboard>
      <main className="bg-[#F5FBFF]">
        <section className="flex justify-center">
          <div className="w-[100%]">
            <div>
              <h3 className="font-bold">Web Pages</h3>
              <p className="">Welcome Back, {user?.username || "Guest"} !</p>
            </div>
            <div className="flex justify-center mt-12">
              <div className="flex overflow-x-auto my-8 gap-12 p-4">
                <button
                  className={`${
                    activeTab === "landing"
                      ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                      : "text-[#616161] hover:text-white hover:bg-primary"
                  } flex items-center rounded-[6px] h-[38px] justify-center cursor-pointer w-[136px] px-8 font-['Outfit']`}
                  onClick={() => handleTabClick("landing")}
                >
                  Landing&nbsp;Page
                </button>
                <button
                  className={`${
                    activeTab === "about"
                      ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                      : "text-[#616161] hover:text-white hover:bg-primary"
                  } flex items-center rounded-[6px] h-[38px] justify-center cursor-pointer w-[136px] px-8 font-['Outfit']`}
                  onClick={() => handleTabClick("about")}
                >
                  About&nbsp;us
                </button>
                <button
                  className={`${
                    activeTab === "education"
                      ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                      : "text-[#616161] hover:text-white hover:bg-primary"
                  } flex items-center rounded-[6px] h-[38px] justify-center cursor-pointer w-[136px] px-8 font-['Outfit']`}
                  onClick={() => handleTabClick("education")}
                >
                  Education
                </button>
                <div
                  className={`${
                    activeTab === "admissions"
                      ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                      : "text-[#616161] hover:text-white hover:bg-primary"
                  } flex items-center rounded-[6px] h-[38px] justify-center cursor-pointer w-[136px] px-8 font-['Outfit']`}
                  onClick={() => handleTabClick("admissions")}
                >
                  Admissions
                </div>
                <div
                  className={`${
                    activeTab === "boarding"
                      ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                      : "text-[#616161] hover:text-white hover:bg-primary"
                  } flex items-center rounded-[6px] h-[38px] justify-center cursor-pointer w-[136px] px-8 font-['Outfit']`}
                  onClick={() => handleTabClick("boarding")}
                >
                  Boarding
                </div>
                <button
                  className={`${
                    activeTab === "contact"
                      ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                      : "text-[#616161] hover:text-white hover:bg-primary"
                  } flex items-center rounded-[6px] h-[38px] justify-center cursor-pointer w-[136px] px-8 font-['Outfit']`}
                  onClick={() => handleTabClick("contact")}
                >
                  Contact&nbsp;Us
                </button>
                <button
                  className={`${
                    activeTab === "learners"
                      ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                      : "text-[#616161] hover:text-white hover:bg-primary"
                  } flex items-center rounded-[6px] h-[38px] justify-center cursor-pointer w-[136px] px-8 font-['Outfit']`}
                  onClick={() => handleTabClick("learners")}
                >
                  Learners&nbsp;life{" "}
                </button>
                <button
                  className={`${
                    activeTab === "leadership"
                      ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                      : "text-[#616161] hover:text-white hover:bg-primary"
                  } flex items-center rounded-[6px] h-[38px] justify-center cursor-pointer w-[136px] px-8 font-['Outfit']`}
                  onClick={() => handleTabClick("leadership")}
                >
                  Leadership
                </button>
                <button
                  className={`${
                    activeTab === "facilities"
                      ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                      : "text-[#616161] hover:text-white hover:bg-primary"
                  } flex items-center rounded-[6px] h-[38px] justify-center cursor-pointer w-[136px] px-8 font-['Outfit']`}
                  onClick={() => handleTabClick("facilities")}
                >
                  Facilities
                </button>
                <button
                  className={`${
                    activeTab === "accreditation"
                      ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                      : "text-[#616161] hover:text-white hover:bg-primary"
                  } flex items-center rounded-[6px] h-[38px] justify-center cursor-pointer w-[136px] px-8 font-['Outfit']`}
                  onClick={() => handleTabClick("accreditation")}
                >
                  Accreditation
                </button>
              </div>
            </div>

            {activeTab === "landing" && (
              <div>
                <LandingPage user={user} />
              </div>
            )}
            {activeTab === "about" && (
              <div>
                <AboutPage user={user} />
              </div>
            )}
            {activeTab === "education" && (
              <div>
                <EducationMainPage user={user} />
              </div>
            )}
            {activeTab === "admissions" && (
              <div>
                <AdmissionPage />
              </div>
            )}
            {activeTab === "boarding" && (
              <div>
                <BoardingPage />
              </div>
            )}
            {activeTab === "contact" && (
              <div>
                <ContactPage />
              </div>
            )}
            {activeTab === "learners" && (
              <div>
                <LearnerLifePage />
              </div>
            )}
            {activeTab === "leadership" && (
              <div>
                <LeadershipPage />
              </div>
            )}
            {activeTab === "facilities" && (
              <div>
                <FacilitiesPage />
              </div>
            )}
            {activeTab === "accreditation" && (
              <div>
                <AccreditationPage />
              </div>
            )}
          </div>
        </section>
      </main>
    </Dashboard>
  );
};

export default MainWebPages;
