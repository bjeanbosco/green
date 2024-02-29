/* eslint-disable @next/next/no-img-element */
import DecoratedList from "@/components/Atoms/decoratedList";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { BiVideo } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
import { useInView } from "react-intersection-observer";
import Slider, { Settings, ResponsiveObject } from "react-slick";
import axiosInstance from "@/lib/axios";
import { About } from "@/types/webpages";
import uploadImage from "@/utils/uploadImage";
import { headOfSchool } from "@/utils/head0fSchool";
import { gallery } from "@/utils/gallery";
import { routerAbout } from "@/utils/routerAbout";
import Image from "next/image";
import { universities } from "@/utils/universities";
import ButtonBlank from "@/components/Atoms/ButtonBlank";

const AboutPage = ({ user }: any) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000, // Adjust the slide transition speed (in milliseconds)
    autoplaySpeed: 4000, // Adjust the time between slides (in milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const url = "https://api.cloudinary.com/v1_1/drjbtprwb/image/upload";
  const [imageData, setImageData] = useState([
    "https://res.cloudinary.com/dbqwmndns/image/upload/v1700301699/GHA/4_kxmvir.jpg",
    "https://res.cloudinary.com/dbqwmndns/image/upload/v1700301751/GHA/1_hcjnfu.jpg",
    "https://res.cloudinary.com/dbqwmndns/image/upload/v1700301761/GHA/3_wb4qxk.jpg",
    "https://res.cloudinary.com/dbqwmndns/image/upload/v1700301692/GHA/2_hrxmza.jpg",
    "https://res.cloudinary.com/dbqwmndns/image/upload/v1700379745/GHA/8_f9cwce.jpg",
    "https://res.cloudinary.com/dbqwmndns/image/upload/v1700301619/GHA/9_ujknty.jpg",
  ]);

  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadImage(file).then(res => {
        setAbout({ ...about, sliderPhotos: [...about.sliderPhotos, res] })
      })
      const imageUrl = URL.createObjectURL(file);
      setImageData([...imageData, imageUrl]);
    }
  };

  const handleDeleteImage = (index: number) => {
    const updatedImageData = about.sliderPhotos.filter((_, i) => i !== index);
    setAbout({ ...about, sliderPhotos: updatedImageData });
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(currentIndex);
    }
  }, [currentIndex]);

  useEffect(() => {
    console.log("Responsive Settings:", responsiveSettings);
    console.log("Slider Settings:", sliderSettings);
  }, []);

  const responsiveSettings: ResponsiveObject[] = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  const sliderSettings: Settings = {
    // Your other settings
    responsive: responsiveSettings,
  };

  const [isCustomizing, setIsCustomizing] = useState(false);

  const toggleCustomization = () => {
    setIsCustomizing(!isCustomizing);
  };
  const [about, setAbout] = useState<About>({
    "title": "Green Hills Academy At Glimpse",
    "sliderPhotos": [
      "/images/4.JPG",
      "/images/1.JPG",
      "/images/3.JPG",
      "/images/2.JPG",
      "/images/8.JPG",
      "/images/9.JPG"
    ],
    "whoWeAre": {
      "title": "WHO WE ARE",
      "description": "Green Hills Academy is authorized by the International Baccalaureate (IB) organization to offer the Primary Years Programme for learners in Nursery 1 to Grade 5, the Middle Years Programme for learners in Grades 6 to 10 and the Diploma Programme for learners in Grades 11 and 12 . IB World School shares a common philosophy and commitment to providing a high quality, challenging, international education that prepares learners for further study in university and fulfilling lives. For further information about the IB and its programmes, visit www.ibo.org.",
      "videoUrl": "https://www.youtube.com/watch?v=wsNLaXRCxog&t",
      "photoUrl": "/images/1.JPG"
    },
    "welcomeNote": {
      "title": "WELCOME TO GREEN HILLS ACADEMY",
      "professorName": "Daniel Holliger, PHD",
      "professorPosition": "Head of School(He/Him/His)",
      "professorPhotoUrl": "/images/2.png",
      "note": "It is a great pleasure to welcome you to Green Hills Academy (GHA), the only International Baccalaureate World School and LabelFrancÉducation school in Rwanda. At GHA, learners excel academically and personally in a safe, caring and vibrant learning community. We create energizing, engaging and empowering learning experiences that foster a love for learning and prepare learners for the future in a continuously changing world. Preparing learners for the uncertainties of our future world is a challenge that we embrace at GHA by developing critical thinking skills, creativity, emotional intelligence, self-confidence, resilience and collaboration to solve real world problems.",
      "readMoreSlug": ""
    },
    "sectionsBackgroundImageSrc": "/images/12.png",
    "sections": [
      {
        "iconSrc": "icons/icon-1.png",
        "title": "Learners life",
        "viewMoreSlug": "",
        "viewMoreLabel": "View More"
      },
      {
        "iconSrc": "icons/icon-2.png",
        "title": "Leadership",
        "viewMoreSlug": "",
        "viewMoreLabel": "View More"
      },
      {
        "iconSrc": "icons/icon-3.png",
        "title": "Facilities",
        "viewMoreSlug": "",
        "viewMoreLabel": "View More"
      },
      {
        "iconSrc": "icons/icon-4.png",
        "title": "Accreditation",
        "viewMoreSlug": "",
        "viewMoreLabel": "View More"
      }
    ],
    "alumniSectionTitle": "GREEN HILLS ALUMNI",
    "operationalCountriesTitle": "World wide react",
    "operationalCountries": [
      "Rwanda",
      "US",
      "Canada",
      "Holland",
      "China",
      "Germany",
      "Kenya"
    ],
    "partnerUniversitiesTitle": "Prestigious Universities",
    "partnerUniversities": [
      "Harvard University",
      "Massachusetts Institute of Technology (MIT)",
      "Stanford University",
      "Dartmouth College",
      "Cornell University",
      "New York University (NYU)",
      "McGill University",
      "University of Rwanda",
      "African Leadership University",
      "Kaiserslautern University"
    ],
    "achievementsTitle": "Diverse Achievements",
    "achievements": [
      "Technology Innovators",
      "Media Pioneers",
      "Legal Experts",
      "Entrepreneurs",
      "Medical Professionals",
      "Creative Artists",
      "Public Service Leaders"
    ]
  })
  useEffect(() => {
    axiosInstance.get("/pages/about").then(res => {
      setAbout(res.data)
    })
  }, [])
  const saveToapi = () => {
    axiosInstance.put("/pages/about", about).then(res => {
      console.log(res.data)
    })
  }
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });
  return (
    <div>
      <div className="flex my-6 justify-between text-white">
        <div className="flex gap-2">
          {user?.permissions.map((permission: string) => permission.toLowerCase()).includes("edit".toLowerCase()) && (
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
          )}
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
      <div>
      <div className="">
        <section
          className="w-full pt-28"
          style={{
            backgroundImage: `url(${"/icons/white2_qkbyoe.svg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex h-[300px] items-end justify-center">
            <div className="text-center w-[80%] my-12">
              <div className="flex justify-center">
                <div className="w-[55px] grid place-items-center">
                  <div className="w-[18px] h-[7px] my-2 bg-primary" />
                  <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
                </div>
              </div>
              <div className="flex justify-center">
                <h1 className="text-primary capitalize">
                  Green Hills Academy At A Glimpse
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section
          className="w-full flex bg-primary sm:flex-col md:h-full items-center flex justify-center"
          style={{
            backgroundImage: `url(${"/icons/green_c6iapo.svg"})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="w-[80%] py-16 place-items-center place-content-center grid md:grid-cols-4 grid-cols-2 gap-12">
            {routerAbout.map((data, index) => (
              <Link
                href={data.path}
                key={index}
                className="w-full rounded-xl"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(${data.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="group flex items-center  h-[200px] justify-end flex-col gap-12 p-4 w-full border border-transparent hover:rounded-xl hover:bg-black hover:bg-opacity-50 hover:border-primary relative"
                  
                >
                  <h3 className="text-center text-[yellow] font-bold capitalize group-hover:opacity-50 transition-opacity">
                    {data.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section
          className="flex bg-green h-full py-8 justify-center items-center"
          style={{
            backgroundImage: `url(/icons/lightgreen3_bdlud3.svg)`,
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <div className="w-[80%] h-full flex flex-col gap-8 py-16">
            <h1 className="text-primary font-bold uppercase">Who We Are</h1>
            <div className="grid md:grid-cols-2 gap-12 items-center">
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
                    src="https://greenhillsacademy.rw:8081/images/GHA_16.jpg"
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
                    src="https://greenhillsacademy.rw:8081/images/DSC_2364.jpg"
                    alt="Image"
                  />
                  <div className="w-full h-2 bg-primary" />
                </div>
              </div>
              <div className="w-full h-full flex flex-col justify-between">
                <div className="w-full h-full">
                  <p className="pb-4 text-justify">
                    Green Hills Academy is authorized by the International
                    Baccalaureate (IB) organization to offer the Primary Years
                    Programme for learners in Nursery 1 to Grade 5, the Middle
                    Years Programme for learners in Grades 6 to 10, the Diploma
                    and Career-related Programmes for learners in Grades 11 and
                    12. IB World Schools shares a common philosophy and
                    commitment to providing a high quality, challenging,
                    international education that prepares learners for further
                    study in university and fulfilling lives. For further
                    information about the IB and its programmes, visit &nbsp;
                    <Link
                      href="www.ibo.org"
                      target="_blank"
                      className="text-primary md:text-[1.3vw] sm:text-[1.05rem]"
                    >
                      www.ibo.org
                    </Link>
                  </p>
                </div>
                <div>
                  <ButtonBlank
                    action={`https://www.youtube.com/@GHA_rwanda/videos`}
                    name="Watch Our Videos"
                    background="#018c79"
                    border="1px solid var(--color-border)"
                    color="#fff"
                    icon={<BiVideo className="text-[yellow]" />}
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
                    src="https://greenhillsacademy.rw:8081/images/GHA_128_zeqxfi.jpg"
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
                    src="https://greenhillsacademy.rw:8081/images/DSC_2364.jpg"
                    alt="Image"
                  />
                  <div className="w-full h-2 bg-primary" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="head"
          className="flex h-full justify-center items-center"
          style={{
            backgroundImage: `url(${"/icons/white2_qkbyoe.svg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-[80%] h-full flex flex-col gap-8 py-16">
            <h1 className="uppercase text-center font-bold text-primary">
              {headOfSchool.slogan}
            </h1>
            <div className="w-full h-full md:grid md:place-items-center overflow-hidden">
              <div className="w-full h-full h-full md:grid md:grid-cols-2 gap-16">
              <div className="sm:hidden">
                <div className="w-full h-full flex items-center relative">
                  <div className="w-1/4 my-4 h-full sm:h-[20vh] left-0 top-0 absolute bg-primary" />
                  <div className="w-full h-[80%] left-[31px] absolute">
                    <div className="bgImageContainerHead">
                      <div
                        className={"inner"}
                      >
                        <img
                          className=""
                          src= {headOfSchool.imageUrl}
                          alt="Image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                <div className="md:hidden flex justify-start mb-12">
              <div className="h-[300px]">
                <div className="bgImageContainerHead">
                  <div className={"inner"}>
                    <img className="" src={headOfSchool.imageUrl} alt="Image" />
                  </div>
                </div>
              </div>
            </div>
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="w-full h-full flex flex-col gap-12">
                    <div className="grid gap-4">
                      <h3 className="font-bold text-primary">
                        {headOfSchool.name}
                      </h3>
                      <p className="font-bold">{headOfSchool.title}</p>
                    </div>
                        <p className="text-justify md:pr-2">
                          {headOfSchool.description}
                        </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          id="alumni"
          className="w-full h-full flex items-center justify-center"
        >
          <div className="h-[80%] w-[80%] py-16 gap-8 flex-col">
            <h1 className="text-primary uppercase text-center">
              Green Hills Academy Alumni
            </h1>
            <h2 className="font-bold text-primary pt-16">Worldwide Reach</h2>
            <div className=" flex justify-center items-center">
              <img
                className="h-full w-full object-contain"
                src="https://greenhillsacademy.rw:8081/images/MAP_wbqpki.png"
                alt="Image"
              />
            </div>
          </div>
        </div>

          <div
            id="alumni_registration_form"
            className="flex justify-center overflow-hidden py-16"
          >
            <div
              className="w-[80%] bg-primary py-16 text-white flex flex-col justify-center p-8 gap-12 rounded-[36px] shadow-xl"
              style={{
                backgroundImage: `url(${"/icons/green_c6iapo.svg"})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
              }}
            >
              <div>
                <div className="flex pt-4 justify-center">
                  <div className="w-[55px] grid place-items-center">
                    <div className="w-[18px] h-[7px] my-2 bg-[yellow]" />
                    <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
                  </div>
                </div>
                <h2 className="font-bold text-[yellow] text-center">
                  Let&apos;s Strengthen Our Community: Calling Our Alumni!
                </h2>
              </div>
              <p className="text-center">
                We aspire to further engage and
                strengthen the Green Hills Academy community. We recognize that
                you, our Alumni play a crucial role in this mission and we
                invite you to reconnect and participate in the ongoing journey
                of broadening and strengthening our community.
              </p>
              <div className="w-full flex justify-center">
                <ButtonBlank
                  action={`https://forms.gle/xGyjBLuaxBpm2WE37`}
                  name="Alumni Registration Form"
                  background="#fff"
                  border="1px solid var(--color-border)"
                  color="#018c79"
                />
              </div>
              <p className="text-center">
                We encourage our esteemed alumni to complete the Alumni
                Registration Form, to foster continued connection, updates, and
                participation in the Green Hills Academy community.
              </p>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
};

export default AboutPage;
