/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Link from 'next/link';

interface NewsAndEvent {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
  date: string;
}

interface NewsAndEventSliderProps {
  newsAndEvents: NewsAndEvent[];
}

const NewsAndEventSlider: React.FC<NewsAndEventSliderProps> = ({ newsAndEvents }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex justify-center w-full bg-primary p-4">
    <div className="w-[80%]">
      <div className="flex items-center justify-center mb-4">
        <img                       loading="lazy"src="/icons/newsLine.svg" alt="" />
      </div>
      <div className="">
        <h1 className="text-white text-center mb-8">News & Events</h1>
      </div>
      <div className="relative" style={{ minHeight: '400px' }}>
        <Swiper
          pagination={{ clickable: true, el: '.newsSwiper-pagination' }}
          modules={[Pagination]}
          className="NewsSwiper"
          initialSlide={currentIndex}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          loop={true}
        >
          {newsAndEvents.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center space-x-8 md:space-x-4">
                <div className="md:w-2/4 text-white p-4">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <span className="text-sm pb-2">{item.date}</span>
                  <p className="text-white text-lg py-4">{item.description}</p>
                  <button
                      onClick={() => {
                        // Handle the click event and navigate to the specified link
                        window.location.href = item.link;
                      }}
                    className="bg-white mt-4 h-[47px] w-[178px] text-primary rounded-lg hover:bg-primary hover:text-white transition duration-300 ease-in-out"
                  >
                    Read More →
                  </button>
                </div>
                <div className="md:w-[80%] lg:w-1/4">
                  <img
                    src={item.imageSrc}
                    alt={`News & Event ${index + 1}`}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mt-4">
          <div className="newsSwiper-pagination" style={{ textAlign: 'center' }}>
            <style>
              {`
                .swiper-pagination-bullet {
                  width: 20px;
                  /* Adjust the width of the line */
                  height: 2px;
                  /* Adjust the height of the line */
                  background-color: rgba(255, 255, 255, 0.5); // Change line color
                  margin: 0 5px;
                  /* Adjust spacing between lines */
                }

                .swiper-pagination-bullet-active {
                  background-color: white; // Change color of the active line
                }
              `}
            </style>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NewsAndEventSlider;
