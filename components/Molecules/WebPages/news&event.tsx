import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { BiSolidOffer } from "react-icons/bi";
import { ImNewspaper } from "react-icons/im";
import EventNewsTab from '../EventNewsTab';
import CareerTab from '../CareerTab';

const NewsAndEventPage = ({ user }: any) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("Events");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    router.push(`/news?tab=${tab}`, undefined, { shallow: true });
  };

  useEffect(() => {
    const { tab } = router.query;
    if (typeof tab === "string") {
      setActiveTab(tab);
    }
  }, [router.query]);
  return (
    <section
      className="flex pt-28 justify-center w-full h-full"
      style={{
        backgroundImage: `url(${"/icons/bgwhite2_lpw73r.svg"})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="md:w-[80%] sm:pt-8 sm:w-[80%] my-12">
        <div className="flex justify-center">
          <div className="text-center">
            <p className="text-lg text-gray-400 font-normal font-['Outfit']">
              Latest
            </p>
            <h1 className="text-primary sm:text-2xl"> News and Events </h1>
          </div>
        </div>
        <div className="flex sm:flex-wrap justify-center gap-12 md:my-8 sm:mt-8 gap-8 bg-white w-full md:pb-6">
          <button
            className={`${
              activeTab === "Events"
                ? "text-white bg-primary hover:text-white hover:bg-primary hover:border hover:border-[yellow]"
                : "text-primary bg-green border border-primary hover:text-black hover:bg-green hover:shadow-xl"
            } border rounded-lg gap-2 sm:text-xs p-2 md:px-4 md:py-2 flex items-center justify-center`}
            onClick={() => handleTabClick("Events")}
          >
            <ImNewspaper
              className={`${
                activeTab === "Events"
                  ? "text-[yellow]"
                  : "text-primary hover:text-[yellow]"
              }`}
            />
            News & Events
          </button>
          <button
            className={`${
              activeTab === "Careers"
                ? "text-white bg-primary hover:text-white hover:bg-primary hover:border hover:border-[yellow]"
                : "text-primary bg-green border border-primary hover:text-black hover:bg-green hover:shadow-xl"
            } border rounded-lg gap-2 sm:text-xs p-2 md:px-4 md:py-2 flex items-center justify-center`}
            onClick={() => handleTabClick("Careers")}
          >
            <BiSolidOffer
              className={`${
                activeTab === "Careers"
                  ? "text-[yellow]"
                  : "text-primary hover:text-[yellow]"
              }`}
            />
            Careers
          </button>
        </div>

        {activeTab === "Events" && (
          <div id="events">
            <EventNewsTab />
          </div>
        )}
        {activeTab === "Careers" && (
          <div id="career">
            <CareerTab />
          </div>
        )}
      </div>
    </section>
  )
}

export default NewsAndEventPage
