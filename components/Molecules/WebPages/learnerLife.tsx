/* eslint-disable @next/next/no-img-element */
import DecoratedList from '@/components/Atoms/decoratedList';
import { useState, useEffect } from 'react';
import { GiCancel } from 'react-icons/gi';
import axiosInstance from '@/lib/axios';
import Link from 'next/link';
import ExtracurricularActivity from '../ExtracurricularActivity';
import Counselling from '../Counselling';
import Creative_offers from '../CreativeOffers';
import LearnersClubs from '../Learners_clubs';
import df from "./leadership"
const LearnerLifePage = () => {
  const [activeTab, setActiveTab] = useState('');
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [detailsArray, setDetailsArray] = useState([
    {
      "bannerImageUrl": "/images/1.png",
      "description": "Diverse Choices: Choose from over 35 clubs and extracurricular activities, ensuring that education extends beyond the classroom."
    }
  ]);

  const localStorageKey = 'learner_life_details';

  const loadFromLocalStorage = () => {
    axiosInstance.get('/pages/learners-life').then((res) => {
      setDetailsArray([res.data]);
    });
  };

  const saveToLocalStorage = () => {
    axiosInstance.put('/pages/learners-life', detailsArray[0]).then((res) => {
      console.log(res.data);
    });
    setIsCustomizing(false);
  };

  useEffect(() => {
    loadFromLocalStorage();
  }, []);

  const handleTabClick = (tab:any) => {
    setActiveTab(tab);
  };

  const toggleCustomization = () => {
    setIsCustomizing(!isCustomizing);
  };

  const handleDetailsChange = (index: number, value: string) => {
    const updatedDetailsArray = [...detailsArray];
    updatedDetailsArray[index].description = value;
    setDetailsArray(updatedDetailsArray);
  };

  return (
    <div>
      <main className="w-full">
        <div className="flex my-6 justify-between text-white">
          <div className="flex gap-2">
            <button
              onClick={toggleCustomization}
              className={`w-[124px] h-[43px] text-center rounded-[6px] ${
                isCustomizing
                  ? 'bg-[#B3B3B3] hover:bg-[#B3B3B3] cursor-not-allowed'
                  : 'bg-[#5B83D7] hover:bg-[#4A6FBB] text-white'
              }`}
              disabled={isCustomizing}
            >
              Customize
            </button>
            {isCustomizing ? (
              <GiCancel
                onClick={toggleCustomization}
                className="text-[red] cursor-pointer"
              />
            ) : null}
          </div>

          <div className="flex gap-4">
            <button
              onClick={isCustomizing ? saveToLocalStorage : () => {}}
              className={`w-[124px] h-[43px] ${
                isCustomizing
                  ? 'bg-[#5B83D7] hover:bg-[#4A6FBB]'
                  : 'cursor-not-allowed bg-[#B3B3B3] text-white'
              } text-center rounded-[6px]`}
            >
              Save Copy
            </button>

            <button className="w-[124px] h-[43px] bg-primary text-center rounded-[6px]">
              {' '}
              Publish
            </button>
          </div>
        </div>
        <main className="w-full">
      <section
        className="w-full h-[70vh] gap-1 flex flex-col  items-center justify-end "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(https://greenhillsacademy.rw:8081/images/GHA_121_fq5dcg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center">
          <div className="w-[55px] grid place-items-center">
            <div className="w-[18px] h-[7px] my-2 bg-[yellow]" />
            <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
          </div>
        </div>
        <h1 className="text-primary capitalize">Learners Life</h1>
      </section>
      <section
        style={{
          backgroundImage: `url(${"/icons/bgwhite2_lpw73r.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="flex gap-4 justify-center">
          <ul className="flex w-[80%] mt-12 md:justify-between sm:overflow-x-auto justify-between items-center md:p-4 sm:pb-6 border-b-2 rounded-xl bg-green">
            <li className="mr-4">
              <Link
                className={`text-black md:p-4 sm:pb-6 hover:text-primary font-[Outfit] relative ${
                  activeTab === "extracurricular" ? "font-bold" : ""
                }`}
                href="#"
                onClick={() => handleTabClick("extracurricular")}
              >
                Extracurricular&nbsp;Activities
                {activeTab === "extracurricular" && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary font-[Outfit]"></span>
                )}
              </Link>
            </li>
            <li className="mr-4">
              <Link
                className={`text-black md:p-4 sm:pb-6 hover:text-primary font-[Outfit] relative ${
                  activeTab === "counselor" ? "font-bold" : ""
                }`}
                href="#"
                onClick={() => handleTabClick("counselor")}
              >
                Counselling&nbsp;Department
                {activeTab === "counselor" && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary font-[Outfit]"></span>
                )}
              </Link>
            </li>
            <li className="mr-4">
              <Link
                className={`text-black md:p-4 sm:pb-6  hover:text-primary font-[Outfit] relative ${
                  activeTab === "creative" ? "font-bold" : ""
                }`}
                href="#"
                onClick={() => handleTabClick("creative")}
              >
                Creative&nbsp;Offers
                {activeTab === "creative" && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary font-[Outfit]"></span>
                )}
              </Link>
            </li>
            <li className="mr-4">
              <Link
                className={`text-black md:p-4 sm:pb-6 hover:text-primary font-[Outfit] relative ${
                  activeTab === "clubs" ? "font-bold" : ""
                }`}
                href="#"
                onClick={() => handleTabClick("clubs")}
              >
                Learners&nbsp;Clubs
                {activeTab === "clubs" && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary font-[Outfit]"></span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
      </main>
    </div>
  );
};

export default LearnerLifePage;
