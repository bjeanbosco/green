import Image from "next/image";
import React from "react";
import { nurserySchoolStaffData } from "@/utils/leadershipData";
import ButtonBlank from "../Atoms/ButtonBlank";
import { MdOutlineCastForEducation } from "react-icons/md";
import StaffCard from "../Atoms/StaffCard";

export default function NurseryPage({ user }: any) {
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
  return (
    <main className="pb-12">
      <section
        className="w-full h-[70vh] gap-1 flex flex-col pb-4 items-center justify-end "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(
            https://greenhillsacademy.rw:8081/images/393750569_18066720952431847_4398473948448346781_n_le6efl.jpg)`,
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
        <h1 className="text-primary capitalize">Nursery School</h1>
        <h3 className="text-center text-white">
          International Baccalaureate Primary Years Programme
        </h3>
      </section>
      <section
        className="flex justify-center md:h-[100%] items-center"
        style={{
          backgroundImage: `url(${"/icons/whiteflip_h0mlnm.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[80%] h-full py-16 flex flex-col gap-12">
          <h1 className="text-primary font-bold">Overview</h1>
          <div className="grid md:grid-cols-2 place-items-center sm:gap-8 md:gap-16">
            <div className="w-full h-full">
              <div className="w-full h-full ">
                <p className="text-justify pb-6">
                  Play is more than fun—it’s the key to unlocking a child’s
                  potential to learn and grow. The PYP early years (for children
                  aged 3 – 6) frees your child to play and learn, so they can
                  build the proven curiosity, creativity, and confidence they’ll
                  need to thrive today—and well into the future.
                </p>
                <p className="text-justify pb-6">
                Learners explore their environment and learn about their world through play and relationships with peers, educators, family, and community members.
                </p>
                <p className="text-justify pb-6">
                Educators are partners, nurturers, and guides who help facilitate the exploration of children’s interests as they work on long- and short-term projects.
                </p>
                <p className="text-justify pb-6">
                  Schools provide dynamic environments that nurture curiosity,
                  creativity, and confidence.
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
            <div className="md:w-full h-full overflow-hidden relative flex items-end">
              <Image unoptimized
                placeholder="empty"
                blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full left-[86px] top-0 absolute object-cover"
                src="https://greenhillsacademy.rw:8081/images/256815676_873373666657483_3801095629152074343_n_oouqjy.jpg"
                alt="Image"
              />
              <Image unoptimized
                placeholder="empty"
                blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-1/2 h-1/2 left-0 absolute border-8 border-white object-cover"
                src="https://greenhillsacademy.rw:8081/images/DSC_2388_uatnro.jpg"
                alt="Image"
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
            {nurserySchoolStaffData.map((staff, index) => (
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
