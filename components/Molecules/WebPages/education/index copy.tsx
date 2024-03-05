/* eslint-disable @next/next/no-img-element */
import DecoratedList from "@/components/Atoms/decoratedList";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GiCancel } from "react-icons/gi";
import { useInView } from "react-intersection-observer";
import { Education } from "@/types/webpages";
import axiosInstance from "@/lib/axios";

const EducationMainPage = ({ user }: any) => {
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
      <main className="mb-12">
        <div className="w-full h-[600px] bg-no-repeat bg-cover">
          {isCustomizing && (
            <input
              type="file"
              accept="image/*"
              onChange={(e: any) => {
                const file = e.target.files[0];
                setSectionImage(file);
              }}
              className="cursor-pointer"
            />
          )}
          <div
            className="w-full h-[600px] gap-1 flex flex-col  items-center justify-end "
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${sectionImage})`,
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
            {isCustomizing ? (
              <input
                className="text-primary capitalize text-center mt-4"
                value={titleValue}
                onChange={(e) => {
                  setTitleValue(e.target.value);
                }}
              />
            ) : (
              <h1 className="text-primary capitalize">{titleValue}</h1>
            )}
          </div>
        </div>
        <section className="flex justify-center w-full">
          <div className="grid place-items-center w-full">
            <div className="w-[80%] mt-12 grid md:grid-cols-4 grid-cols-2 gap-4">
              <Link href="/primary">
                {" "}
                <img                       loading="lazy"src="/images/ibpr.png" alt="" className="cursor-pointer" />
              </Link>
              <Link href="/middleyears">
                <img
                  src="/images/ibmid.png"
                  alt=""
                  className="cursor-pointer"
                />
              </Link>
              <Link href="/diplomaprogram">
                <img
                  src="/images/ibdip.png"
                  alt=""
                  className="cursor-pointer"
                />
              </Link>
              <Link href="/diplomaprogram">
                {" "}
                <img
                  src="/images/ibcaree.png"
                  alt=""
                  className="cursor-pointer"
                />
              </Link>
            </div>
            <div
              style={{
                backgroundImage: `url(/icons/bgwhiteyellow_mekqvs.svg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="flex justify-center w-full"
            >
              <div className="w-[80%] flex md:flex-row flex-col mt-12 justify-center md:items-center items-start ">
                <div className="flex flex-col gap-4 items-start justify-start">
                  {isCustomizing ? (
                    <input
                      className="text-primary capitalize mt-4"
                      value={titleValue1}
                      onChange={(e) => {
                        setTitleValue1(e.target.value);
                      }}
                    />
                  ) : (
                    <h1 className="text-primary font-bold">
                      {titleValue1}
                    </h1>
                  )}

                  <hr className="w-[75px] h-1.5 bg-primary mb-4" />
                  <div className="md:columns-2 columns-1 gap-12 w-full">
                    <p className="text-justify sm:text-base py-4 font-normal">
                      {isCustomizing ? (
                        <textarea
                          value={descriptionValue1.paragraph1}
                          onChange={(e) =>
                            handleDescriptionChange(
                              "paragraph1",
                              e.target.value
                            )
                          }
                          rows={6}
                          className="w-full border border-gray-300 p-2"
                        />
                      ) : (
                        <>{descriptionValue1.paragraph1}</>
                      )}
                    </p>
                    <p className="text-justify sm:text-base py-4 font-normal">
                      {isCustomizing ? (
                        <textarea
                          value={descriptionValue1.paragraph2}
                          onChange={(e) =>
                            handleDescriptionChange(
                              "paragraph2",
                              e.target.value
                            )
                          }
                          rows={6}
                          className="w-full border border-gray-300 p-2"
                        />
                      ) : (
                        <>{descriptionValue1.paragraph2}</>
                      )}
                    </p>
                    <p className="text-justify sm:text-base py-4 font-normal">
                      {isCustomizing ? (
                        <textarea
                          value={descriptionValue1.paragraph3}
                          onChange={(e) =>
                            handleDescriptionChange(
                              "paragraph3",
                              e.target.value
                            )
                          }
                          rows={6}
                          className="w-full border border-gray-300 p-2"
                        />
                      ) : (
                        <>{descriptionValue1.paragraph3}</>
                      )}
                    </p>
                    <p className="text-justify py-4 sm:text-base font-normal">
                      <span className="pb-4 font-bold">
                        {isCustomizing ? (
                          <input
                            value={descriptionValue1.paragraph4}
                            onChange={(e) =>
                              handleDescriptionChange(
                                "paragraph4",
                                e.target.value
                              )
                            }
                            className="w-full border border-gray-300 p-2"
                          />
                        ) : (
                          <>{descriptionValue1.paragraph4}</>
                        )}
                      </span>
                      <br />
                      {isCustomizing ? (
                        <textarea
                          value={descriptionValue1.paragraph5}
                          onChange={(e) =>
                            handleDescriptionChange(
                              "paragraph5",
                              e.target.value
                            )
                          }
                          rows={6}
                          className="w-full border border-gray-300 p-2"
                        />
                      ) : (
                        <>{descriptionValue1.paragraph5}</>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-full bg-green mt-28 flex justify-center "
              ref={ref}
              style={{
                backgroundImage: `url(${inView ? '/icons/lightgreen2_xytlj8.svg' : ''}`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-[80%] bg-green mt-28 mb-16 gap-12 md:flex-row flex-col flex items-center justify-center ">
                <div className="w-1/2 h-auto relative flex justify-center items-center">
                  <Image
                    src="/images/educationback.png"
                    className="md:w-[323px] w-[220px] md:h-[273px] h-[186px] z-20"
                    width={332}
                    height={322}
                    alt=""
                  />
                  <Image
                    src="/images/Mask1.png"
                    className="md:bottom-28 md:left-28 bottom-28 left-[-78px] absolute md:w-[212px] w-[150px] md:h-[277px] h-[195px] z-40"
                    width={332}
                    height={322}
                    alt=""
                  />
                  <Image
                    src="/images/Mask2.png"
                    className="md:bottom-48 md:right-16 bottom-44 right-[-34px] absolute md:w-[212px] w-[150px] md:h-[131px] h-[92px] z-40"
                    width={332}
                    height={322}
                    alt=""
                  />
                  <Image
                    src="/images/Mask3.png"
                    className="md:top-48 md:left-28 top-28 left-[-78px] absolute md:w-[212px] w-[150px] md:h-[131px] h-[92px] z-40"
                    width={332}
                    height={322}
                    alt=""
                  />
                  <Image
                    src="/images/Mask4.png"
                    className="md:top-32 md:right-16 top-12 right-[-34px] absolute md:w-[212px] w-[150px] md:h-[277px] h-[195px] z-40"
                    width={332}
                    height={322}
                    alt=""
                  />
                </div>
                <div className="md:w-1/2 w-full flex flex-col md:mt-0 mt-16 items-start justify-start">
                  {isCustomizing ? (
                    <input
                      className="text-primary capitalize mt-4"
                      value={titleValue2}
                      onChange={(e) => {
                        setTitleValue2(e.target.value);
                      }}
                    />
                  ) : (
                    <h1 className="text-primary font-bold">
                      {titleValue2}
                    </h1>
                  )}
                  <hr className="w-[75px] h-1.5 bg-primary mb-4" />

                  <p className="w-full h-auto text-justify">
                    <span className="text-zinc-800">
                      {isCustomizing ? (
                        <textarea
                          value={descriptionValue2}
                          rows={6}
                          onChange={(e) => setDescriptionValue2(e.target.value)}
                          className="w-full border border-gray-300 p-2"
                        />
                      ) : (
                        <>{descriptionValue2}</>
                      )}
                    </span>
                  </p>
                  <div className="grid gap-6 mt-4 items-start justify-start">
                    {listItems.slice(0, 5).map((detail, index) => (
                      <div key={index}>
                        {isCustomizing ? (
                          <input
                            value={detail}
                            onChange={(e) =>
                              handleListItemChange(e.target.value, index)
                            }
                            className="w-full border border-gray-300 p-2 mb-4"
                          />
                        ) : (
                          <DecoratedList color="black" key={index} details={detail} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-green mb-28 flex justify-center ">
              <div className="w-[80%] bg-green mb-28 gap-12 md:flex-row flex-col flex items-center justify-center ">
                <div className="md:w-1/2 w-full flex flex-col gap-6 items-start justify-start">
                  {listItems.slice(5).map((detail, index) => (
                    <div key={index} className="w-full">
                      {isCustomizing ? (
                        <input
                          value={detail}
                          onChange={(e) =>
                            handleListItemChange(e.target.value, index)
                          }
                          className="w-full border border-gray-300 p-2"
                        />
                      ) : (
                        <DecoratedList color="black" key={index} details={detail} />
                      )}
                    </div>
                  ))}{" "}
                </div>
                <div className="md:w-1/2 w-full h-full flex justify-center">
                  <div className="md:w-1/2 w-full bg-primary rounded-[36px]">
                    <div
                      className="md:h-full h-[432px] w-full -ml-4 -mt-2 rounded-[36px] bg-cover bg-center"
                      style={{
                        backgroundImage: `url(/images/profile.JPG)`,
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[80%] flex justify-center">
              <div className="w-[80%]">
                {isCustomizing ? (
                  <input
                    className="text-primary capitalize mt-4"
                    value={titleValue3}
                    onChange={(e) => {
                      setTitleValue3(e.target.value);
                    }}
                  />
                ) : (
                  <h1 className="text-primary font-bold">
                    {titleValue3}
                  </h1>
                )}
                <hr className="w-[75px] h-1.5 bg-primary mb-4" />
                <div className="mt-7 grid md:grid-cols-3 grid-rows-1 gap-0 border-b-[1px] border-b-[#B3B3B3]">
                  <div className="border-[1px] pb-4 border-[#B3B3B3] border-b-0 border-r-0 border-t-0 flex gap-4 flex-col items-start justify-center">
                    <div className="w-8">
                      <hr className="bg-[#B3B3B3] h-0.5" />
                    </div>
                    <h4 className="px-4 text-primary font-bold">
                      Monday
                    </h4>
                    <div className="px-4 flex justify-between w-full">
                      <div>
                        <div className="text-zinc-400">
                          7:30 AM - 3:30 PM
                        </div>
                        <div className=" text-neutral-700">
                          Classes
                        </div>
                      </div>
                      <div>
                        <div className=" text-zinc-400">
                          3:45 PM - 4:45 PM
                        </div>
                        <div className=" text-neutral-700">
                          After School Programs
                        </div>
                      </div>
                    </div>
                    <div className="px-4">
                      <div className="mt-3 text-zinc-400">
                        5:00 PM - 7:00 PM
                      </div>
                      <div className="text-neutral-700">
                        Academic Support and Enrichment Program
                      </div>
                    </div>
                  </div>
                  <div className="border-[1px] pb-4 border-[#B3B3B3] border-b-0 border-r-0 border-t-0 flex gap-4 flex-col items-start justify-center">
                    <div className="w-8">
                      <hr className="bg-[#B3B3B3] h-0.5" />
                    </div>
                    <h4 className="px-4 text-primary font-bold">
                      Tuesday
                    </h4>
                    <div className="px-4 flex justify-between w-full">
                      <div>
                        <div className="text-zinc-400">
                          7:30 AM - 3:30 PM
                        </div>
                        <div className=" text-neutral-700">
                          Classes
                        </div>
                      </div>
                      <div>
                        <div className=" text-zinc-400">
                          3:45 PM - 4:45 PM
                        </div>
                        <div className=" text-neutral-700">
                          After School Programs
                        </div>
                      </div>
                    </div>
                    <div className="px-4">
                      <div className="mt-3 text-zinc-400">
                        5:00 PM - 7:00 PM
                      </div>
                      <div className="text-neutral-700">
                        Academic Support and Enrichment Program
                      </div>
                    </div>
                  </div>
                  <div className="border-[1px] pb-4 border-[#B3B3B3] border-b-0 border-r-0 border-t-0 flex gap-4 flex-col items-start justify-center">
                    <div className="w-8">
                      <hr className="bg-[#B3B3B3] h-0.5" />
                    </div>{" "}
                    <h4 className="px-4 text-primary font-bold">
                      Wednesday
                    </h4>
                    <div className="px-4 flex justify-between w-full">
                      <div>
                        <div className="text-zinc-400">
                          7:30 AM - 3:30 PM
                        </div>
                        <div className=" text-neutral-700">
                          Classes
                        </div>
                      </div>
                      <div>
                        <div className=" text-zinc-400">
                          3:45 PM - 4:45 PM
                        </div>
                        <div className=" text-neutral-700">
                          After School Programs
                        </div>
                      </div>
                    </div>
                    <div className="px-4">
                      <div className="mt-3 text-zinc-400">
                        5:00 PM - 7:00 PM
                      </div>
                      <div className="text-neutral-700">
                        Academic Support and Enrichment Program
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-7 grid md:grid-cols-3 grid-rows-1 gap-0 border-b-[1px] border-b-[#B3B3B3]">
                  <div className="border-[1px] pb-4 border-[#B3B3B3] border-b-0 border-r-0 border-t-0 flex gap-4 flex-col items-start justify-center">
                    <div className="w-8">
                      <hr className="bg-[#B3B3B3] h-0.5" />
                    </div>{" "}
                    <h4 className="px-4 text-primary font-bold">
                      Thursday
                    </h4>
                    <div className="px-4 flex justify-between w-full">
                      <div>
                        <div className="text-zinc-400">
                          7:30 AM - 3:30 PM
                        </div>
                        <div className=" text-neutral-700">
                          Classes
                        </div>
                      </div>
                      <div>
                        <div className=" text-zinc-400">
                          3:45 PM - 4:45 PM
                        </div>
                        <div className=" text-neutral-700">
                          After School Programs
                        </div>
                      </div>
                    </div>
                    <div className="px-4">
                      <div className="mt-3 text-zinc-400">
                        5:00 PM - 7:00 PM
                      </div>
                      <div className="text-neutral-700">
                        Academic Support and Enrichment Program
                      </div>
                    </div>
                  </div>
                  <div className="border-[1px] pb-4 border-[#B3B3B3] border-b-0 border-r-0 border-t-0 flex gap-4 flex-col items-start justify-center">
                    <div className="w-8">
                      <hr className="bg-[#B3B3B3] h-0.5" />
                    </div>{" "}
                    <h4 className="px-4 text-primary font-bold">
                      Friday
                    </h4>
                    <div className="px-4 flex justify-between w-full">
                      <div>
                        <div className="text-zinc-400">
                          7:30 AM - 3:30 PM
                        </div>
                        <div className=" text-neutral-700">
                          Classes
                        </div>
                      </div>
                      <div>
                        <div className=" text-zinc-400">
                          3:45 PM - 4:45 PM
                        </div>
                        <div className=" text-neutral-700">
                          After School Programs
                        </div>
                      </div>
                    </div>
                    <div className="px-4">
                      <div className="mt-3 text-zinc-400">
                        5:00 PM - 7:00 PM
                      </div>
                      <div className="text-neutral-700">
                        Academic Support and Enrichment Program
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex justify-center my-4">
                  <p className="text-gray-600 w-[80%] text-center font-bold">
                    **The early release time on Wednesdays and Fridays allows
                    the school to deliver regular professional development and
                    engage in collaborative teacher planning.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-14 h-px border-2 border-primary" />
                </div>
              </div>
            </div>
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
