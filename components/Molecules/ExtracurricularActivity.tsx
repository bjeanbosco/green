import React from "react";
import Image from "next/image";
import TextSection from "../Atoms/TextSection";
import { extracurricularArray } from "../../utils/aboutData";

export default function ExtracurricularActivity() {
  return (
    <div className="w-full flex justify-center">
      <div id="extracurricular" className="w-[80%] flex flex-col gap-8 py-16">
        <div>
          <h1 className="text-primary font-bold">
            Extracurricular Activities
          </h1>

          <h3 className="text-primary font-bold">
            Explore Limitless Learning at Green Hills Academy through 35+
            Extracurricular Activities:
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-start">
          <div className="w-full flex flex-col gap-12">
            <div className="w-full">
              <TextSection description={extracurricularArray} color="#000" />
            </div>
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
                  src="https://greenhillsacademy.rw:8081/images/GHA_61_kg6bzd.jpg"
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
                  src="https://greenhillsacademy.rw:8081/images/GHA_62_glafni.jpg"
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
                  src="https://greenhillsacademy.rw:8081/images/GIS_106_vi3f5s.jpg"
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
                  src="https://greenhillsacademy.rw:8081/images/libr_cwro0u.jpg"
                  alt="Image"
                />
                <div className="w-full h-2 bg-primary" />
              </div>
            </div>
          </div>
        </div>

        <p className="py-6 text-center font-bold">
          At Green Hills Academy, education is not just a classroom experience;
          it’s a holistic journey of discovery and growth. Join us in shaping
          well-rounded individuals!
        </p>
      </div>
    </div>
  );
}
