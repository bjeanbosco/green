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
import ExtracurricularActivity from "@/components/Molecules/ExtracurricularActivity";
import LearnersClubs from "@/components/Molecules/Learners_clubs";
import Creative_offers from "@/components/Molecules/CreativeOffers";
import Counselling from "@/components/Molecules/Counselling";
import HighSchoolPage from "@/components/Organisms/HighSchoolPage";
import MiddleSchoolPage from "@/components/Organisms/MiddleSchoolPage";
import PrimaryPage from "@/components/Organisms/PrimaryPage";
import NurseryPage from "@/components/Organisms/NurseryPage";

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
              <p className="">Welcome Back, {user?.name ? user.name.split(' ')[0] : "Guest"}!</p>

            </div>
            <div className="flex justify-center mt-12">
              <div className="flex overflow-x-auto my-8 gap-12 p-4">
                <button
                  className={`${
                    activeTab === "landing"
                      ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                      : "text-[#616161] hover:text-white hover:bg-primary"
                  } flex items-center rounded-[6px] py-2 justify-center cursor-pointer px-8`}
                  onClick={() => handleTabClick("landing")}
                >
                  Landing&nbsp;Page
                </button>
                <button
                  className={`${
                    activeTab === "about"
                      ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                      : "text-[#616161] hover:text-white hover:bg-primary"
                  } flex items-center rounded-[6px] py-2 justify-center cursor-pointer px-8`}
                  onClick={() => handleTabClick("about")}
                >
                  About&nbsp;us
                </button>
                <button
                  className={`${
                    activeTab === "education"
                      ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                      : "text-[#616161] hover:text-white hover:bg-primary"
                  } flex items-center rounded-[6px] py-2 justify-center cursor-pointer px-8`}
                  onClick={() => handleTabClick("education")}
                >
                  Education
                </button>
                <div
                  className={`${
                    activeTab === "admissions"
                      ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                      : "text-[#616161] hover:text-white hover:bg-primary"
                  } flex items-center rounded-[6px] py-2 justify-center cursor-pointer px-8`}
                  onClick={() => handleTabClick("admissions")}
                >
                  Admissions
                </div>
                <div
                  className={`${
                    activeTab === "boarding"
                      ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                      : "text-[#616161] hover:text-white hover:bg-primary"
                  } flex items-center rounded-[6px] py-2 justify-center cursor-pointer px-8`}
                  onClick={() => handleTabClick("boarding")}
                >
                  Boarding
                </div>
                <button
                  className={`${
                    activeTab === "contact"
                      ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                      : "text-[#616161] hover:text-white hover:bg-primary"
                  } flex items-center rounded-[6px] py-2 justify-center cursor-pointer px-8`}
                  onClick={() => handleTabClick("contact")}
                >
                  Contact&nbsp;Us
                </button>
                <button
                  className={`${
                    activeTab === "learners"
                      ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                      : "text-[#616161] hover:text-white hover:bg-primary"
                  } flex items-center rounded-[6px] py-2 justify-center cursor-pointer px-8`}
                  onClick={() => handleTabClick("learners")}
                >
                  Learners&nbsp;life{" "}
                </button>
                {/* //// */}
                <button
                  className={`${
                    activeTab === "extracurricular"
                      ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                      : "text-[#616161] hover:text-white hover:bg-primary"
                  } flex items-center rounded-[6px] py-2 justify-center cursor-pointer px-8`}
                  onClick={() => handleTabClick("extracurricular")}
                >
                  Extracurricular&nbsp;Activities
                </button>
                <button
                  className={`${
                    activeTab === "counselor"
                      ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                      : "text-[#616161] hover:text-white hover:bg-primary"
                  } flex items-center rounded-[6px] py-2 justify-center cursor-pointer px-8`}
                  onClick={() => handleTabClick("counselor")}
                >
                  Counselling&nbsp;Department
                </button>
                <button
                  className={`${
                    activeTab === "creative"
                      ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                      : "text-[#616161] hover:text-white hover:bg-primary"
                  } flex items-center rounded-[6px] py-2 justify-center cursor-pointer px-8`}
                  onClick={() => handleTabClick("creative")}
                >
                   Creative&nbsp;Offers
                </button>
                <button
                  className={`${
                    activeTab === "clubs"
                      ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                      : "text-[#616161] hover:text-white hover:bg-primary"
                  } flex items-center rounded-[6px] py-2 justify-center cursor-pointer px-8`}
                  onClick={() => handleTabClick("clubs")}
                >
                  Learners&nbsp;Clubs
                </button>
                {/* //// */}
                <button
                  className={`${
                    activeTab === "leadership"
                      ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                      : "text-[#616161] hover:text-white hover:bg-primary"
                  } flex items-center rounded-[6px] py-2 justify-center cursor-pointer px-8`}
                  onClick={() => handleTabClick("leadership")}
                >
                  Leadership
                </button>
                <button
                  className={`${
                    activeTab === "facilities"
                      ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                      : "text-[#616161] hover:text-white hover:bg-primary"
                  } flex items-center rounded-[6px] py-2 justify-center cursor-pointer px-8`}
                  onClick={() => handleTabClick("facilities")}
                >
                  Facilities
                </button>
                <button
                  className={`${
                    activeTab === "accreditation"
                      ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                      : "text-[#616161] hover:text-white hover:bg-primary"
                  } flex items-center rounded-[6px] py-2 justify-center cursor-pointer px-8`}
                  onClick={() => handleTabClick("accreditation")}
                >
                  Accreditation
                </button>
                {/* /////////// */}
                <button
                  className={`${
                    activeTab === "nursery"
                      ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                      : "text-[#616161] hover:text-white hover:bg-primary"
                  } flex items-center rounded-[6px] py-2 justify-center cursor-pointer px-8`}
                  onClick={() => handleTabClick("nursery")}
                >
                  Nursery
                </button>
                <button
                  className={`${
                    activeTab === "primary"
                      ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                      : "text-[#616161] hover:text-white hover:bg-primary"
                  } flex items-center rounded-[6px] py-2 justify-center cursor-pointer px-8`}
                  onClick={() => handleTabClick("primary")}
                >
                  Primary
                </button>
                <button
                  className={`${
                    activeTab === "middle"
                      ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                      : "text-[#616161] hover:text-white hover:bg-primary"
                  } flex items-center rounded-[6px] py-2 justify-center cursor-pointer px-8`}
                  onClick={() => handleTabClick("middle")}
                >
                  Middle
                </button>
                <button
                  className={`${
                    activeTab === "high"
                      ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                      : "text-[#616161] hover:text-white hover:bg-primary"
                  } flex items-center rounded-[6px] py-2 justify-center cursor-pointer px-8`}
                  onClick={() => handleTabClick("high")}
                >
                  High
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
            {/*  */}
            {activeTab === "extracurricular" && (
              <div>
                <ExtracurricularActivity />
              </div>
            )}
            {activeTab === "counselor" && (
              <div>
                <Counselling />
              </div>
            )}{activeTab === "creative" && (
              <div>
                <Creative_offers />
              </div>
            )}{activeTab === "clubs" && (
              <div>
                <LearnersClubs />
              </div>
            )}
            {/*  */}
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
            {/*  */}
            {activeTab === "nursery" && (
              <div>
                <NurseryPage />
              </div>
            )}
            {activeTab === "primary" && (
              <div>
                <PrimaryPage />
              </div>
            )}
            {activeTab === "middle" && (
              <div>
                <MiddleSchoolPage />
              </div>
            )}
            {activeTab === "high" && (
              <div>
                <HighSchoolPage />
              </div>
            )}
          </div>
        </section>
      </main>
    </Dashboard>
  );
};

export default MainWebPages;
