"use client";

import Link from "next/link";
import { Squeeze as Hamburger } from "hamburger-react";
import { useEffect, useRef, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaRegLifeRing,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Transition } from "@headlessui/react";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import { useRouter } from "next/router";
import { scaleRotate as Menu } from "react-burger-menu";
import Image from "next/image";
import { GoHome, GoPaperclip, GoPeople } from "react-icons/go";
import { SiReacthookform } from "react-icons/si";
import { motion } from "framer-motion";
import { RiBuildingLine } from "react-icons/ri";
import { MdOutlineLeaderboard } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { BiNews, BiSupport } from "react-icons/bi";
import { TbBellSchool } from "react-icons/tb";
import SocialMedia from "../Atoms/SocialMedia";

export default function Nav() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navElement = document.getElementById("nav");

      if (navElement && !navElement.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen === false) {
      setIsDropdownOpen(false);
    }
  };
  const isBlueIb = [
    "https://greenhillsacademy.rw/news",
    "https://greenhillsacademy.rw/contact",
    "https://greenhillsacademy.rw/about",
    "https://greenhillsacademy.rw/about/accreditation",
    "https://greenhillsacademy.rw/about/leadership_tab",
    "https://greenhillsacademy.rw/credits",
  ].includes(router.pathname);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav id="nav" className="z-50 absolute w-full">
      <section className="flex justify-center w-full">
        <div
          className={`bg-primary text-white ${
            router.pathname === "https://greenhillsacademy.rw/" ? "w-[100%]" : "w-[100%]"
          } flex justify-between items-center md:px-12 py-2`}
        >
          <div className="flex sm:hidden items-center md:space-x-8">
            <Link
              href="https://greenhillsacademy.rw/"
              className={`${
                router.pathname === "https://greenhillsacademy.rw/" ? "border-b-2 border-[yellow]" : ""
              } hover:border-[yellow] hover:border-b-2 text-white`}
            >
              Home
            </Link>
            <Link
              href="https://greenhillsacademy.rw/about"
              className={`${
                router.pathname === "https://greenhillsacademy.rw/about" ? "border-b-2 border-[yellow]" : ""
              } hover:border-[yellow] hover:border-b-2 text-white`}
            >
              About&nbsp;us
            </Link>
            <Link
              href="https://greenhillsacademy.rw/education"
              className={`${
                router.pathname === "https://greenhillsacademy.rw/education"
                  ? "border-b-2 border-[yellow]"
                  : ""
              } hover:border-[yellow] hover:border-b-2 text-white`}
            >
              Education
            </Link>
            <Link
              href="https://greenhillsacademy.rw/admission"
              className={`${
                router.pathname === "https://greenhillsacademy.rw/admission"
                  ? "border-b-2 border-[yellow]"
                  : ""
              } hover:border-[yellow] hover:border-b-2 text-white`}
            >
              Admissions
            </Link>
            <Link
              href="https://greenhillsacademy.rw/boarding"
              className={`${
                router.pathname === "https://greenhillsacademy.rw/boarding"
                  ? "border-b-2 border-[yellow]"
                  : ""
              } hover:border-[yellow] hover:border-b-2 text-white`}
            >
              Boarding
            </Link>
            <Link
              href="https://greenhillsacademy.rw/news"
              className={`${
                router.pathname === "https://greenhillsacademy.rw/news" ? "border-b-2 border-[yellow]" : ""
              } hover:border-[yellow] hover:border-b-2 text-white`}
            >
              News&nbsp;&&nbsp;Events
            </Link>
            <Link
              href="https://greenhillsacademy.rw/contact"
              className={`${
                router.pathname === "https://greenhillsacademy.rw/contact"
                  ? "border-b-2 border-[yellow]"
                  : ""
              } hover:border-[yellow] hover:border-b-2 text-white`}
            >
              Contact&nbsp;Us
            </Link>

            <motion.button
              onClick={() => {
                window.location.href =
                  "https://greenhillsacademy.openapply.com/";
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white rounded-full hover:text-[yellow] bg-primary border hover:border-[yellow] rounded-full py-2 px-4"
            >
              Apply
            </motion.button>
          </div>
          <div className="flex items-center">
            {/* <div
              className={`${
                !isMenuOpen ? "flex items-center space-x-4" : "hidden"
              } sm:hidden`}
            >
              <form
                onSubmit={handleSearch}
                className="flex items-center gap-4 h-full sm:hidden"
              >
                <div
                  onClick={handleSearch}
                  className={`text-white h-4 w-4 cursor-pointer `}
                >
                  <Image
                    placeholder="empty"
                    blurDataURL={`data:image/svg+xml,%3Csvg xmlns='https://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    src="https://res.cloudinary.com/dbqwmndns/image/upload/w_800,q_auto/v1700375952/GHA/icons/search2_oyqjms.svg"
                    alt="Image"
                    className="object-cover h-full w-full"
                  />
                </div>
                <span className="hidden md:inline">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="SEARCH...."
                    className="h-full text-black text-white text-lg font-medium font-['Outfit'] bg-transparent border-0 outline-none"
                  />
                </span>
              </form>
            </div> */}
            <div
              className="flex items-center space-x-4 cursor-pointer"
              onClick={handleMenuToggle}
            >
              <div className="">
                <Hamburger
                  toggled={isMenuOpen}
                  toggle={handleMenuToggle}
                  size={24}
                />
              </div>
              <Link href={""} className="inline font-[600]">
                MENU
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-transparent w-full flex justify-center pb-6 px-12">
        <section
          className={`text-white ${
            router.pathname === "https://greenhillsacademy.rw/" ? "w-[100%]" : "w-[100%]"
          } flex sm:flex-wrap items-center sm:justify-center md:justify-between`}
        >
          <div className="flex sm:justify-center md:justify-between items-center md:space-x-8 w-full">
            <div className="md:hidden bg-gradient-to-l from-primary to-transparent h-2 w-1/4" />
            <Link href={"/"} className="h-[130px] sm:h-[60px]">
              <Image
                priority={true}
                placeholder="empty"
                blurDataURL={`data:image/svg+xml,%3Csvg xmlns='https://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                width={0}
                height={0}
                sizes="100vw"
                src="https://res.cloudinary.com/dbqwmndns/image/upload/w_800,q_auto/v1700301542/GHA/logo_pjrxda.png"
                alt="Logo Top"
                className="object-cover sm:object-contain h-full w-full"
              />
            </Link>
            <Link
              href={"https://www.ibo.org/"}
              target="_blank"
              passHref
              className="h-[130px] sm:h-[60px]"
            >
              {isBlueIb ? (
                <Image
                  priority={true}
                  placeholder="empty"
                  blurDataURL={`data:image/svg+xml,%3Csvg xmlns='https://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="https://res.cloudinary.com/dbqwmndns/image/upload/w_800,q_auto/v1700301544/GHA/logos-06_ngn83n.png"
                  alt="Logo Top"
                  className="object-cover h-full w-full"
                />
              ) : (
                <Image
                  priority={true}
                  placeholder="empty"
                  blurDataURL={`data:image/svg+xml,%3Csvg xmlns='https://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="https://res.cloudinary.com/dbqwmndns/image/upload/w_800,q_auto/v1700301533/GHA/whiteib_qopowi.png"
                  alt="Logo Top"
                  className="object-cover h-full w-full"
                />
              )}
            </Link>
            <div className="md:hidden bg-gradient-to-r from-primary to-transparent h-2 w-1/4" />
          </div>
        </section>
      </section>
      <section className="flex md:justify-end text-lg absolute top-0">
        <Menu
          right
          isOpen={isMenuOpen}
          onStateChange={(state) => setIsMenuOpen(state.isOpen)}
          menuClassName="menu-scale-rotate z-50"
          width={isSmallScreen ? "" : "25vw"}
        >
          <div className="bg-white shadow shadow-xl px-2 md:overflow-hidden">
            <div className="flex justify-center py-2">
              <Link href={"/"} passHref className="bg-white rounded-full p-0">
                <Image
                  priority={true}
                  placeholder="empty"
                  blurDataURL={`data:image/svg+xml,%3Csvg xmlns='https://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="https://res.cloudinary.com/dbqwmndns/image/upload/w_800,q_auto/v1700301542/GHA/logo_pjrxda.png"
                  alt="Logo Top"
                  className="h-[100px] sm:object-contain object-cover w-full"
                />
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              {/* <form
                onSubmit={handleSearch}
                className="w-full py-2 bg-primary w-full text-white px-6 flex justify-between items-center"
              >
                <div className="w-[80%]">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="SEARCH...."
                    className="w-[100%] h-full text-white text-lg font-medium font-['Outfit'] bg-transparent border-0 outline-none"
                  />
                </div>
                <div
                  onClick={handleSearch}
                  className={`text-white h-6 w-6 grid place-items-center cursor-pointer `}
                >
                  <Image
                    placeholder="empty"
                    blurDataURL={`data:image/svg+xml,%3Csvg xmlns='https://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    src="https://res.cloudinary.com/dbqwmndns/image/upload/w_800,q_auto/v1700375952/GHA/icons/search2_oyqjms.svg"
                    alt="Image"
                    className="object-cover h-full w-full"
                  />
                </div>
              </form> */}

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  window.location.href = "/";
                }}
                className={`group flex gap-2 items-center w-full p-4 text-start ${
                  router.pathname === "https://greenhillsacademy.rw/"
                    ? "bg-primary text-[yellow]"
                    : "bg-[#EAFBF3]"
                } hover:bg-primary hover:text-[yellow] text-lg font-['Outfit'] uppercase`}
              >
                <GoHome
                  className={` ${
                    router.pathname === "https://greenhillsacademy.rw/"
                      ? "text-[yellow]"
                      : "text-primary hover:text-[yellow]"
                  }`}
                />{" "}
                HOME
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`group w-full text-start p-4 text-lg hover:bg-primary hover:text-[yellow] font-medium font-['Outfit'] ${
                  isDropdownOpen ? "bg-primary text-[yellow]" : " bg-[#EAFBF3]"
                }`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className=" flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                    <GoPeople
                      className={`group-hover:text-[yellow] ${
                        router.pathname !== "/about" ? "text-primary" : ""
                      }`}
                    />{" "}
                    ABOUT
                  </div>
                  {isDropdownOpen ? (
                    <BsChevronDown className="text-[yellow]" />
                  ) : (
                    <BsChevronRight />
                  )}
                </div>
              </motion.button>
              <Transition
                show={isDropdownOpen}
                enter="transition-opacity duration-300 ease-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300 ease-out"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                {(ref) => (
                  <div
                    ref={ref}
                    className="z-10 absolute right-0 mt-2 py-2 w-[80%] bg-white divide-y divide-gray-100 rounded-lg shadow"
                  >
                    <ul className="py-2 text-sm text-gray-700">
                      <li className="py-2">
                        <Link
                          href="https://greenhillsacademy.rw/about"
                          className="block px-4 py-3 hover:bg-primary hover:text-white"
                        >
                          General
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="https://greenhillsacademy.rw/about/#head"
                          className="block px-4 py-3 hover:bg-primary hover:text-white"
                        >
                          Head of School’s Welcome
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="https://greenhillsacademy.rw/about/#alumni"
                          className="block px-4 py-3 hover:bg-primary hover:text-white"
                        >
                          GHA Alumni
                        </Link>
                      </li>
                      <li className="py-2">
                        <Link
                          href="https://greenhillsacademy.rw/about/#alumni_registration_form                          "
                          className="block px-4 py-3 hover:bg-primary hover:text-white"
                        >
                          Alumni Registration Form
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </Transition>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  window.location.href = "/admission";
                }}
                className={`group flex gap-2 items-center w-full p-4 text-start ${
                  router.pathname === "https://greenhillsacademy.rw/admission"
                    ? "bg-primary text-[yellow]"
                    : "bg-[#EAFBF3]"
                } hover:bg-primary hover:text-[yellow] text-lg font-medium font-['Outfit'] uppercase`}
              >
                <SiReacthookform
                  className={`group-hover:text-[yellow] ${
                    router.pathname !== "/admission" ? "text-primary" : ""
                  }`}
                />
                School ADMISSION
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  window.location.href = "/about/learners_tab";
                }}
                className={`group flex gap-2 items-center w-full p-4 text-start ${
                  router.pathname === "https://greenhillsacademy.rw/about/learners_tab"
                    ? "bg-primary text-[yellow]"
                    : "bg-[#EAFBF3]"
                } hover:bg-primary hover:text-[yellow] text-lg font-medium font-['Outfit'] uppercase`}
              >
                <FaRegLifeRing
                  className={`group-hover:text-[yellow] ${
                    router.pathname !== "/admission" ? "text-primary" : ""
                  }`}
                />{" "}
                Learners life
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  window.location.href = "/about/leadership_tab";
                }}
                className={`group flex gap-2 items-center w-full p-4 text-start ${
                  router.pathname === "https://greenhillsacademy.rw/about/leadership_tab"
                    ? "bg-primary text-[yellow]"
                    : "bg-[#EAFBF3]"
                } hover:bg-primary hover:text-[yellow] text-lg font-medium font-['Outfit'] uppercase`}
              >
                <MdOutlineLeaderboard
                  className={`group-hover:text-[yellow] ${
                    router.pathname !== "/admission" ? "text-primary" : ""
                  }`}
                />
                school leadership
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  window.location.href = "/about/facilities_tab";
                }}
                className={`group flex gap-2 items-center w-full p-4 text-start ${
                  router.pathname === "https://greenhillsacademy.rw/about/facilities_tab"
                    ? "bg-primary text-[yellow]"
                    : "bg-[#EAFBF3]"
                } hover:bg-primary hover:text-[yellow] text-lg font-medium font-['Outfit'] uppercase`}
              >
                <RiBuildingLine
                  className={`group-hover:text-[yellow] ${
                    router.pathname !== "/admission" ? "text-primary" : ""
                  }`}
                />
                School Facilities
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  window.location.href = "/about/accreditation";
                }}
                className={`group flex gap-2 items-center w-full p-4 text-start ${
                  router.pathname === "https://greenhillsacademy.rw/about/accreditation"
                    ? "bg-primary text-[yellow]"
                    : "bg-[#EAFBF3]"
                } hover:bg-primary hover:text-[yellow] text-lg font-medium font-['Outfit'] uppercase`}
              >
                <SiReacthookform
                  className={`group-hover:text-[yellow] ${
                    router.pathname !== "/admission" ? "text-primary" : ""
                  }`}
                />
                School Accreditation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  window.location.href = "/boarding";
                }}
                className={`group flex gap-2 items-center w-full p-4 text-start ${
                  router.pathname === "https://greenhillsacademy.rw/boarding"
                    ? "bg-primary text-[yellow]"
                    : "bg-[#EAFBF3]"
                } hover:bg-primary hover:text-[yellow] text-lg font-medium font-['Outfit'] uppercase`}
              >
                <TbBellSchool
                  className={`group-hover:text-[yellow] ${
                    router.pathname !== "/admission" ? "text-primary" : ""
                  }`}
                />
                BOARDING School
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  window.location.href = "/news";
                }}
                className={`group flex gap-2 items-center w-full p-4 text-start ${
                  router.pathname === "https://greenhillsacademy.rw/news"
                    ? "bg-primary text-[yellow]"
                    : "bg-[#EAFBF3]"
                } hover:bg-primary hover:text-[yellow] text-lg font-medium font-['Outfit'] uppercase`}
              >
                <BiNews
                  className={`group-hover:text-[yellow] ${
                    router.pathname !== "/admission" ? "text-primary" : ""
                  }`}
                />
                NEWS AND EVENTS
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  window.location.href = "/contact";
                }}
                className={`group flex gap-2 items-center w-full p-4 text-start ${
                  router.pathname === "https://greenhillsacademy.rw/contact"
                    ? "bg-primary text-[yellow]"
                    : "bg-[#EAFBF3]"
                } hover:bg-primary hover:text-[yellow] text-lg font-medium font-['Outfit'] uppercase`}
              >
                <BiSupport
                  className={`group-hover:text-[yellow] ${
                    router.pathname !== "/admission" ? "text-primary" : ""
                  }`}
                />
                CONTACT US
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  window.location.href = "/gallery";
                }}
                className={`group flex gap-2 items-center w-full p-4 text-start ${
                  router.pathname === "https://greenhillsacademy.rw/about/gallery_tab"
                    ? "bg-primary text-[yellow]"
                    : "bg-[#EAFBF3]"
                } hover:bg-primary hover:text-[yellow] text-lg font-medium font-['Outfit'] uppercase`}
              >
                <GrGallery
                  className={`group-hover:text-[yellow] ${
                    router.pathname !== "/admission" ? "text-primary" : ""
                  }`}
                />
                SCHOOL GALLERY
              </motion.button>
              <div className="bg-[#EAFBF3] w-full p-4">
                <div className="md:w-1/2">
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>
        </Menu>
      </section>
    </nav>
  );
}
