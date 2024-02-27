import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { HiOutlineChevronRight } from "react-icons/hi";
import Dashboard from "@/components/dashboard";
import Link from "next/link";
import ChartPage from "@/components/Molecules/charts/ChartPage";
import { useRouter } from "next/router";
import { decodeToken } from "@/lib/jwt";
import User from "@/types/user";

const DashboardMain: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const [user, setUser] = useState<User>();
  const router = useRouter();

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 2000,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const next = () => {
    sliderRef.current?.slickNext();
  };

  useEffect(() => {
    const token = localStorage.getItem("user_session");
    if (token) {
      const decodedUser = decodeToken(token);
      setUser(decodedUser);
    }
  }, []);

  return (
    <Dashboard>
      <div className="w-full">
        <div>
          <h3 className="font-bold">Dashboard</h3>
          <p className="">Welcome Back, {user?.username || "Guest"} !</p>
        </div>
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            <motion.div
              className="h-full w-full cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={1}
            >
              <Link
                href={"/webpages"}
                className="m-4 h-[250px] p-6 flex flex-col justify-between bg-white shadow border rounded-xl"
              >
                <h2 className="grid place-items-center w-[50px] h-[50px] font-bold font-['Outfit'] bg-primary/25 text-primary text-center rounded-[5px]">
                  W
                </h2>
                <h3 className="font-bold text-center">Web Pages</h3>
                <div className="flex justify-between">
                  <p className="text-xl">4 sections</p>
                  <div
                    onClick={() => router.push("")}
                    className="text-primary font-bold"
                  >
                    View More
                  </div>
                </div>
              </Link>
            </motion.div>
            <motion.div
              className="h-full w-full cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={2}
            >
              <Link
                href={"/posts"}
                className="m-4 h-[250px] p-6 flex flex-col justify-between bg-white shadow border rounded-xl"
              >
                <h2 className="grid place-items-center w-[50px] h-[50px] font-bold bg-[#FFA500]/25 text-[#FFA500] text-center rounded-[5px]">
                  P
                </h2>
                <h3 className="font-bold text-center">Posts</h3>
                <div className="flex justify-between">
                  <p className="text-xl">4 sections</p>
                  <div
                    onClick={() => router.push("")}
                    className="text-[#FFA500] font-bold"
                  >
                    View More
                  </div>
                </div>
              </Link>
            </motion.div>
            <motion.div
              className="h-full w-full cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={3}
            >
              <Link
                href={"/numbers"}
                className="m-4 h-[250px] p-6 flex flex-col justify-between bg-white shadow border rounded-xl"
              >
                <h2 className="grid place-items-center w-[50px] h-[50px] font-bold bg-[#0000A7]/25 text-[#0000A7] text-center rounded-[5px]">
                  N
                </h2>
                <h3 className="font-bold text-center">Numbers</h3>
                <div className="flex justify-between">
                  <p className="text-xl">4 sections</p>
                  <div
                    onClick={() => router.push("")}
                    className="text-[#0000A7] font-bold"
                  >
                    View More
                  </div>
                </div>
              </Link>
            </motion.div>
            <motion.div
              className="h-full w-full cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={4}
            >
              <Link
                href={"/staff"}
                className="m-4 h-[250px] p-6 flex flex-col justify-between bg-white shadow border rounded-xl"
              >
                <h2 className="grid place-items-center w-[50px] h-[50px] font-bold bg-[#FD620C]/25 text-[#FD620C] text-center rounded-[5px]">
                  S
                </h2>
                <h3 className="font-bold text-center">Staff</h3>
                <div className="flex justify-between">
                  <p className="text-xl">4 sections</p>
                  <div
                    onClick={() => router.push("")}
                    className="text-[#FD620C] font-bold"
                  >
                    View More
                  </div>
                </div>
              </Link>
            </motion.div>
            <motion.div
              className="h-full w-full cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              key={6}
            >
              <Link
                href={"/gallery"}
                className="m-4 h-[250px] p-6 flex flex-col justify-between bg-white shadow border rounded-xl"
              >
                <h2 className="grid place-items-center w-[50px] h-[50px] font-bold bg-[#B244F5]/25 text-[#B244F5] text-center rounded-[5px]">
                  G
                </h2>
                <h3 className="font-bold text-center">Gallery</h3>
                <div className="flex justify-between">
                  <p className="text-xl">4 sections</p>
                  <div
                    onClick={() => router.push("")}
                    className="text-[#B244F5] font-bold"
                  >
                    View More
                  </div>
                </div>
              </Link>
            </motion.div>
          </Slider>
          <div className="absolute z-50 flex justify-end items-center w-full top-1/2 transform -translate-y-1/2">
            {/* <div
              className="bg-white shadow-xl rounded-full h-12 w-12 border flex items-center justify-center text-2xl cursor-pointer"
              onClick={previous}
            >
              <HiOutlineChevronLeft />
            </div> */}
            <div
              className="bg-white shadow-inner shadow-xl rounded-full h-[55px] w-[55px] border flex items-center justify-center text-3xl cursor-pointer"
              onClick={next}
            >
              <HiOutlineChevronRight />
            </div>
          </div>
        </div>
        <div className="flex justify-between md:gap-20 sm:gap-4 w-full sm:flex-wrap">
          <div className="md:w-1/2 sm:w-full md:h-[417px] bg-white rounded-[11px] shadow p-8">
            <ChartPage />
          </div>
          <div className="md:w-1/3 sm:w-full">
            <h3 className="font-medium mb-2">Recent Posts</h3>
            <div className="bg-white pb-12 border rounded-xl shadow-xl w-full">
              <div className="grid p-8 w-full gap-8">
                <div className="w-full gap-2 flex pb-2">
                  <div
                    className="w-1/3 rounded-xl"
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/dbqwmndns/image/upload/v1700301692/GHA/2_hrxmza.jpg)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="w-2/3">
                    <p className="text-sm">Alumni day</p>
                    <p className="font-bold text-lg">
                      Hive gala algorand stellar
                    </p>
                    <p className="mt-2 text-base font-normal text-justify">
                      Terra enjin revain eCash siacoin arweave. Quant siacoin
                      vechain...
                    </p>
                  </div>
                </div>
                <div className="w-full gap-2 flex pb-2">
                  <div
                    className="w-1/3 rounded-xl"
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/dbqwmndns/image/upload/v1700301692/GHA/2_hrxmza.jpg)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="w-2/3">
                    <p className="text-sm">Alumni day</p>
                    <p className="font-bold text-lg">
                      Hive gala algorand stellar
                    </p>
                    <p className="mt-2 text-base font-normal text-justify">
                      Terra enjin revain eCash siacoin arweave. Quant siacoin
                      vechain...
                    </p>
                  </div>
                </div>
                <div className="w-full gap-2 flex pb-2">
                  <div
                    className="w-1/3 rounded-xl"
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/dbqwmndns/image/upload/v1700301692/GHA/2_hrxmza.jpg)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="w-2/3">
                    <p className="text-sm">Alumni day</p>
                    <p className="font-bold text-lg">
                      Hive gala algorand stellar
                    </p>
                    <p className="mt-2 text-base font-normal text-justify">
                      Terra enjin revain eCash siacoin arweave. Quant siacoin
                      vechain...
                    </p>
                  </div>
                </div>
                <div className="w-full gap-2 flex pb-2">
                  <div
                    className="w-1/3 rounded-xl"
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/dbqwmndns/image/upload/v1700301692/GHA/2_hrxmza.jpg)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="w-2/3">
                    <p className="text-sm">Alumni day</p>
                    <p className="font-bold text-lg">
                      Hive gala algorand stellar
                    </p>
                    <p className="mt-2 text-base font-normal text-justify">
                      Terra enjin revain eCash siacoin arweave. Quant siacoin
                      vechain...
                    </p>
                  </div>
                </div>
                <div className="w-full gap-2 flex pb-2">
                  <div
                    className="w-1/3 rounded-xl"
                    style={{
                      backgroundImage: `url(https://res.cloudinary.com/dbqwmndns/image/upload/v1700301692/GHA/2_hrxmza.jpg)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="w-2/3">
                    <p className="text-sm">Alumni day</p>
                    <p className="font-bold text-lg">
                      Hive gala algorand stellar
                    </p>
                    <p className="mt-2 text-base font-normal text-justify">
                      Terra enjin revain eCash siacoin arweave. Quant siacoin
                      vechain...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default DashboardMain;
