/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GiCancel } from "react-icons/gi";
import { useInView } from "react-intersection-observer";
import { Education } from "@/types/webpages";
import axiosInstance from "@/lib/axios";
import { learnerProfile } from "@/utils/learnerProfile";


import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion";
import TextSection from "@/components/Atoms/TextSection";
import CustomModal from "@/components/Atoms/CustomModal";

const EducationMainPage = ({ user }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [education, setEducation] = useState<Education>({
    "bannerImageUrl": "images/1.png",
    "bannerTitle": "ACADEMICS",
    "overviewTitle": "Overview",
    "overviewDescription": [
      {
        "title": "",
        "description": "At Green Hills Academy, we offer an international education from Nursery through Grade 12. We develop our learners into principled, lifelong learners and internationally-minded global citizens who contribute to creating a more peaceful and sustainable world. We also instill in our learners the ability to think critically and independently, act empathically, ethically and courageously, and manage their own learning and lives."
      },
      {
        "title": "",
        "description": "Our educational program is academically challenging, inquiry-based and learner-centered. In addition to providing an excellent academic program, we help our learners develop essential 21st century skills such as research, critical thinking, communication, collaboration and social skills. We connect learning to real life and help learners develop problem solving and self management skills."
      },
      {
        "title": "",
        "description": "Our International Baccalaureate Primary Years, Middle Years and Diploma Programmes offer challenging and engaging learning experiences. Upon graduation from Green Hills Academy with an International Baccalaureate Diploma, our learners gain admission to and excel in excellent universities around the world."
      },
      {
        "title": "English and French/English Programs and Other Languages",
        "description": "We offer an English program and a French/English dual language immersion program from Nursery through Grade 8. In the English program all subjects are taught in English, except other languages. In the French/English (50/50) program, we teach core subjects in English and French. In our French/English program, learners develop proficiency in English and French. We also offer German, Mandarin and Kinyarwanda. We are committed to helping our learners develop language proficiency in more than one language."
      }
    ],
    "leanerProfile": {
      "title": "Learner Profile",
      "description": "Informed by the IB mission to develop inquiring, knowledgeable and caring young people who help to create a better and more peaceful world through intercultural understanding and respect, the IB programmes foster a distinctive set of attributes. These qualities—embodied in the IB learner profile—prepare IB learners to make exceptional contributions at school and in their communities outside of the classroom.",
      "learningItems": [
        "An inquirer who actively enjoys learning.",
        "Knowledgeable and able to develop understanding across a broad and balanced range of disciplines.",
        "An inquirer who actively enjoys learning.",
        "Knowledgeable and able to develop understanding across a broad and balanced range of disciplines.",
        "An inquirer who actively enjoys learning.",
        "Knowledgeable and able to develop understanding across a broad and balanced range of disciplines.",
        "An inquirer who actively enjoys learning.",
        "Knowledgeable and able to develop understanding across a broad and balanced range of disciplines."
      ],
      "photosUrl": [
        "images/3.png",
        "images/4.png"
      ]
    },
    "timeTable": {
      "title": "School Hours",
      "schedules": {
        "monday": [
          {
            "schedule": "Classes",
            "startTime": "7:30 AM",
            "endTime": "3:30 PM"
          },
          {
            "schedule": "After School Programs",
            "startTime": "3:45 PM",
            "endTime": "4:45 PM"
          },
          {
            "schedule": "Academic Support and Enrichment Program",
            "startTime": "5:00 PM",
            "endTime": "7:00 PM"
          }
        ],
        "tuesday": [
          {
            "schedule": "Classes",
            "startTime": "7:30 AM",
            "endTime": "3:30 PM"
          },
          {
            "schedule": "After School Programs",
            "startTime": "3:45 PM",
            "endTime": "4:45 PM"
          },
          {
            "schedule": "Academic Support and Enrichment Program",
            "startTime": "5:00 PM",
            "endTime": "7:00 PM"
          }
        ],
        "wednesday": [
          {
            "schedule": "Classes",
            "startTime": "7:30 AM",
            "endTime": "3:30 PM"
          },
          {
            "schedule": "After School Programs",
            "startTime": "3:45 PM",
            "endTime": "4:45 PM"
          },
          {
            "schedule": "Academic Support and Enrichment Program",
            "startTime": "5:00 PM",
            "endTime": "7:00 PM"
          }
        ],
        "thursday": [
          {
            "schedule": "Classes",
            "startTime": "7:30 AM",
            "endTime": "3:30 PM"
          },
          {
            "schedule": "After School Programs",
            "startTime": "3:45 PM",
            "endTime": "4:45 PM"
          },
          {
            "schedule": "Academic Support and Enrichment Program",
            "startTime": "5:00 PM",
            "endTime": "7:00 PM"
          }
        ],
        "friday": [
          {
            "schedule": "Classes",
            "startTime": "7:30 AM",
            "endTime": "3:30 PM"
          },
          {
            "schedule": "After School Programs",
            "startTime": "3:45 PM",
            "endTime": "4:45 PM"
          },
          {
            "schedule": "Academic Support and Enrichment Program",
            "startTime": "5:00 PM",
            "endTime": "7:00 PM"
          }
        ]
      }
    }
  });

  const toggleCustomization = () => {
    setIsCustomizing(!isCustomizing);
  };
  const localStorageKeyPrefix = "education_";

  const [titleValue, setTitleValue] = useState("");
  const [titleValue1, setTitleValue1] = useState("");
  const [titleValue2, setTitleValue2] = useState("");
  const [titleValue3, setTitleValue3] = useState("");
  const [sectionImage, setSectionImage] = useState("");
  const [descriptionValue1, setDescriptionValue1] = useState({
    paragraph1: "",
    paragraph2: "",
    paragraph3: "",
    paragraph4: "",
    paragraph5: "",
  });
  const [descriptionValue2, setDescriptionValue2] = useState("");
  const [listItems, setListItems] = useState<string[]>([]);

  const loadData = (data : Education) => {
    setSectionImage(
      data.bannerImageUrl
    );
    setTitleValue(
      data.bannerTitle
    );
    setTitleValue1(
      data.overviewTitle
    );
    setTitleValue2(
      data.leanerProfile.title
    );
    setTitleValue3(
      data.timeTable.title
    );
    setDescriptionValue2(
      data.leanerProfile.description);

    setListItems(data.leanerProfile.learningItems);

    const savedDescriptionValues = {
      paragraph1: data.overviewDescription[0].description,
      paragraph2: data.overviewDescription[1].description,
      paragraph3: data.overviewDescription[2].description,
      paragraph4: data.overviewDescription[3].description,
      paragraph5: data.overviewDescription[4].description
    };
    setDescriptionValue1(savedDescriptionValues);
  };

  useEffect(() => {
    axiosInstance
      .get("/webpages/education")
      .then((res) => {
        setEducation(res.data.data);
        loadData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const saveToapi = () => {
    const data = { ...education };
    data.bannerImageUrl = sectionImage;
    data.bannerTitle = titleValue;
    data.overviewTitle = titleValue1;
    data.leanerProfile.title = titleValue2;
    data.timeTable.title = titleValue3;
    data.leanerProfile.description = descriptionValue2;
    data.leanerProfile.learningItems = listItems;
    data.overviewDescription = [
      { title: "", description: descriptionValue1.paragraph1 },
      { title: "", description: descriptionValue1.paragraph2 },
      { title: "", description: descriptionValue1.paragraph3 },
      { title: "", description: descriptionValue1.paragraph4 },
      { title: "", description: descriptionValue1.paragraph5 },
    ];
    setEducation(data);

    axiosInstance.post("/webpages/education", data).then((res) => {
      console.log(res.data);
    });
    setIsCustomizing(false);
  };

  const handleDescriptionChange = (key: string, value: string) => {
    const updatedDescriptionValues = { ...descriptionValue1, [key]: value };
    setDescriptionValue1(updatedDescriptionValues);

    // Save the updated description to localStorage
    localStorage.setItem(localStorageKeyPrefix + key, value);
  };
  const handleListItemChange = (value: string, index: number) => {
    const updatedListItems = [...listItems];
    updatedListItems[index] = value;
    setListItems(updatedListItems);
  };
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });
  return (
    <div>
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
      <main className="">
      <section
        className="w-full h-[70vh] gap-1 flex flex-col  items-center justify-end "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${"https://greenhillsacademy.rw:8081/images/GHA_39_2_yqphyx.jpg"})`,
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
        <h1 className="text-white capitalize">ACADEMICS</h1>
      </section>
      <section
        style={{
          backgroundImage: `url(${"/icons/white2_qkbyoe.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex justify-center py-16"
      >
        <div className="w-[80%]">
          <div className="flex md:flex-row flex-col justify-center md:items-center items-start ">
            <div className="flex flex-col gap-8 h-full w-full">
              <h1 className="text-primary font-bold">Overview</h1>
              <div className="md:columns-2 columns-1 gap-12">
                <p className="text-justify pb-6">
                  At Green Hills Academy, we offer an international education
                  from Nursery through Grade 12. We develop our learners into
                  principled, lifelong learners and internationally-minded
                  global citizens who contribute to creating a more peaceful and
                  sustainable world. We also instill in our learners the ability
                  to think critically and independently, act empathically,
                  ethically and courageously, and manage their own learning and
                  lives.
                </p>
                <p className="text-justify pb-6">
                  Our educational program is academically challenging,
                  inquiry-based and learner-centered. In addition to providing
                  an excellent academic program, we help our learners develop
                  essential 21st century skills such as research, critical
                  thinking, communication, collaboration and social skills. We
                  connect learning to real life and help learners develop
                  problem-solving and self-management skills.
                </p>
                <p className="text-justify pb-6">
                  Our International Baccalaureate Primary Years, Middle Years,
                  Diploma Programmes and Career-related Studies Programme offer
                  challenging and engaging learning experiences. Upon graduation
                  from Green Hills Academy with an International Baccalaureate
                  Diploma, our learners gain admission to and excel in excellent
                  universities around the world.
                </p>
                <p className="text-justify text-primary pb-6 font-bold">
                  English and French/English Programs and Other Languages
                </p>
                <p className="text-justify pb-6">
                  We offer an English program and a French/English dual language
                  immersion program from Nursery through Grade 8. In the English
                  program all subjects are taught in English, except other
                  languages. In the French/English (50/50) program, we teach
                  core subjects in English and French. In our French/English
                  program, learners develop proficiency in English and French.
                  We also offer German, Mandarin and Kinyarwanda. We are
                  committed to helping our learners develop language proficiency
                  in more than one language.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="flex bg-primary justify-center"
        style={{
          backgroundImage: `url(${"/icons/green_c6iapo.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="w-[80%] flex flex-col gap-8 py-16 text-white">
          <h1 className="font-bold text-[yellow]">{learnerProfile.title}</h1>
          <div className="gap-16 grid md:grid-cols-2 place-items-center items-center text-white">
            <div className="w-full flex flex-col gap-12">
              <p className="text-justify pb-6">{learnerProfile.description}</p>
              <div className="">
                <TextSection
                  description={learnerProfile.listItems}
                  color="#fff"
                />
              </div>
            </div>
            <div className="flex flex-col justify-evenly h-full">
              <div className="w-full h-full justify-start items-start gap-[22px] inline-flex">
                <div className="w-1/2 h-full flex-col justify-start items-end gap-[38px] inline-flex">
                  <div className="w-full h-2 bg-green" />
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
                    src="https://greenhillsacademy.rw:8081/images/GHA_111_1_gneyaz.jpg"
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
                    src="https://greenhillsacademy.rw:8081/images/GHA_103_fxbx9w.jpg"
                    alt="Image"
                  />
                  <div className="w-full h-2 bg-green" />
                </div>
              </div>
              <div className="w-full h-full justify-start items-start gap-[22px] inline-flex">
                <div className="w-1/2 h-full flex-col justify-start items-end gap-[38px] inline-flex">
                  <div className="w-full h-2 bg-green" />
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
                    src="https://greenhillsacademy.rw:8081/images/GHA_66_znyyge.jpg"
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
                    src="https://greenhillsacademy.rw:8081/images/GHA_22_1_hqs6aa.jpg"
                    alt="Image"
                  />
                  <div className="w-full h-2 bg-green" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center bg-white">
        <div className="w-[80%] h-full flex flex-col gap-4 py-16">
          <h1 className="text-primary font-bold">School Hours</h1>

          <img
            src="https://greenhillsacademy.rw:8081/images/School_Hours3-01.png"
            alt="Image"
            className=""
          />
        </div>
      </section>
        <section className="w-full flex mt-8 justify-center items-center">
          <div className="w-[80%] gap-6 flex flex-col justify-center items-center">
            <p className="w-full text-center font-bold">
              GHA Documents : A Guide For Parents
            </p>
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                background: "#018c79",
                border: "1px solid var(--color-border)",
                color: "#fff",
              }}
              className="border rounded-lg gap-2 hover:bg-primary hover:border-[yellow] hover:text-white sm:text-xs p-2 md:px-4 md:py-2 flex items-center justify-center"
            >
              Download
              <p>
                <LuDownload className="text-[yellow]" />
              </p>
            </motion.button>
            <CustomModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />

          </div>
        </section>
    </main>
    </div>
  );
};

export default EducationMainPage;

const listItemsData = [
  "An inquirer who actively enjoys learning.",
  "Knowledgeable and able to develop understanding across a broad and balanced range of disciplines.",
  "An inquirer who actively enjoys learning.",
  "Knowledgeable and able to develop understanding across a broad and balanced range of disciplines.",
  "An inquirer who actively enjoys learning.",
  "collin",
  "Knowledgeable and able to develop understanding across a broad and balanced range of disciplines.",
  "An inquirer who actively enjoys learning.    ",
  "Knowledgeable and able to develop understanding across a broad and balanced range of disciplines.",
  "Knowledgeable and able to develop understanding across a broad and balanced range of disciplines.",
  "Knowledgeable and able to develop understanding across a broad and balanced range of disciplines.",
];
