import React, { useEffect, useRef, useState } from "react";
import { useTransform, motion, useScroll } from "framer-motion";
import Image from "next/image";
import TextSection from "../Atoms/TextSection";
import { intellectualArray, physicalArray } from "../../utils/aboutData";

const LearnersClubs = ({ user }: any) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);


  return (
    <main className="w-full mb-16">
      <section className="flex justify-center">
      <div className="w-[80%] flex flex-col gap-8 py-16">
          <h1 className="font-bold text-primary">
            High School Extracurricular Excellence at Green Hills Academy
          </h1>
          <h2 className="text-primary capitalize">Intellectual Pursuits</h2>

          <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-12 place-items-start">
            <div>
              <TextSection description={intellectualArray} color={"#000"} />
            </div>
            <div>
              <div className="w-full h-full justify-start items-start gap-[22px] inline-flex">
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
                    src="https://greenhillsacademy.rw:8081/images/313199295_576754504220368_5153481277779731709_n_jswouj.jpg"
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
                    src="https://greenhillsacademy.rw:8081/images/386640374_18064938559431847_1161725750774480945_n_b8usne.jpg"
                    alt="Image"
                  />
                  <div className="w-full h-2 bg-primary" />
                </div>
              </div>
              <div className="w-full h-full justify-start items-start gap-[22px] inline-flex">
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
                    src="https://greenhillsacademy.rw:8081/images/409018919_906617781469347_4373556515431079327_n_rlkuix.jpg"
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
                    src="https://greenhillsacademy.rw:8081/images/GHA_68_1_u7z5gg.jpg"
                    alt="Image"
                  />
                  <div className="w-full h-2 bg-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full flex justify-center"
        style={{
          backgroundImage: `url(${"/icons/green_c6iapo.svg"}`,
          backgroundSize: "cover",
          backgroundPosition: "left",
        }}
      >
      <div className="w-[80%] flex flex-col gap-8 py-16">
          <h2 className="text-[yellow] capitalize">Physical Fitness</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-start">
            <div>
              {" "}
              <TextSection description={physicalArray} color={"#fff"} />
            </div>

            <div>
              <div className="w-full h-full justify-start items-start gap-[22px] inline-flex">
                <div className="w-1/2 h-full flex-col justify-start items-end gap-[38px] inline-flex">
                  <div className="w-full h-2 bg-[yellow]" />
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
                    src="https://greenhillsacademy.rw:8081/images/401040188_18069482443431847_8269720069445765284_n_dznknm.jpg"
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
                    src="https://greenhillsacademy.rw:8081/images/359331603_18054473854431847_5341948767340672059_n_hvxty4.jpg"
                    alt="Image"
                  />
                  <div className="w-full h-2 bg-[yellow]" />
                </div>
              </div>

              <div className="w-full h-full justify-start items-start gap-[22px] inline-flex">
                <div className="w-1/2 h-full flex-col justify-start items-end gap-[38px] inline-flex">
                  <div className="w-full h-2 bg-[yellow]" />
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
                    src="https://greenhillsacademy.rw:8081/images/GHA_126_hhg7e6.jpg"
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
                    src="https://greenhillsacademy.rw:8081/images/GHA_88_omj0xu.jpg"
                    alt="Image"
                  />
                  <div className="w-full h-2 bg-[yellow]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-full h-full justify-center" ref={container}>
      <div className="w-[80%] flex flex-col gap-8 py-16">
          <h2 className="text-primary text-center">
            Fostering Self-Reliance and Leadership
          </h2>
          <div className="w-full h-full grid md:grid-cols-2 gap-16 items-center">
            <p className="text-black pb-6 text-justify">
              At Green Hills Academy, we encourage all learners to participate
              in these diverse extracurricular activities. This involvement
              showcases our belief in self-reliance, self-discovery, and
              leadership potential. These ECAs serve as platforms for our
              learners to &quot;let their lives speak,&quot; fostering personal
              growth and meaningful contributions to the school community. Join
              us in embracing the power of holistic education!
            </p>
            <div className="w-full h-[50vh] flex items-center relative">
              <div className="w-full h-[80%] right-[31px] z-10 absolute">
                <div className="bgImageContainer">
                  <motion.div className={"inner"} style={{ scale: imageScale }}>
                    <img
                      src="https://greenhillsacademy.rw:8081/images/317976113_1332444890923697_5449406090760326630_n_kej1nx.jpg"
                      alt="learner_life Image"
                    />
                  </motion.div>
                </div>
              </div>
              <div className="w-1/4 my-4 h-full right-0 top-0 absolute bg-primary" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LearnersClubs;
