/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import { CombinedData } from "./types";
import { useInView } from "react-intersection-observer";

SwiperCore.use([Autoplay]);

interface Props {
  data: CombinedData[];
}

const NewsAndEventsSlider: React.FC<Props> = ({ data }) => {
  const eventsData = data.filter((item) => item.type === "event");
  const newsData = data.filter((item) => item.type === "news");

  const sortedEventsData = eventsData
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  const sortedNewsData = newsData
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  const sortedData = [...sortedEventsData, ...sortedNewsData];
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });
  return (
    <div
      className="flex justify-center bg-primary h-full w-full p-4"
      ref={ref}
      style={{
        backgroundImage: `url(${inView ? "/icons/green_c6iapo.svg" : ""})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="md:w-[80%] sm:w-[80%]">
        <div className="flex justify-center">
          <div className="w-[55px] grid place-items-center">
            <div className="w-[18px] h-[7px] my-2 bg-[yellow]" />
            <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
          </div>
        </div>
        <div className="sm:pt-4 md:py-8">
          <h1 className="text-white text-center">News & Events</h1>
        </div>
        <Swiper
          pagination={{
            clickable: true,
            el: ".newsSwiper-pagination",
          }}
          modules={[Pagination, Autoplay]}
          className="NewsSwiper"
          loop={true}
          autoplay={{ delay: 15000 }}
          onSlideChange={(swiper) => {
            const bullets = document.querySelectorAll(".swiper-pagination-bullet");
            bullets.forEach((bullet: Element, index: number) => {
              if (index === swiper.realIndex) {
                // Set styles only for the active bullet
                if (bullet instanceof HTMLElement) {
                  bullet.style.width = "50px";
                  bullet.style.backgroundColor = "white";
                }
              } else {
                // Reset styles for other bullets
                if (bullet instanceof HTMLElement) {
                  bullet.style.width = "30px";
                  bullet.style.height = "6px";
                  bullet.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
                  bullet.style.margin = "0 5px";
                  bullet.style.borderRadius = "2px";
                }
              }
            });
          }}
          
        >
          {sortedData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex sm:flex-wrap p-8 mb-8 items-center md:gap-12 sm:gap-4">
                <div className="md:hidden sm:w-full h-[220px]">
                  <img
                    src={item.imageUrl}
                    alt={`News & Event ${index + 1}`}
                    className="w-[100%] h-[100%] rounded-2xl"
                  />
                </div>
                <div className="w-1/2 sm:w-full grid md:gap-4 sm:gap-2 text-white">
                  <div className="flex gap-2 items-center">
                    <div className="w-3 h-3 bg-[yellow] rounded-full" />
                    <h4 className="capitalize text-[yellow] underline">
                      {item.type}
                    </h4>
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <span className="text-sm pb-2">{item.date}</span>
                  <p className="text-white md:py-4 text-justify">
                    {truncateDescription(item.description, 50)}
                  </p>
                  <button
                    onClick={() => {
                      window.location.href =
                        item.type === "event"
                          ? `/news/event_page/${item.slug}`
                          : `/news/news/${item.slug}`;
                    }}
                    className="bg-white border-[yellow] border mt-4 h-[47px] md:w-[180px] text-primary rounded-lg hover:bg-primary hover:text-white transition duration-300 ease-in-out"
                  >
                    Read More →
                  </button>
                </div>

                <div className="md:w-1/2 sm:hidden h-[600px]">
                  <div className="bg-cover bg-center w-full h-full">
                    <img
                      src={item.imageUrl}
                      alt={`News & Event ${index + 1}`}
                      className="object-cover w-full h-full rounded-[16px]"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mt-4">
          <div
            className="newsSwiper-pagination"
            style={{ textAlign: "center" }}
          >
            <style>
              {`
                .newsSwiper-pagination .swiper-pagination-bullet {
                  width: 20px !important;
                  height: 6px !important;
                  background-color: rgba(255, 255, 255, 0.5) !important;
                  margin: 0 5px !important;
                  border-radius: 2px !important;
                }

                .newsSwiper-pagination .swiper-pagination-bullet-active {
                  background-color: white !important;
                  width: 30px !important;
                }
              `}
            </style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndEventsSlider;

function truncateDescription(description: string, wordCount: number): string {
  const words = description.split(" ");
  if (words.length > wordCount) {
    return words.slice(0, wordCount).join(" ") + "...";
  }
  return description;
}
