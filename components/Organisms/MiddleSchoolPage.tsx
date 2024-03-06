import Image from "next/image";
import React from "react";
import { LuDownload } from "react-icons/lu";
import { texts } from "@/utils/aboutData";
import TextSection from "../Atoms/TextSection";
import { middleSchoolStaffData } from "@/utils/leadershipData";
import ButtonBlank from "../Atoms/ButtonBlank";
import { MdOutlineCastForEducation } from "react-icons/md";
import StaffCard from "../Atoms/StaffCard";

export default function MiddleSchoolPage({ user }: any) {
  
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(https://greenhillsacademy.rw:8081/images/Copy_of_DSC_9626_mzt8do.jpg)`,
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
        <h1 className="text-primary capitalize">Middle School</h1>
        <h3 className="text-center text-white font-normal">
          International Baccalaureate Middle Years Programme
        </h3>
      </section>
      <div
        className="flex justify-center h-full py-16 items-center"
        style={{
          backgroundImage: `url(${"/icons/whiteflip_h0mlnm.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[80%] h-full flex flex-col gap-12 py-16">
          <h1 className="text-primary font-bold">Overview</h1>
          <div className="grid md:grid-cols-2 place-items-center sm:gap-8 md:gap-16">
            <div className="h-full w-full">
              <p className="text-justify pb-6">
                The IB MYP is a programme of international education designed
                for students aged 11 to 16, a period that is a particularly
                critical phase of personal and intellectual development. The
                programme aims to develop inquiring, knowledgeable, and caring
                young people with the knowledge, understanding, attitudes, and
                skills necessary to participate actively and responsibly in an
                interrelated, complex, and changing world. Learning how to learn
                and how to evaluate information critically is as important as
                learning facts. The IB MYP builds on the work of the Primary
                Years Programme and prepares students for entry to the IB
                Diploma Programme and Career-related Programme, a universally
                recognized rigorous, academic course that allows students to
                gain entry to universities and colleges worldwide.
              </p>
              <p className="text-justify pb-6">
                Through the MYP, our learners are also challenged to excel in
                their personal development. MYP at GHA offers a broad rich
                curriculum that comprises eight subject groups. Teaching and
                learning involve learning concepts that act as a vehicle to
                inquire into issues and ideas of personal, local, and global
                significance and examine knowledge holistically and in a context
                that allows learners to connect to their lives and their
                experience of the world that they have experienced.
              </p>
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

            <div className="md:w-full h-full overflow-hidden relative flex items-end">
              <Image
                unoptimized
                placeholder="empty"
                blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full left-[86px] top-0 absolute object-cover"
                src="https://greenhillsacademy.rw:8081/images/362022873_18055348870431847_6695715751711280359_n_xvrunw.jpg"
                alt="Image"
              />
              <Image
                unoptimized
                placeholder="empty"
                blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-1/2 h-1/2 left-0 absolute border-8 border-white object-cover"
                src="https://greenhillsacademy.rw:8081/images/325962855_1705050496985428_4555897869236098054_n_fbaq9t.jpg"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
      {/* done */}
      <section
        style={{
          backgroundImage: `url(${"/icons/lightgreen_fotidt.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full bg-green flex justify-center"
      >
        <div className="w-[80%] h-full flex flex-col gap-12 py-16">
          <div className="flex gap-4 items-center mb-4">
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
                className="h-full w-full object-cover"
              />
            </div>
            <h2 className="text-primary">Approach To Teaching</h2>
          </div>
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-12 place-items-start place-content-start">
            <div className="h-full w-full ">
              <TextSection description={texts} color="#000" />
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
                    src="https://greenhillsacademy.rw:8081/images/m1_r17kfa.jpg"
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
                    src="https://greenhillsacademy.rw:8081/images/m2_eamld0.jpg"
                    alt="Image"
                  />
                  <div className="w-full h-2 bg-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* // */}
      <section
        className="w-full flex justify-center h-full py-16"
        style={{
          backgroundImage: `url(${"/icons/whiteflip_h0mlnm.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="w-[80%] h-full flex flex-col gap-12">
          <h1 className="text-primary font-bold md:text-center">
            Assessment and Reporting
          </h1>
          <div className="w-full p-0">
            <div className="flex gap-4 items-center">
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
                  className="h-full w-full object-cover"
                />
              </div>
              <h2 className="text-primary">Criterion-Referenced</h2>
            </div>
          </div>
          <div className="w-[100%] h-full grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center place-content-center">
            <div className="w-full h-full flex flex-col gap-8">
              <div>
                <p className="text-justify pb-6">
                  Assessment in the Middle School learning program follows the
                  criterion-referenced approach, aligning with the IB MYP
                  assessment principles.
                </p>
                <p className="text-justify pb-6">
                  learners are assessed against specified criteria and learning
                  objectives, providing meaningful feedback on their progress
                  and identifying areas for Improvement.
                </p>
                <p className="text-justify pb-6">
                  <strong className="text-primary">
                    Formative and Summative Assessments:
                  </strong>{" "}
                  Ongoing formative assessments and Summative assessments are
                  used to monitor and evaluate learner progress.
                </p>
                <p className="text-justify pb-6">
                  <strong className="text-primary">
                    MYP Assessment Criteria:
                  </strong>{" "}
                  Each subject utilizes specific criteria aligned with the MYP
                  objectives to assess learner performance.
                </p>
                <p className="text-justify pb-6">
                  <strong className="text-primary">
                    Levels of Achievement:
                  </strong>{" "}
                  Assessment is based on a four-point scale (1-4) that indicates
                  learners&apos; levels of achievement in relation to the
                  criteria.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-evenly h-full">
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
                    src="https://greenhillsacademy.rw:8081/images/ad4_ya7uya.jpg"
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
                    src="https://greenhillsacademy.rw:8081/images/408006814_905318474932611_5474609897948480644_n_hv56rt.jpg"
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
        className="flex bg-primary justify-center pt-12"
        style={{
          backgroundImage: `url(${"/icons/green_c6iapo.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[80%]">
          <h1 className="text-white font-bold">Administration</h1>

          <div className="text-white cardGrid gap-12 mb-12 md:pt-12 sm:pt-4">
            {middleSchoolStaffData.map((staff, index) => (
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
