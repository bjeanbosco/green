/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GiCancel } from "react-icons/gi";
import { MdCastForEducation } from "react-icons/md";
import { SiGoogleforms } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import axiosInstance from "@/lib/axios";
import uploadImage from "@/utils/uploadImage";
import { Admissions } from "@/types/webpages";

const AdmissionPage = ({ user }: any) => {
  const [admission, setAdmission] = useState<Admissions>({
    "bannerImageUrl": "images/1.png",
    "bannerTitle": "Wish to learn more? We'll send you a package of information as soon as you complete the form Linked below",
    "enrollementSection": {
      "title": "Enrollment Portal",
      "description": "Families interested in joining the Green Hills community should contact the Admissions Director to discuss availability of space. If there is space, parents are encouraged to schedule a tour of the campus if they have not previously visited. GHA has an open admissions process and accepts learners throughout the school year if space is available.",
      "imageUrls": [],
      "formUrl": ""
    },
    "missionSection": {
      "title": "Mission Driven Admissions",
      "description": "At Green Hills Academy, our mission is to help learners become principled, lifelong learners equipped with the knowledge and skills to excel. In service to our mission, we provide an innovative, inclusive international education for learners from Nursery through Grade 12.",
      "imageUrls": [],
      "formUrl": ""
    },
    "firstCharacterSection": {
      "title": "Inclusion",
      "description": "GHA welcomes learners with a diverse range of cultural and educational backgrounds, talents and abilities. The diverse backgrounds of our learners enrich our school community and contribute to a dynamic learning environment in which all learners are celebrated, and challenged and supported to do their personal best.As a welcoming and inclusive community, we expect families to engage fully with the School, supporting both its educational philosophy and community activities. We also value transparent communications and constructive, respectful, personal and professional interactions.",
      "imageUrls": [],
      "formUrl": ""
    },
    "secondCharacterSection": {
      "title": "Everyone challenged",
      "description": "GHA is committed to personalized learning in order to sustain high levels of motivation and optimize our learners' growth and achievement in all areas of development. We personalize learning to help learners realize their full potential, identify and develop interests and talents, and become internationally-minded global citizens.",
      "imageUrls": [],
      "formUrl": ""
    },
    "lastCharacterSection": {
      "title": "Everyone successful",
      "description": "GHA, while inclusive, is also rigorous and challenging. We expect high levels of motivation and perseverance from every learner. When learners’ records suggest that they may not have the disposition to be successful at GHA, we counsel families to choose a different school.",
      "imageUrls": [],
      "formUrl": ""
    }
  });
  const [isCustomizing, setIsCustomizing] = useState(false);


  const startYear = 1998;
  const currentYear = new Date().getFullYear();
  const numberOfYears = currentYear - startYear;

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
    });
  const toggleCustomization = () => {
    setIsCustomizing(!isCustomizing);
  };

  useEffect(() => {
    axiosInstance.get("/pages/admission")
    .then(res => setAdmission(res.data))
  })

  const saveToapi = () => {
    axiosInstance.put("/pages/admission", admission)
    .then(res => console.log(res.data))

    setIsCustomizing(false);
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

        <div className="flex gap-4">
          <button
            onClick={isCustomizing ? saveToapi : () => {}}
            className={`w-[124px] h-[43px] ${
              isCustomizing
                ? "bg-[#5B83D7] hover:bg-[#4A6FBB]"
                : "cursor-not-allowed bg-[#B3B3B3] text-white"
            } text-center rounded-[6px]`}
          >
            Save Copy
          </button>

          <button className="w-[124px] h-[43px] bg-primary text-center rounded-[6px]">
            {" "}
            Publish
          </button>
        </div>
      </div>
      {isCustomizing && (
        <input
          type="file"
          accept="image/*"
          onChange={(e: any) => {
            const file = e.target.files[0];
            uploadImage(file).then(res => setAdmission({...admission, bannerImageUrl: res}))
          }}
          className="cursor-pointer"
        />
      )}
      <div
        className="w-full h-[600px] gap-1 flex flex-col pb-4 items-center justify-end "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(/images/admission.JPG)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {isCustomizing ?<textarea
        rows={2}
                className="md:w-[45%] w-[80%] text-center text-black font-normal"
                value={admission.bannerTitle}
                onChange={(e) => {
                  setAdmission({...admission, bannerTitle: e.target.value});
                }}
              />: (<div className="md:w-[45%] w-[80%] text-center text-white  font-normal">
          Wish to learn more? We&apos;ll send you a package of information as
          soon as you complete the form Linked below
        </div>)}
        <button className="text-white hover:shadow-xl mt-4 grid place-items-center bg-primary rounded-lg justify-center">
          <div className="flex space-x-4 text-[yellow]">
            <span>Apply now</span>{" "}
            <MdCastForEducation className="mt-1 text-[yellow]" />
          </div>
        </button>
      </div>
      <section className="flex justify-center">
        <div className="w-[80%] grid grid-rows-1 ">
          <div className="flex w-full my-20 justify-center md:items-center items-start">
            <div className="flex justify-between md:flex-row flex-col md:items-center items-start">
              <div className="flex md:w-1/2 w-full flex-col">
                <div
                  style={{
                    backgroundImage: `url(https://greenhillsacademy.rw:8081/images/GHA/9_ujknty.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className=" md:w-1/2 w-36 md:h-[350px] h-48 z-20"
                />
                <div className="md:w-1/2 w-32 z-40 md:ml-28 ml-20 -mt-44 md:px-6 px-2 py-6 bg-primary">
                  <h3 className="md:text-justify text-[yellow] font-bold">
                    {numberOfYears}+ Years
                  </h3>
                  <p className="md:text-justify text-white font-normal">
                    Years of Experience
                  </p>
                </div>
                <div
                  style={{
                    backgroundImage: `url(/images/adm.JPG)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="md:w-[80%] w-44 md:h-60 h-32 md:ml-12 ml-10"
                />
              </div>
              <div className="flex md:w-1/2 sm:my-8 w-full flex-col md:gap-8 gap-3 justify-center items-start ">
              {isCustomizing ?<input
                className="text-primary sm:text-base font-bold"
                value={admission.enrollementSection.title}
                onChange={(e) => {
                  setAdmission({...admission, enrollementSection: {...admission.enrollementSection, title: e.target.value}});
                }}
              />: <h1 className="text-primary sm:text-base font-bold">
                  {admission.enrollementSection.title}
                </h1>}
                <hr className="w-[75px] h-1.5 bg-primary mb-4" />
                {isCustomizing ?<textarea
                rows={4}
                className="text-primary sm:text-base font-bold"
                value={admission.enrollementSection.description}
                onChange={(e) => {
                  setAdmission({...admission, enrollementSection: {...admission.enrollementSection, description: e.target.value}});
                }}
              />: <p className="w-full text-justify text-zinc-800 font-normal">
                  {admission.enrollementSection.description}
                </p>}
                <button className="text-white hover:shadow-xl grid place-items-center bg-primary rounded-lg justify-center">
                  <div className="flex space-x-4 text-white">
                    <span>Fill the form</span>{" "}
                    <SiGoogleforms className="mt-1 text-[yellow]" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="grid w-full bg-primary place-items-center text-white"
        style={{
          backgroundImage: `url(/icons/bg.svg)`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="w-[80%] grid grid-rows-1 ">
          <div className="flex justify-center items-start md:mt-16">
            <div className="flex md:gap-8 gap-2 flex-col items-start">
            {isCustomizing ?<input
                className="text-primary sm:text-base font-bold"
                value={admission.missionSection.title}
                onChange={(e) => {
                  setAdmission({...admission, missionSection: {...admission.missionSection, title: e.target.value}});
                }}
              />: <h1 className="text-white sm:text-base font-bold">
                {admission.missionSection.title}
              </h1>}
              <hr className="w-[75px] h-1.5 bg-[yellow] mb-4" />
              {isCustomizing ?<textarea
              rows={4}
                className="text-primary sm:text-base font-bold"
                value={admission.missionSection.description}
                onChange={(e) => {
                  setAdmission({...admission, missionSection: {...admission.missionSection, description: e.target.value}});
                }}
              />:  <p className="h-auto text-justify text-white w-[80%] font-normal">
                {admission.missionSection.description}
              </p>}
            </div>
          </div>
        </div>
        <div className="w-[80%] grid grid-rows-1 ">
          <div className="flex justify-center items-center">
            <div className="flex md:flex-row flex-col-reverse my-16 gap-8 justify-between items-center">
              <div className="flex md:w-1/2 w-full flex items-end h-full">
                <div className="bg-cover bg-center md:w-1/2 w-36 md:h-[100%] h-44 z-20">
                  <img
                    src="/images/driven.JPG"
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="bg-cover bg-center md:w-1/2 w-32 h-28 -ml-12">
                  <img
                    src="/images/driven2.JPG"
                    alt=""
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="md:w-1/2 w-full flex md:gap-8 gap-2 flex-col items-start">
                <div className="flex gap-2">
                  <img
                    src="/icons/international_newwhite.svg"
                    alt=""
                    className=""
                  />
                  {isCustomizing ?<input
                className="text-primary sm:text-base font-bold"
                value={admission.firstCharacterSection.title}
                onChange={(e) => {
                  setAdmission({...admission, firstCharacterSection: {...admission.firstCharacterSection, title: e.target.value}});
                }}
              />: <h2 className="text-[yellow] sm:text-base font-bold">
                    {admission.firstCharacterSection.title}
                  </h2>}
                </div>
                {isCustomizing ?<textarea rows={4}
                className="text-primary sm:text-base font-bold"
                value={admission.firstCharacterSection.description}
                onChange={(e) => {
                  setAdmission({...admission, firstCharacterSection: {...admission.firstCharacterSection, description: e.target.value}});
                }}
              />: <p className="w-full text-justify text-white font-normal">
                  {admission.firstCharacterSection.description}
                </p>}
                <button className="text-white hover:shadow-xl grid place-items-center bg-primary border border-[yellow] rounded-lg justify-center">
                  <div className="flex space-x-4 text-white">
                    <span>Fill the form</span>{" "}
                    <SiGoogleforms className="mt-1 text-[yellow]" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="grid w-full place-items-center h-full"
        ref={ref}
      style={{
        backgroundImage: `url(${inView ? "/icons/bgwhite2_lpw73r.svg" : ""})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[80%] h-full">
          <div className="flex justify-center h-full items-center">
            <div className="flex md:flex-row flex-col-reverse my-16 gap-8 justify-between items-center">
              <div className="md:w-1/2 w-full flex md:gap-8 gap-2 flex-col items-start ">
                <div className="flex gap-2">
                  <img                       loading="lazy"src="/icons/success.svg" alt="" className="" />
                  {isCustomizing ?<input
                className="text-primary sm:text-base font-bold"
                value={admission.secondCharacterSection.title}
                onChange={(e) => {
                  setAdmission({...admission, secondCharacterSection: {...admission.secondCharacterSection, title: e.target.value}});
                }}
              />: <h2 className="text-primary sm:text-base font-bold">
                    {admission.secondCharacterSection.title}
                  </h2>}
                </div>
                {isCustomizing ?<textarea
                rows={4}
                className="text-primary sm:text-base font-bold"
                value={admission.secondCharacterSection.description}
                onChange={(e) => {
                  setAdmission({...admission, secondCharacterSection: {...admission.secondCharacterSection, description: e.target.value}});
                }}
              />: <p className="w-full text-justify text-zinc-800 font-normal">
                  {admission.secondCharacterSection.description}
                </p>}
                <button className="text-white hover:shadow-xl grid place-items-center bg-primary rounded-lg justify-center">
                  <div className="flex space-x-4 text-white">
                    <span>Fill the form</span>{" "}
                    <SiGoogleforms className="mt-1 text-[yellow]" />
                  </div>
                </button>
              </div>
              <div className="flex md:w-1/2 w-full flex items-end h-full">
                <div className="bg-cover bg-center md:w-1/2 w-36 md:h-[100%] h-44 z-20">
                  <img
                    src="/images/driven.JPG"
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="bg-cover bg-center md:w-1/2 w-32 h-28 -ml-12">
                  <img
                    src="/images/driven2.JPG"
                    alt=""
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[80%] h-full">
          <div className="flex justify-center h-full items-center">
            <div className="flex md:flex-row flex-col-reverse my-16 gap-8 justify-between items-center">
              <div className="flex md:w-1/2 w-full flex items-end h-full">
                <div className="bg-cover bg-center md:w-1/2 w-36 md:h-[100%] h-44 z-20">
                  <img
                    src="/images/driven.JPG"
                    alt=""
                    className="object-contain"
                  />
                </div>
                <div className="bg-cover bg-center md:w-1/2 w-32 h-28 -ml-12">
                  <img
                    src="/images/driven2.JPG"
                    alt=""
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="md:w-1/2 w-full flex md:gap-8 gap-2 flex-col items-start ">
                <div className="flex gap-2">
                  <img                       loading="lazy"src="/icons/octicon_goal-16.svg" alt="" className="" />
                  {isCustomizing ?<input
                className="text-primary sm:text-base font-bold"
                value={admission.lastCharacterSection.title}
                onChange={(e) => {
                  setAdmission({...admission, lastCharacterSection: {...admission.lastCharacterSection, title: e.target.value}});
                }}
              />: <h2 className="text-primary sm:text-base font-bold">
                    {admission.lastCharacterSection.title}
                  </h2>}
                </div>
                {isCustomizing ?<textarea
                rows={4}
                className="text-primary sm:text-base font-bold"
                value={admission.lastCharacterSection.description}
                onChange={(e) => {
                  setAdmission({...admission, lastCharacterSection: {...admission.lastCharacterSection, description: e.target.value}});
                }}
              />: <p className="w-full text-justify text-zinc-800 font-normal">
                  {admission.lastCharacterSection.description}
                </p>}
                {isCustomizing ?<textarea rows={4}
                className="text-primary sm:text-base font-bold"
                value={admission.lastCharacterSection.description}
                onChange={(e) => {
                  setAdmission({...admission, lastCharacterSection: {...admission.lastCharacterSection, description: e.target.value}});
                }}
              />: <p className="w-full text-justify text-zinc-800 font-normal">
                  For more information or to make an appointment with our
                  Admissions Director, please contact Lucie Umulisa at{" "}
                  <Link
                    href="mailto:admissions@greenhillsacademy.rw"
                    className="text-primary underline"
                  >
                    admissions@greenhillsacademy.rw
                  </Link>{" "}
                  or{" "}
                  <Link
                    href="tel:+250787227601"
                    className="text-primary underline"
                  >
                    +250787227601
                  </Link>
                  . She will be happy to answer all of your questions and give
                  you a tour of our beautiful and expansive campus.
                </p>}
                <button className="text-white hover:shadow-xl grid place-items-center bg-primary rounded-lg justify-center">
                  <div className="flex space-x-4 text-white">
                    <span>Fill the form</span>{" "}
                    <SiGoogleforms className="mt-1 text-[yellow]" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdmissionPage;
