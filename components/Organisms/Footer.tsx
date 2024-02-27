"use client";

import React from "react";
import Link from "next/link";
import SocialMedia from "../Atoms/SocialMedia";

const Footer = () => {
  const sponsorshipImages = [
    "https://res.cloudinary.com/dbqwmndns/image/upload/w_800,q_auto/v1700301720/GHA/logos-ib_uwt0nh.png",
    "https://res.cloudinary.com/dbqwmndns/image/upload/w_800,q_auto/v1700307214/GHA/keylink/aisa_fqh6jz.png",
    "https://res.cloudinary.com/dbqwmndns/image/upload/w_800,q_auto/v1700307212/GHA/keylink/cognia_dn6q30.png",
    "https://res.cloudinary.com/dbqwmndns/image/upload/w_800,q_auto/v1700307212/GHA/keylink/fl1_fwcgfx.png",
    "https://res.cloudinary.com/dbqwmndns/image/upload/w_800,q_auto/v1700307213/GHA/keylink/logo_01_m7usvz.png",
    "https://res.cloudinary.com/dbqwmndns/image/upload/w_800,q_auto/v1700307214/GHA/keylink/roundlogo_m07oza.png",
    "https://res.cloudinary.com/dbqwmndns/image/upload/w_800,q_auto/v1700307212/GHA/keylink/schlogo1_tz9ogi.png",
  ];
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full"
      style={{
        backgroundImage: `url(${"https://res.cloudinary.com/dbqwmndns/image/upload/w_800,q_auto/v1700375606/GHA/icons/bgwhite2_lpw73r.svg"})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full flex pt-12 justify-center">
        <div className="w-[80%]">
          <div className="px-8 bg-white grid place-items-end shadow shadow-primary md:rounded-[36px] sm:rounded-[20px]">
            <div className="md:flex md:justify-between md:py-16 py-4 grid md:gap-16 w-full">
              <div className="my-6 md:mb-0 flex justify-center">
                <Link href={"/"} className="flex items-center">
                  <img
                    src="https://res.cloudinary.com/dbqwmndns/image/upload/w_800,q_auto/v1700301542/GHA/logo_pjrxda.png"
                    className="h-[150px] sm:h-[80px] object-contain"
                    alt="Home Logo"
                  />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 md:grid-cols-3 md:w-[80%]">
                <div>
                  <div className="flex flex-col sm:gap-4 h-full justify-between">
                    <Link href="https://greenhillsacademy.rw/" className="hover:text-primary">
                      Home
                    </Link>
                    <Link href="https://greenhillsacademy.rw/about" className="hover:text-primary">
                      About Us
                    </Link>
                    <Link href="https://greenhillsacademy.rw/education" className="hover:text-primary">
                      Education
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col sm:gap-4 h-full justify-between">
                    <Link href="https://greenhillsacademy.rw/news" className="hover:text-primary">
                      News & Events
                    </Link>
                    <Link href="https://greenhillsacademy.rw/admission" className="hover:text-primary">
                      Admissions
                    </Link>
                    <Link href="https://greenhillsacademy.rw/boarding" className="hover:text-primary">
                      Boarding
                    </Link>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-col sm:gap-4 h-full justify-between">
                    <Link
                      href="https://www.google.com/maps/place/Kigali+KG+278+St,+Nyarutarama+Kigali"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      KG&nbsp;278&nbsp;St,&nbsp;Nyarutarama, Kigali
                    </Link>
                    <Link
                      href={"tel:+250735832348"}
                      className="hover:text-primary"
                    >
                      +250&nbsp;735&nbsp;832&nbsp;348
                    </Link>
                    <Link
                      href={"mailto:info@greenhillsacademy.rw"}
                      className="hover:text-primary"
                    >
                      info@greenhillsacademy.rw
                    </Link>
                  </div>
                </div>
              </div>
              <div className="my-6 md:mb-0 flex justify-center">
                <Link
                  href={"https://www.ibo.org/"}
                  target="_blank"
                  className="flex items-center"
                >
                  <img
                    src="https://res.cloudinary.com/dbqwmndns/image/upload/w_800,q_auto/v1700301544/GHA/logos-06_ngn83n.png"
                    className="h-[150px] sm:h-[80px] object-contain"
                    alt="IB Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="w-full justify-center flex">
              <div className="w-[80%]">
                <hr />
                <div className="flex md:pt-2 sm:py-2 w-full justify-center">
                  <div className="w-full">
                    <div className="flex justify-center w-full">
                      <Link
                        href={""}
                        className="text-black text-center my-2 pt-4 font-normal"
                      >
                        &copy;Greenhillsacademy {currentYear}
                      </Link>
                    </div>

                    <SocialMedia />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] flex md:pb-16 md:pt-8 sm:pb-6 justify-center">
        <div className="w-full">
          <div className="grid grid-cols-7 md:gap-8 sm:px-2">
            {sponsorshipImages.map((imageUrl, index) => (
              <div
                key={index}
                className="md:h-16 sm:h-8 bg-contain bg-center"
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${imageUrl})`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
