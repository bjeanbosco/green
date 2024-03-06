/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { GiCancel } from "react-icons/gi";
import { MdCastForEducation } from "react-icons/md";
import { SiGoogleforms } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import axiosInstance from "@/lib/axios";
import uploadImage from "@/utils/uploadImage";
import { Admissions } from "@/types/webpages";
import ButtonBlank from "@/components/Atoms/ButtonBlank";
import Image from "next/image";
import {
  header,
  overview,
  admissionDriven,
  everyoneChallenged,
  everyoneSuccessful,
} from "@/utils/admissionData";
import { useTransform, motion, useScroll } from "framer-motion";
import { LuDownload } from "react-icons/lu";


const AdmissionPage = ({ user }: any) => {
  const [isCustomizing, setIsCustomizing] = useState(false);


  const toggleCustomization = () => {
    setIsCustomizing(!isCustomizing);
  };
  const currentYear = new Date().getFullYear();
  const numberOfYears = currentYear - overview.startYear;
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const cloudinaryUrl = "/docs/2023-2024 Tuition and Fee Schedule.pdf";
  const fileName = "2023-2024 Tuition and Fee Schedule.pdf";

  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = cloudinaryUrl;
    link.setAttribute("download", fileName); // Set the download attribute to the desired file name
    document.body.appendChild(link);

    // Trigger a click event on the anchor element
    link.click();

    // Clean up: remove the anchor element from the DOM
    document.body.removeChild(link);
  };
  return (
    <main className="">
      <div className="flex my-6 justify-between text-white">
        <div className="flex gap-2">
          <button
            onClick={toggleCustomization}
            className={`w-[124px] h-[43px] text-center rounded-[6px] ${
              isCustomizing
                ? "bg-[#B3B3B3] hover:bg-[#B3B3B3] cursor-not-allowed"
                : "bg-[#5B83D7] hover:bg-[#4A6FBB] text-white"
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
      </div>
      <section>
      <div
        className="w-full h-[70vh] gap-1 flex flex-col pb-4 items-center justify-end "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${header.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="md:w-[45%] w-[80%] text-center text-white">
          {header.title}
        </p>
        <ButtonBlank
          name="Apply now"
          icon={<MdCastForEducation className="text-[yellow]" />}
          action="https://greenhillsacademy.openapply.com/"
          background="#018c79"
          color="#fff"
        />
      </div>
      <section className="flex h-full justify-center">
        <div className="w-[80%] flex flex-col gap-8 py-16">
          <div className="grid md:grid-cols-2 h-full w-full sm:gap-8 md:gap-12">
            <div className="grid w-full relative h-full">
              <div className="md:w-[20vw] overflow-x-hidden absolute top-1/3 shadow-2xl left-1/4 z-40 p-3 bg-primary">
                <h3 className="text-[yellow] font-bold">
                  {numberOfYears}+ Years
                </h3>
                <p className="text-white">Years of Experience</p>
              </div>
              <div className="w-full mt-4 grid grid-cols-2 items-center justify-center gap-4 h-full">
                <div className="h-[300px]">
                  <Image unoptimized
                    placeholder="empty"
                    blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    src="https://greenhillsacademy.rw:8081/images/GHA_102_ldpoeq.jpg"
                    alt="Image"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="h-[300px]">
                  <Image unoptimized
                    placeholder="empty"
                    blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    src="https://greenhillsacademy.rw:8081/images/GHA_156_1_bbqero.jpg"
                    alt="Image"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="h-[300px]">
                  <Image unoptimized
                    placeholder="empty"
                    blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    src="https://greenhillsacademy.rw:8081/images/GHA_56_oxyp0v.jpg"
                    alt="Image"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="h-[300px]">
                  <Image unoptimized
                    placeholder="empty"
                    blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    src="https://greenhillsacademy.rw:8081/images/GHA_155_rwvdt7.jpg"
                    alt="Image"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div className="w-full h-full flex flex-col justify-between items-start">
              <div className="w-full h-full flex flex-col gap-12">
                <h1 className="text-primary font-bold">Overview</h1>

                <p className="w-full pb-6 text-justify">
                  Families considering enrollment at Green Hills Academy are
                  invited to connect with our admissions team to inquire about
                  space availability and the required procedures. We also
                  encourage prospective parents and learners to arrange a campus
                  tour. Green Hills Academy maintains an open admissions
                  process, welcoming learners throughout the school year based
                  on space availability.
                </p>
              </div>
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: "#018c79",
                  color: "#fff",
                  border: "1px solid var(--color-border)",
                }}
                className="border rounded-lg gap-2 hover:bg-primary hover:border-[yellow] hover:text-white sm:text-xs p-2 md:px-4 md:py-2 flex items-center justify-center"
              >
                Tuition and Fee Schedule
                <p>
                  <LuDownload className="text-[yellow]" />
                </p>
              </motion.button>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full bg-primary flex justify-center text-white"
        style={{
          backgroundImage: `url(${"/icons/green_c6iapo.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
        ref={container}
      >
        <div className="w-[80%] flex flex-col gap-8 py-16">
          <div className="w-full h-full object-cover">
            <h1 className="text-white font-bold">{admissionDriven.title}</h1>
            <p className="text-justify text-white md:w-[80%]">
              {admissionDriven.description}{" "}
            </p>
          </div>

          <div className="w-full h-full grid gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 place-items-start">
              <div className="w-full h-full flex items-center relative">
                <div className="w-1/4 my-4 h-full left-0 top-0 absolute bg-[yellow]" />
                <div className="w-full h-[80%] left-[31px] absolute">
                  <div className="bgImageContainer">
                    <motion.div
                      className={"inner"}
                      style={{ scale: imageScale }}
                    >
                      <img
                        className="h-full w-full"
                        src="https://greenhillsacademy.rw:8081/images/GHA_39_1_1_nxnvgl.jpg"
                        alt="Image"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="w-full h-full flex flex-col gap-16 justify-between items-start">
                <div className="flex flex-col gap-8">
                  <div className="w-full p-0">
                    <div className="flex gap-4 items-center">
                      <div className="md:h-12 h-6 w-6 md:w-12">
                        <Image unoptimized
                          placeholder="empty"
                          blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                          width={0}
                          height={0}
                          sizes="100vw"
                          src="/icons/international_newwhite_hkvubl.svg"
                          alt="Image"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h2 className="text-[yellow]">
                        {admissionDriven.subTitle}
                      </h2>
                    </div>
                  </div>
                  <p className="w-full sm:py-4 text-justify text-white">
                    {admissionDriven.subDescription}
                  </p>
                </div>
                <div className="">
                  <ButtonBlank
                    name="Enrollment Portal"
                    icon={<SiGoogleforms className="text-[yellow]" />}
                    action="https://greenhillsacademy.openapply.com/"
                    background="#018c79"
                    color="#fff"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="flex justify-center w-full h-[100%] items-center"
        style={{
          backgroundImage: `url(${"/icons/whiteflip_h0mlnm.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="w-[80%] grid md:grid-cols-2 h-full gap-16 py-16">
          <div className="flex h-full w-full flex-col justify-between gap-4">
           
              <div className="flex gap-4 items-center">
                <div className="md:h-12 md:w-12">
                  <Image unoptimized
                    placeholder="empty"
                    blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    src="/icons/success_r5s8te.svg"
                    alt="Image"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h2 className="text-primary font-bold">
                  {everyoneChallenged.title}
                </h2>
              </div>
              <div className="md:hidden w-full h-full justify-start items-start gap-[22px] inline-flex">
                <div className="w-1/2 h-full flex-col justify-start items-end gap-[38px] inline-flex">
                  <div className="w-full h-2 bg-primary" />
                  <Image unoptimized
                    placeholder="empty"
                    blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full md:h-[50vh] object-cover object-center"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      display: "block",
                    }}
                    src="https://greenhillsacademy.rw:8081/images/GHA_137_jpbmmz.jpg"
                    alt="Image"
                  />
                </div>
                <div className="w-1/2 h-full flex-col justify-start items-start gap-[38px] inline-flex">
                  <Image unoptimized
                    placeholder="empty"
                    blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full md:h-[50vh] object-cover object-center"
                    src="https://greenhillsacademy.rw:8081/images/GHA_118_y8fmvf.jpg"
                    alt="Image"
                  />
                  <div className="w-full h-2 bg-primary" />
                </div>
              </div>
              <p className="w-full text-justify">
                {everyoneChallenged.description}
              </p>
            <div>
              <ButtonBlank
                name="Enrollment Portal"
                icon={<SiGoogleforms className="text-[yellow]" />}
                action="https://greenhillsacademy.openapply.com/"
                background="#018c79"
                color="#fff"
              />
            </div>
          </div>
          <div className="sm:hidden w-full h-full justify-start items-start gap-[22px] inline-flex">
            <div className="w-1/2 h-full flex-col justify-start items-end gap-[38px] inline-flex">
              <div className="w-full h-2 bg-primary" />
              <Image unoptimized
                placeholder="empty"
                blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full md:h-[50vh] object-cover object-center"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  display: "block",
                }}
                src="https://greenhillsacademy.rw:8081/images/GHA_137_jpbmmz.jpg"
                alt="Image"
              />
            </div>
            <div className="w-1/2 h-full flex-col justify-start items-start gap-[38px] inline-flex">
              <Image unoptimized
                placeholder="empty"
                blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full md:h-[50vh] object-cover object-center"
                src="https://greenhillsacademy.rw:8081/images/GHA_118_y8fmvf.jpg"
                alt="Image"
              />
              <div className="w-full h-2 bg-primary" />
            </div>
          </div>
        </div>
      </section>
      <section
        className="flex justify-center h-[100%] items-center"
        style={{
          backgroundImage: `url(${"/icons/white2_qkbyoe.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="w-[80%] flex flex-col gap-8 py-16">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="w-full h-full justify-start items-start gap-[19px] inline-flex">
              <Image unoptimized
                placeholder="empty"
                blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-1/2 h-full object-cover"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  display: "block",
                }}
                src="https://greenhillsacademy.rw:8081/images/ad6_nzqzdb.jpg"
                alt="Image"
              />
              <div className="flex-col w-1/2 h-full justify-start items-start gap-2.5 inline-flex">
                <Image unoptimized
                  placeholder="empty"
                  blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    display: "block",
                  }}
                  src="https://greenhillsacademy.rw:8081/images/GHA_37_fl9kou.jpg"
                  alt="Image"
                />
                <Image unoptimized
                  placeholder="empty"
                  blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover"
                  src="https://greenhillsacademy.rw:8081/images/GHA_138_d9xe2c.jpg"
                  alt="Image"
                />
              </div>
            </div>
            <div className="w-full h-full flex flex-col justify-between items-start">
              <div className="w-full">
                <div className="flex gap-4 mb-4 items-center">
                  <div className="md:h-12 h-6 w-6 md:w-12">
                    <Image unoptimized
                      placeholder="empty"
                      blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      src="/icons/octicon_goal-16_rz4dds.svg"
                      alt="Image"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h2 className="text-primary font-bold">
                    Everyone successful
                  </h2>
                </div>
              </div>
              <div>
                <p className="w-full pb-6 text-justify">
                  GHA, while inclusive, is also rigorous and challenging. We
                  expect high levels of motivation and perseverance from every
                  learner. When learners’ records suggest that they may not have
                  the disposition to be successful at GHA, we counsel families
                  to choose a different school.
                </p>
                <p className="w-full pb-6 text-justify">
                  For more information or to make an appointment with our
                  Admissions Director, please contact Lucie Umulisa at &nbsp;
                  <Link
                    href="mailto:admissions@greenhillsacademy.rw"
                    className="text-primary underline  md:text-[1.3vw] sm:text-[1.05rem]"
                  >
                    admissions@greenhillsacademy.rw
                  </Link>{" "}
                  &nbsp; or &nbsp;
                  <Link
                    href="tel:+250787227601"
                    className="text-primary underline  md:text-[1.3vw] sm:text-[1.05rem]"
                  >
                    +250 787 227 601
                  </Link>
                  . She will be happy to answer all of your questions and give
                  you a tour of our beautiful and expansive campus.
                </p>
              </div>
              <ButtonBlank
                name="Enrollment Portal"
                icon={<SiGoogleforms className="text-[yellow]" />}
                action="https://greenhillsacademy.openapply.com/"
                background="#018c79"
                color="#fff"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
    </main>
  );
};

export default AdmissionPage;
