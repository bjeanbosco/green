import Image from "next/image";
import React from "react";
import { MdOutlineCastForEducation } from "react-icons/md";
import { highSchoolStaffData } from "@/utils/leadershipData";
import ButtonBlank from "../Atoms/ButtonBlank";
import StaffCard from "../Atoms/StaffCard";

export default function HighSchoolPage() {
  const cloudinaryUrl = "/docs/GHA High School.pdf";
  const fileName = "GHA High School.pdf";

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
    <main
      className="pb-12"
      style={{
        backgroundImage: `url(${"/icons/whiteflip_h0mlnm.svg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section
        className="w-full h-[70vh] gap-1 flex flex-col pb-4 items-center justify-end "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(https://greenhillsacademy.rw:8081/images/67295345_2400658930204296_2041273394504074210_n_qybvz2.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center">
          <div className="w-[55px] grid place-items-center">
            <div className="w-[18px] h-[7px] my-2 bg-primary" />
            <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
          </div>
        </div>
        <h1 className="text-primary capitalize">High School</h1>
        <h3 className="text-center text-white font-normal">
          International Baccalaureate Middle Years, Diploma and Career-related
          Programmes
        </h3>
      </section>
      <section
        className="flex justify-center"
        style={{
          backgroundImage: `url(${"/icons/whiteflip_h0mlnm.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="w-[80%] h-full py-16 flex flex-col gap-12">
          <div className="flex gap-4 items-center">
            <div className="md:h-12 h-6 w-6 md:w-12">
              <Image
                unoptimized
                placeholder="empty"
                blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                width={0}
                height={0}
                sizes="100vw"
                src="/icons/user-profile-focus_znwshq.svg"
                alt="Image"
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-primary">Note from the Principal</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="h-full w-full ">
              <p className="text-justify pb-6">Greetings!!</p>
              <p className="text-justify pb-6">
                A warm welcome to the Green Hills Academy High School page.
                Through our school's core values of Integrity, Intellectual
                curiosity, and Inclusivity, we are a community that embodies
                high-quality education and nurtures an ambitious, caring next
                generation.
              </p>
              <p className="text-justify pb-6">
                The high school is composed of learners in grades 9 - 12 who are
                engaged in the IB Curriculum where we offer grades 9 and 10
                (ages 13 - 15) the Middle Years Program (MYP) and Diploma
                Programme (DP) or Career-related Programme (CP) to grades 11 and
                12 (ages 16 - 18). Many of our graduates are admitted to
                prestigious universities around the world with some being
                awarded education scholarships.
              </p>
              <p className="text-justify pb-6">
                In addition to a wide range of subjects, learners can choose
                from at both the MYP, DP, and CP, there is a variety of
                extracurricular activities offered after school that include
                sports, Debate, Model United Nations (MUN), and indoor games, to
                mention a few. This vibrant after-school program is an extension
                of teaching and learning where 21st-century skills like
                communication, research, social, and thinking skills are honed
                and applied to real-life situations. We are excited for the
                opportunity to welcome you into this school community.
              </p>
            </div>

            <div className="flex flex-col gap-8 justify-evenly h-full">
              <div className="w-full h-full justify-start items-start gap-[22px] inline-flex">
                <div className="w-1/2 h-full flex-col justify-start items-end gap-[38px] inline-flex">
                  <div className="w-full h-2 bg-primary" />
                  <Image
                    unoptimized
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
                    src="https://greenhillsacademy.rw:8081/images/ad5_pxkjam.jpg"
                    alt="Image"
                  />
                </div>
                <div className="w-1/2 h-full flex-col justify-start items-start gap-[38px] inline-flex">
                  <Image
                    unoptimized
                    placeholder="empty"
                    blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full md:h-[50vh] object-cover object-center"
                    src="https://greenhillsacademy.rw:8081/images/GHA_24_1_sdsl7r.jpg"
                    alt="Image"
                  />
                  <div className="w-full h-2 bg-primary" />
                </div>
              </div>
              <div className="w-full h-full justify-start items-start gap-[22px] inline-flex">
                <div className="w-1/2 h-full flex-col justify-start items-end gap-[38px] inline-flex">
                  <div className="w-full h-2 bg-primary" />
                  <Image
                    unoptimized
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
                    src="https://greenhillsacademy.rw:8081/images/GHA_54_mfz4zo.jpg"
                    alt="Image"
                  />
                </div>
                <div className="w-1/2 h-full flex-col justify-start items-start gap-[38px] inline-flex">
                  <Image
                    unoptimized
                    placeholder="empty"
                    blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full md:h-[50vh] object-cover object-center"
                    src="https://greenhillsacademy.rw:8081/images/272224630_629271885027072_768712889385596974_n_vwtd7z.jpg"
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
        className="flex bg-green py-16 justify-center w-full"
        style={{
          backgroundImage: `url(${"/icons/lightgreen2_xytlj8.svg"}`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[80%] h-full flex flex-col gap-12">
          <h1 className="text-primary font-bold text-center">
            Curriculum Description
          </h1>

          <div className="w-full h-full grid md:grid-cols-2 gap-12">
            <div></div>
            <div className="flex gap-4 items-center">
              <div className="md:h-12 h-6 w-6 md:w-12">
                <Image
                  unoptimized
                  placeholder="empty"
                  blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="/icons/collaborations-idea_ewmkm0.svg"
                  alt="Image"
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-primary font-bold">Middle Years Programme</h2>
            </div>
          </div>
          <div className="w-full h-full grid md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-8 justify-evenly h-full">
              <div className="w-full h-full justify-start items-start gap-[22px] inline-flex">
                <div className="w-1/2 h-full flex-col justify-start items-end gap-[38px] inline-flex">
                  <div className="w-full h-2 bg-primary" />
                  <Image
                    unoptimized
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
                    src="https://greenhillsacademy.rw:8081/images/328034337_1909099572769974_2721711731069418267_n_l1l3aq.jpg"
                    alt="Image"
                  />
                </div>
                <div className="w-1/2 h-full flex-col justify-start items-start gap-[38px] inline-flex">
                  <Image
                    unoptimized
                    placeholder="empty"
                    blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full md:h-[50vh] object-cover object-center"
                    src="https://greenhillsacademy.rw:8081/images/317495882_2409737462512281_5552480113407587089_n_jca6nq.jpg"
                    alt="Image"
                  />
                  <div className="w-full h-2 bg-primary" />
                </div>
              </div>
              <div className="w-full h-full justify-start items-start gap-[22px] inline-flex">
                <div className="w-1/2 h-full flex-col justify-start items-end gap-[38px] inline-flex">
                  <div className="w-full h-2 bg-primary" />
                  <Image
                    unoptimized
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
                    src="https://greenhillsacademy.rw:8081/images/285019652_426263605634814_2565775472001183078_n_pgo2ub.jpg"
                    alt="Image"
                  />
                </div>
                <div className="w-1/2 h-full flex-col justify-start items-start gap-[38px] inline-flex">
                  <Image
                    unoptimized
                    placeholder="empty"
                    blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full md:h-[50vh] object-cover object-center"
                    src="https://greenhillsacademy.rw:8081/images/283763627_380004234172318_4387226363188300358_n_rwrrrf.jpg"
                    alt="Image"
                  />
                  <div className="w-full h-2 bg-primary" />
                </div>
              </div>
            </div>
            <div className="h-full w-full flex flex-col justify-between">
              <div className="flex flex-col gap-12">
                <p className="text-justify pb-6">
                  The IB MYP is a programme of international education designed
                  for learners aged 11 to 16, a period that is a particularly
                  critical phase of personal and intellectual development. The
                  programme aims to develop inquiring, knowledgeable, and caring
                  young people with the knowledge, understanding, attitudes, and
                  skills necessary to participate actively and responsibly in an
                  interrelated, complex, and changing world. Learning how to
                  learn and how to evaluate information critically is as
                  important as learning facts. The IB MYP builds on the work of
                  the Primary Years Programme and prepares learners for entry to
                  the IB Diploma Programme and Career-related Programme, a
                  universally recognized rigorous, academic course that allows
                  learners to gain entry to universities and colleges worldwide.
                </p>
                <p className="text-justify pb-6">
                  Through the MYP, our learners are also challenged to excel in
                  their personal development. MYP at GHA offers a broad rich
                  curriculum that comprises eight subject groups. Teaching and
                  learning involve learning concepts that act as a vehicle to
                  inquire into issues and ideas of personal, local, and global
                  significance and examine knowledge holistically and in a
                  context that allows learners to connect to their lives and
                  their experience of the world that they have experienced.
                </p>
              </div>
              <div>
                <ButtonBlank
                  action={`https://www.ibo.org/programmes/middle-years-programme/`}
                  name="Learn more"
                  background="#018c79"
                  border="1px solid var(--color-border)"
                  color="#fff"
                  icon={<MdOutlineCastForEducation className="text-[yellow]" />}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //done */}
      <section
        className="flex bg-primary justify-center text-white"
        style={{
          backgroundImage: `url(${"/icons/green_c6iapo.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[80%] h-full py-16 flex flex-col gap-12">
          <div className="flex gap-4 mb-4 items-center">
            <div className="md:h-12 h-6 w-6 md:w-12">
              <Image
                unoptimized
                placeholder="empty"
                blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                width={0}
                height={0}
                sizes="100vw"
                src="/icons/global-learning_yb8ziy.svg"
                alt="Image"
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-white font-bold">Career-Related Programme</h2>
          </div>
          <div className="w-full h-full grid md:grid-cols-2 gap-12">
            <div className="h-full w-full flex flex-col justify-between">
              <div className="h-full w-full">
                <p className="text-justify pb-6">
                  The IBCP is a framework of international education that
                  incorporates the values of the IB into a unique programme
                  addressing the needs of learners engaged in career-related
                  education.
                </p>
                <p className="text-justify pb-6">
                  The programme leads to further/higher education,
                  apprenticeships, or employment.
                </p>
                <p className="text-justify pb-6">
                  Apart from the Career-Related Course, learners take 2-3 IB
                  Diploma Subjects at high or standard levels. They do the
                  mandatory core consisting of Service Learning, Reflective
                  Projects, Language Development, and Personal & Professional
                  Skills.
                </p>
              </div>
              <div>
                <ButtonBlank
                  action={`https://www.ibo.org/programmes/career-related-programme/`}
                  name="Learn more"
                  background="#fff"
                  border="1px solid var(--color-border)"
                  color="#018c79"
                  icon={<MdOutlineCastForEducation className="text-primary" />}
                />
              </div>
            </div>
            <div className="w-full h-full justify-start items-start gap-[22px] inline-flex">
              <div className="w-1/2 h-full flex-col justify-start items-end gap-[38px] inline-flex">
                <div className="w-full h-2 bg-[yellow]" />
                <Image
                  unoptimized
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
                  src="https://greenhillsacademy.rw:8081/images/hs1_za54e8.jpg"
                  alt="Image"
                />
              </div>
              <div className="w-1/2 h-full flex-col justify-start items-start gap-[38px] inline-flex">
                <Image
                  unoptimized
                  placeholder="empty"
                  blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full md:h-[50vh] object-cover object-center"
                  src="https://greenhillsacademy.rw:8081/images/hs6_gqlihz.jpg"
                  alt="Image"
                />
                <div className="w-full h-2 bg-[yellow]" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // */}
      <section
        className="flex justify-center"
        style={{
          backgroundImage: `url(${"/icons/white2_qkbyoe.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "repeat-y",
        }}
      >
        <div className="w-[80%] h-full py-16 flex flex-col gap-12">
          <div className="w-full h-full grid md:grid-cols-2 gap-12">
            <div></div>
            <div className="flex gap-4 mb-4 items-center">
              <div className="md:h-12 h-6 w-6 md:w-12">
                <Image
                  unoptimized
                  placeholder="empty"
                  blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="/icons/collaborations-idea_ewmkm0.svg"
                  alt="Image"
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-primary font-bold">Diploma Programme</h2>
            </div>
          </div>
          <div className="w-full h-full grid md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-8 justify-evenly h-full">
              <div className="w-full h-full justify-start items-start gap-[22px] inline-flex">
                <div className="w-1/2 h-full flex-col justify-start items-end gap-[38px] inline-flex">
                  <div className="w-full h-2 bg-primary" />
                  <Image
                    unoptimized
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
                    src="https://greenhillsacademy.rw:8081/images/279240852_335800991874257_4235888369446522509_n_ipftky.jpg"
                    alt="Image"
                  />
                </div>
                <div className="w-1/2 h-full flex-col justify-start items-start gap-[38px] inline-flex">
                  <Image
                    unoptimized
                    placeholder="empty"
                    blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full md:h-[50vh] object-cover object-center"
                    src="https://greenhillsacademy.rw:8081/images/287049530_765224377969496_6828609824704483441_n_lw3xgr.jpg"
                    alt="Image"
                  />
                  <div className="w-full h-2 bg-primary" />
                </div>
              </div>
              <div className="w-full h-full justify-start items-start gap-[22px] inline-flex">
                <div className="w-1/2 h-full flex-col justify-start items-end gap-[38px] inline-flex">
                  <div className="w-full h-2 bg-primary" />
                  <Image
                    unoptimized
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
                    src="https://greenhillsacademy.rw:8081/images/290764019_165427935991484_5955662401332428878_n_f55kyk.jpg"
                    alt="Image"
                  />
                </div>
                <div className="w-1/2 h-full flex-col justify-start items-start gap-[38px] inline-flex">
                  <Image
                    unoptimized
                    placeholder="empty"
                    blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full md:h-[50vh] object-cover object-center"
                    src="https://greenhillsacademy.rw:8081/images/347552413_1021218878868465_1964941660457593841_n_qmnolk.jpg"
                    alt="Image"
                  />
                  <div className="w-full h-2 bg-primary" />
                </div>
              </div>
            </div>
            <div className="h-full w-full flex flex-col justify-between">
              <div className="h-full w-full">
                <p className="text-justify pb-6">
                  The Diploma Programme (DP) provides a challenging,
                  internationally focused, broad, and balanced educational
                  experience for learners aged 16 to 19. learners are required
                  to study six subjects and a curriculum core concurrently over
                  two years. The programme is designed to equip learners with
                  the basic academic skills needed for university study, further
                  education, and their chosen profession. Additionally, the
                  programme supports the development of the values and life
                  skills needed to live a fulfilled and purposeful life.
                </p>
                <p className="text-justify pb-6">
                  A distinguishing characteristic of the DP is a concern with
                  the whole educational experience of each learner. The
                  curriculum framework, and the supporting structures and
                  principles, are designed to ensure that each learner is
                  necessarily exposed to a broad and balanced curriculum. The
                  learner profile and the core are positioned at the center of
                  the programme, reflecting the priority given to affective
                  disposition as well as cognitive development, and concern with
                  developing competent and active citizens as well as subject
                  specialists. The core requirements of the theory of knowledge
                  (TOK), the extended essay, and creativity, activity, and
                  service (CAS) broaden the educational experience and challenge
                  learners to apply their knowledge and understanding in
                  real-life contexts.
                </p>
                <p className="text-justify pb-6">
                  learners study six subjects concurrently. These include two
                  languages, one subject from individuals and societies, one
                  science, one mathematics subject, and one subject from the
                  arts or another subject from the other groups. There are also
                  interdisciplinary subjects such as environmental systems and
                  societies, and literature and performance, available to
                  learners. These options allow learners to satisfy the
                  requirements for two groups of subjects by studying one
                  subject, thus allowing them to select another subject from any
                  group to make up a total of six.
                </p>
              </div>
              <div>
                <ButtonBlank
                  action={`https://www.ibo.org/programmes/diploma-programme/`}
                  name="Learn more"
                  background="#018c79"
                  border="1px solid var(--color-border)"
                  color="#fff"
                  icon={<MdOutlineCastForEducation className="text-[yellow]" />}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="flex bg-primary justify-center py-16"
        style={{
          backgroundImage: `url(${"/icons/green_c6iapo.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[80%]">
          <h1 className="text-white font-bold">Administration</h1>

          <div className="text-white cardGrid gap-12 mb-12 md:pt-12 sm:pt-4">
            {highSchoolStaffData.map((staff, index) => (
              <StaffCard
                key={index}
                title={staff.title}
                imageUrl={staff.imageUrl}
                name={staff.name}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
