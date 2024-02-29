import Image from "next/image";
import React from "react";
import { LuDownload } from "react-icons/lu";
import { primarySchoolStaffData } from "@/utils/leadershipData";
import { motion } from "framer-motion";
import TextSection from "../Atoms/TextSection";
import ButtonBlank from "../Atoms/ButtonBlank";
import { MdOutlineCastForEducation } from "react-icons/md";
import GreenDecoratedList from "../Atoms/greenDecoratedList";
import DecoratedList from "../Atoms/decoratedList";
import StaffCard from "../Atoms/StaffCard";

export default function PrimaryPage() {
  const cloudinaryUrl = "/docs/Green Hills Academy.pdf";
  const fileName = "Green Hills Academy.pdf";

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
  const topList = [
    "Who we are",
    "Where we are in place and time",
    "How we express ourselves",
    "How the world works",
    "How we organize ourselves",
    "Sharing the planet",
  ];
  return (
    <main className="pb-12">
      <section
        className="w-full h-[70vh] gap-1 flex flex-col pb-4 items-center justify-end "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(https://greenhillsacademy.rw:8081/images/266795736_4685877221497631_8323611157934163519_n_rrncgp.jpg
)`,
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
        <h1 className="text-primary capitalize">Primary School</h1>
        <h3 className="text-center text-white">
          International Baccalaureate Primary Years Programme
        </h3>
      </section>
      <section
        className="flex justify-center md:h-full py-16 items-center"
        style={{
          backgroundImage: `url(${"/icons/whiteflip_h0mlnm.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[80%] h-full flex flex-col justify-between">
          <div className="grid h-full md:grid-cols-2 place-items-center sm:gap-8 md:gap-16">
            <div className="w-full h-full">
              <div className="w-full h-full flex flex-col gap-12">
                <h1 className="text-primary font-bold">Overview</h1>

                <div>
                  <p className="text-justify pb-6">
                    Our Primary School follows the IB Primary Years Programme
                    (PYP) from Grades One to Five. Learners engage in
                    interactive lessons and activities based on six Units of
                    Inquiry. All subjects and events are interconnected with
                    these Units to offer learners a chance for deep exploration
                    and learning. The Units of Inquiry are:
                  </p>
                  {topList.map((item, index) => (
                  <DecoratedList key={index} color="black" details={item} /> ))}

                  <p className="text-justify pb-6">
                    In Grade Five, the final year of the PYP, learners
                    demonstrate their overall knowledge of the Primary Years
                    Programme by taking part in an extended, in-depth
                    collaborative project known as the PYP Exhibition. This
                    involves learning and working collaboratively to investigate
                    real-life issues and pose solutions to problems. During the
                    final presentations, learners collectively synthesize all of
                    the essential elements of the PYP in ways that can be shared
                    with the entire learning community.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-full h-full overflow-hidden relative flex items-end">
              <Image unoptimized
                placeholder="empty"
                blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full left-[86px] top-0 absolute object-cover"
                src="https://greenhillsacademy.rw:8081/images/DSC_1369_ibr5ar.jpg"
                alt="Image"
              />
              <Image unoptimized
                placeholder="empty"
                blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-1/2 h-1/2 left-0 absolute border-8 border-white object-cover"
                src="https://greenhillsacademy.rw:8081/images/376739279_18061701070431847_5802953708720395779_n_kjsqau.jpg"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full bg-green flex justify-center"
        style={{
          backgroundImage: `url(${"/icons/lightgreen_fotidt.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[80%] h-full my-16 md:grid grid-cols-2 gap-16 items-center">
          <div className="w-full">
            <p className="text-justify pb-6">
              Our teaching and learning are proactive, inquiry-based,
              learner-centered, and led. Learners are interactive, collaborate,
              discuss, research, present, and reflect in groups. The
              communication, research, self-management, social, and thinking
              skills are crystal clear on a daily basis during teaching and
              learning. The Units of Inquiry are transdisciplinary themes. They
              include and transcend subject areas and connect the learners to
              the real world of which they are global citizens.
            </p>
            <p className="text-justify pb-6">
              Collaboration is on our daily menu. Educators gather in their
              grade-level teams to plan and prepare lessons together, to discuss
              and exchange teaching and learning strategies in order to enhance
              their pedagogical methods and boost the learners’ academic
              performances.
            </p>
            <p className="text-justify pb-6">
              Support is available across our primary division. Homeroom
              educators are supported by their team leaders. Science, Math,
              English French, Art/ICT, PE/Traditional Dance/Music, and Learner
              Support are supported by their Heads of Department. There are two
              vice principals (French and English) and the School Principal who
              are daily at the disposal of all staff and faculty to provide help
              and respond to all concerns.
            </p>
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
                className="w-full md:h-full object-cover object-center"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  display: "block",
                }}
                src="https://greenhillsacademy.rw:8081/images/285913554_2300484220104568_3567442786875876806_n_gdclvq.jpg"
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
                className="w-full md:h-full object-cover object-center"
                src="https://greenhillsacademy.rw:8081/images/GIS_90.jpg"
                alt="Image"
              />
              <div className="w-full h-2 bg-primary" />
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-full flex justify-center"
        style={{
          backgroundImage: `url(${"/icons/whiteflip_h0mlnm.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[80%] my-16 grid md:grid-cols-2 gap-12">
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
                src="https://greenhillsacademy.rw:8081/images/407253799_901905251940600_5011519124696385143_n_bpvguu.jpg"
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
                src="https://greenhillsacademy.rw:8081/images/GIS_93.jpg"
                alt="Image"
              />
              <div className="w-full h-2 bg-primary" />
            </div>
          </div>
          <div className="h-full w-full">
            <p className="text-justify pb-6">
              Our 50/50 French-English Bilingual Program provides a unique
              opportunity for our learners to be linguistically balanced while
              studying Science, Math, French, and English in both languages, to
              smoothly access the best francophone and/or anglophone
              universities worldwide, to easily flow between different cultures,
              and embrace perspectives other than their own.
            </p>
            <p className="text-justify pb-6">
              Teaching and learning go beyond the classroom. Our learners
              connect what they are learning or have learned in class to the
              real world. They take action by going into the community not only
              to interact with people but also to implement the knowledge they
              have acquired in their classrooms in order to solve some community
              issues and meet their needs. All our grade-level learners also go
              on field trips that line up and support our PYP curriculum.
            </p>
            <div>
            <ButtonBlank
                    action={`https://www.ibo.org/programmes/primary-years-programme/`}
                    name="Learn more"
                    background="#018c79"
                    border="1px solid var(--color-border)"
                    color="#fff"
                    icon={
                      <MdOutlineCastForEducation className="text-[yellow]" />
                    }
                  />
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
            {primarySchoolStaffData.map((staff, index) => (
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
