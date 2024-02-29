/* eslint-disable react-hooks/exhaustive-deps */
import NewsAndEvents from "../newsAndEvents";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { GiCancel } from "react-icons/gi";
import { ReasonToJoin } from "@/utils/reasons";
import { useInView } from "react-intersection-observer";
import Stats from "../statsCard";
import axiosInstance from "@/lib/axios";
import { missionData } from "@/utils/missionData";
import { Landing } from "@/types/webpages";
import Button from "@/components/Atoms/Button";
import { schoolSection } from "@/utils/schoolSection";
import GreenDecoratedList from "@/components/Atoms/greenDecoratedList";
import SocialMedia from "../SocialMedia";

const LandingPage = ({ user }: any) => {
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [landing, setLanding] = useState<Landing>({
    mission: {
      text: "Green Hills Academy Nurtures A Community Of Caring, Inquisitive And Principled Learners Whose Pursue Excellence And Contribute To An Equitable World.",
      imageUrl: "https://cloudinary.com/addad",
    },
    sections: [
      {
        title: "Nursery School",
        buttonLabel: "Know more",
        imageUrl: "https://cloudinary.com/addad",
      },
      {
        title: "Primary School",
        buttonLabel: "Know more",
        imageUrl: "https://cloudinary.com/addad",
      },
      {
        title: "Middle School",
        buttonLabel: "Know more",
        imageUrl: "https://cloudinary.com/addad",
      },
      {
        title: "High School",
        buttonLabel: "Know more",
        imageUrl: "https://cloudinary.com/addad",
      },
    ],
    coreValues: ["Integrity", "Intellectual", "Curiosity"],
    valuesImage: "string",
    uniquenessTitle: "string",
    uniqueness: [
      {
        title: "Internationally Accredited ",
        content:
          "We are the only IB world school, Cognia accredited, Round square school, and Label France education in Rwanda ",
        imageSrc: "/images/ch3.jpg",
      },
      {
        title: "Student Leadership ",
        content:
          "Strong student leadership through our school wide assemblies, active student council, and perfect body.",
        imageSrc: "/images/ch2.png",
      },
      {
        title: "Our Arts",
        content:
          "We have a rich arts program with:African Dance, Crafts,  Percussion Music, Kinyarwada for Beginners,School Choir",
        imageSrc: "/images/ch1.png",
      },
      {
        title: "Our Language",
        content:
          "We offer English,French, Kinyarwanda, German, and Mandarin languages",
        imageSrc: "/images/studentimage.jpg",
      },
      {
        title: "Our Sports Teams",
        content:
          "Table Tennis, Basketball, Badminton,Aerobics, Football, Traditional Dance, Karate, Volleyball or Swimming",
        imageSrc: "/images/studentimage1.jpg",
      },
      {
        title: "Learners Life",
        content:
          "Our rich after school life offers various activities and clubs that allow students to explore interests and develop talents",
        imageSrc: "/images/studentimage2.jpg",
      },
    ],
    numbers: {
      learners: 2050,
      nationalities: 60,
      courses: 80,
      educators: 180,
    },
    footer: {
      label1: "CONNECT WITH GREENHILLS",
      label2: "#Greenhillsacademy",
      label3: "Let's stay in touch",
    },
  });
  const toggleCustomization = () => {
    setIsCustomizing(!isCustomizing);
  };

  const saveToapi = () => {
    axiosInstance
      .put("/pages/landing", landing)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setIsCustomizing(false);
  };

  useEffect(() => {
    axiosInstance
      .get("/pages/landing")
      .then((res) => {
        setLanding(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });
  return (
    <div>
      <div className="flex my-6 justify-between text-white">
        {user?.permissions
          .map((permission: string) => permission.toLowerCase())
          .includes("edit".toLowerCase()) && (
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
            </button>{" "}
            {isCustomizing ? (
              <GiCancel
                onClick={toggleCustomization}
                className="text-[red] cursor-pointer"
              />
            ) : null}
          </div>
        )}

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
      <div className="w-full">
        {/* <Header /> */}
        <div className="md:h-[100vh] w-full overflow-hidden">
          {/* Background Video */}
          <div className="relative w-full h-full">
            <video autoPlay muted loop className="object-cover w-full h-full">
              <source
                src={`https://greenhillsacademy.rw:8081/videos/videos/home_page.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        {/* end Header  */}
        {/* <SchoolCards /> */}
        <div className="flex justify-center">
          <div className="w-[80%] flex flex-col gap-8 py-16">
            <div className="cards">
              {schoolSection.map((card, index) => (
                <div className="card" key={index}>
                  <div
                    className="image"
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <div className="text flex flex-col gap-4">
                      <p className="font-bold text-white">{card.title}</p>
                      <Button
                        action={card.link}
                        name="Know More →"
                        background="#018c79"
                        border="1px solid var(--color-border)"
                        color="#fff"
                      />
                    </div>
                    {/* <motion.div style={{ scale: imageScale }}> */}
                    <img
                      src={card.imageUrl}
                      alt="image"
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: "8px",
                      }}
                    />
                    {/* </motion.div> */}
                  </div>
                  <div className="overlay"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* end School card  */}
        {/* <SchoolMission /> */}
        <div className="w-full flex justify-center h-full pb-12">
          <div className="grid md:grid-cols-2 w-[80%] gap-8 h-full">
            {missionData.map((project, i) => {
              return (
                <div className="w-full h-full flex flex-col" key={i}>
                  <div className="h-[400px] w-full">
                    <div className={"imageContainer"}>
                      <div className={"inner"}>
                        <img src={project.imageUrl} alt="image" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center -mt-20 z-10 flex-grow">
                    <div className="w-[95%] bg-primary p-8 rounded-2xl h-full">
                      <h2 className="text-[yellow] text-center">
                        {project.title}
                      </h2>
                      {Array.isArray(project.description) ? (
                        <>
                          {project.description.map((item, index) => (
                            <GreenDecoratedList
                              key={index}
                              color="white"
                              details={item}
                            />
                          ))}
                        </>
                      ) : (
                        <p className={`text-white`}>{project.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* end of school mission  */}
        {/* <ReasonsToJoin /> */}
        <div className="flex bg-green justify-center bg-black md:h-[100%] items-center" style={{
      backgroundImage: `url(${"/icons/lightgreen2_xytlj8.svg"
      }`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="w-[80%] flex flex-col gap-8 py-16">
        <div className="flex justify-center">
          <div className="w-[55px] grid place-items-center">
            <div className="w-[18px] h-[7px] my-2 bg-primary" />
            <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
          </div>
        </div>
        <h1 className="text-center py-6 text-primary font-semibold uppercase">
          Eight reasons to join GHA
        </h1>
        <div className="grid grid-cols-4">
        {ReasonToJoin.map((card: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.PromiseLikeOfReactNode | null | undefined; content: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; imageSrc: string | undefined; }, index: React.Key | null | undefined) => (
          <div
            className=""
            key={index}
          >
            <div
              className="image"
              style={{
                height: "100%",
                width: "100%",
              }}
            >

              <div className="text flex flex-col gap-4">
                  <div className="border border-white px-2 py-14 rounded-lg">
                    <p className="font-bold capitalize text-[yellow] text-center mb-2">
                      {card.title}
                    </p>
                    <p className="text-sm text-center text-white">
                      {card.content}
                    </p>
                  </div>
              </div>
              <img
                src={card.imageSrc}
                alt="image"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
        {/* end of reason to join  */}
        {/* <StatsSection /> */}
        <div
          style={{
            backgroundImage: `url(${"/icons/bgwhite2_lpw73r.svg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="">
            <div className="w-full py-12 gap-4 grid">
              <div className="flex justify-center">
                <div className="w-[55px] grid place-items-center">
                  <div className="w-[18px] h-[7px] my-2 bg-primary" />
                  <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
                </div>
              </div>
              <h1 className="text-center text-primary font-bold">
                CONNECT WITH US
              </h1>
              <p className="text-primary text-center font-semibold">
                @GHA_rwanda
              </p>
              <div className="flex justify-center">
                <div className="w-2/3">
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
