import React, { useEffect, useState } from "react";
import Dashboard from "@/components/dashboard";
import Navigation from "@/components/Molecules/navigation";
import FooterNav from "@/components/Molecules/footerNav";
import SocialMedia from "@/components/Molecules/SocialMedia";
import { decodeToken } from "@/lib/jwt";
import User from "@/types/user";

const MainWebPages = () => {
  const [activeTab, setActiveTab] = useState("nav");

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const token = localStorage.getItem("user_session");
    if (!token) {
      console.error("Error fetching user data");
      return;
    }
    const user = decodeToken(token);
    setUser(user);
  }, []);

  return (
    <Dashboard>
      <main className="bg-[#F5FBFF]">
        <section className="flex justify-center">
          <div className="w-[100%]">
            <div>
              <h3 className="font-bold">Others</h3>
              <p className="">Welcome Back, {user?.name ? user.name.split(' ')[0] : "Guest"}!</p>

            </div>
            <div className="flex my-8 gap-12 p-4">
              <button
                className={`${
                  activeTab === "nav"
                    ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                    : "text-[#616161] hover:text-white hover:bg-primary bg-[#B3B3B3]/25"
                } flex items-center rounded-[6px] py-2  justify-center cursor-pointer px-8`}
                onClick={() => handleTabClick("nav")}
              >
                Navigation bar
              </button>
              <button
                className={`${
                  activeTab === "social"
                    ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                    : "text-[#616161] hover:text-white hover:bg-primary bg-[#B3B3B3]/25"
                } flex items-center rounded-[6px] py-2 justify-center cursor-pointer px-8`}
                onClick={() => handleTabClick("social")}
              >
                Social Media
              </button>
            </div>
            <div className="md:h-screen mx-8">
              {activeTab === "nav" && (
                <div>
                  <Navigation user={user} />
                </div>
              )}
              {activeTab === "social" && (
                <div>
                  <SocialMedia user={user} />
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
