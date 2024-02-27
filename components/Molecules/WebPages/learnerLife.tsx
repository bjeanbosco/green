/* eslint-disable @next/next/no-img-element */
import DecoratedList from '@/components/atoms/decoratedList';
import { useState, useEffect } from 'react';
import { GiCancel } from 'react-icons/gi';
import axiosInstance from '@/src/lib/axios';

const LearnerLifePage = () => {
  const [activeTab, setActiveTab] = useState('about');
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
        <section
          className="w-full h-[600px] gap-1 flex flex-col  items-center justify-end "
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(/images/learnerlife.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
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
            backgroundImage: `url(https://res.cloudinary.com/dbqwmndns/image/upload/v1700375590/GHA/icons/bgwhiteyellow_mekqvs.svg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        >
          <div className="flex justify-center">
            <ul className="flex w-[80%] mt-12 md:justify-between justify-between items-center md:p-4 sm:py-4 border-b-2 rounded-xl bg-green">
              {/* ... (other tabs links) */}
            </ul>
          </div>
          <div className="w-full flex justify-center">
            {activeTab === 'about' && (
              <div className="w-[80%] my-28 gap-12">
                <div className="flex items-center">
                  {/* ... (other content) */}
                  <div className="grid grid-cols-1 gap-6 mt-4 justify-items-end">
                    {detailsArray.map((detail, index) => (
                      <div key={index} className="flex items-center gap-2">
                        {isCustomizing ? (
                          <input
                            type="text"
                            value={detail.description}
                            onChange={(e) => handleDetailsChange(index, e.target.value)}
                            className="border border-primary p-2 rounded"
                          />
                        ) : (
                          <DecoratedList color="black" details={detail.description} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                {/* ... (other content) */}
              </div>
            )}
            {/* ... (other tabs content) */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default LearnerLifePage;
