import Dashboard from "@/components/dashboard";
import React, { useEffect, useState } from "react";
import Event from "@/components/Molecules/event";
import News from "@/components/Molecules/news";
import Career from "@/components/Molecules/career";
import axiosInstance from "@/lib/axios";
import User from "@/types/user";
import { decodeToken } from "@/lib/jwt";

export const getServerSideProps = (async () => {
  const news = (await axiosInstance.get("/news")).data
  const events = (await axiosInstance.get("/events")).data
  const careers = (await axiosInstance.get("/careers")).data

  return { props: { news, events, careers } }
}) 

const PostsPage = () => {
  const [activeTab, setActiveTab] = useState("News");

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  const [user, setUser] = useState<User>();

  useEffect(() => {
    const token = localStorage.getItem("user_session");

    if (token) {
      const user = decodeToken(token);
      setUser(user);
    }
  }, []);

  return (
    <Dashboard>
      <div>
        <div>
          <h3 className="font-bold">Posts</h3>
          <p className="">Welcome Back, {user?.name ? user.name.split(' ')[0] : "Guest"}!</p>

        </div>
        <div className="flex my-8 md:gap-8 gap-1 w-full py-4">
          <button
            className={`${
              activeTab === "News"
                ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                : "text-[#616161] hover:text-white hover:bg-primary bg-[#B3B3B3]/25"
            } flex items-center rounded-[6px] h-[38px] justify-center cursor-pointer w-[136px] px-8 font-['Outfit']`}
            onClick={() => handleTabClick("News")}
          >
            News
          </button>
          <button
            className={`${
              activeTab === "Events"
                ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                : "text-[#616161] hover:text-white hover:bg-primary bg-[#B3B3B3]/25"
            } flex items-center rounded-[6px] h-[38px] justify-center cursor-pointer w-[136px] px-8 font-['Outfit']`}
            onClick={() => handleTabClick("Events")}
          >
            Events
          </button>
          <button
            className={`${
              activeTab === "Careers"
                ? "text-white bg-primary hover:text-white hover:bg-primary hover:shadow-xl"
                : "text-[#616161] hover:text-white hover:bg-primary bg-[#B3B3B3]/25"
            } flex items-center rounded-[6px] h-[38px] justify-center cursor-pointer w-[136px] px-8 font-['Outfit']`}
            onClick={() => handleTabClick("Careers")}
          >
            Careers
          </button>
        </div>

        {activeTab === "Events" && (
          <div>
            <Event user={user} />
          </div>
        )}
        {activeTab === "News" && (
          <div>
            <News user={user} />
          </div>
        )}
        {activeTab === "Careers" && (
          <div>
            <Career user={user} />
          </div>
        )}
      </div>
    </Dashboard>
  );
};

export default PostsPage;
