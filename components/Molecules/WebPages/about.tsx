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
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { routerAbout } from "@/utils/routerAbout";
import Image from "next/image";
import { universities } from "@/utils/universities";
import ButtonBlank from "@/components/Atoms/ButtonBlank";
import useImageUploader from "@/utils/useImageUploader";
import axios from "axios";
import ImageComponent from "../ImageComponent";
import { UrlObject } from "url";

const AboutPage = ({ user }: any) => {
  const [sections, setSections] = useState<any[]>([]);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [selectedSection, setSelectedSection] = useState<any | null>(null);
  const [copySaved, setCopySaved] = useState<boolean>(false);
  const [editedDescriptions, setEditedDescriptions] = useState<string[]>([]);
  const [isCustomizing, setIsCustomizing] = useState(false);

  const { uploadedUrls, handleFileChange, handleSubmit } = useImageUploader();

  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async () => {
    try {
      const response = await axios.get("/api/aboutUs");
      setSections(response.data);
    } catch (error) {
      console.error("Error fetching sections:", error);
    }
  };

  const handleSelectSection = (section: any) => {
    setSelectedSection(section);
    if (section && section.content && section.content.description) {
      setEditedDescriptions(section.content.description);
    }
    setEditMode(true);
  };

  const handleContentChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (!selectedSection) return;

    const { name } = e.target;

    // If it's a file input
    if (e.target.type === "file") {
      const file = (e.target as HTMLInputElement)?.files?.[0]; // Optional chaining here
      if (file) {
        const updatedSection = { ...selectedSection };
        updatedSection.content[name] = file; // Store the file object directly
        setSelectedSection(updatedSection);
      }
    } else {
      const { value } = e.target;
      const updatedSection = { ...selectedSection };
      updatedSection.content[name] = value;
      setSelectedSection(updatedSection);
    }
  };

  const handleUpdate = async (slug: string) => {
    if (!selectedSection || !selectedSection.content) {
      console.error("Error: Selected section or its content is null");
      return;
    }

    const { title } = selectedSection.content;
    const description = editedDescriptions;

    try {
      await handleSubmit();

      const updatedContent: {
        title: string;
        description: string | string[];
        subtitle?: string;
        imageUrl?: string | string[];
      } = {
        title,
        description,
      };
      if (selectedSection.content.subtitle) {
        updatedContent.subtitle = selectedSection.content.subtitle;
      }

      if (
        uploadedUrls !== null &&
        uploadedUrls !== undefined &&
        uploadedUrls.length > 0
      ) {
        updatedContent.imageUrl = uploadedUrls;
      }

      selectedSection.content = description;
      await axios.put(`/api/aboutUs?slug=${slug}`, updatedContent);
      await fetchSections();
      setEditMode(false);
    } catch (error) {
      console.error("Error updating section:", error);
    }
  };

  const handleDelete = async (slug: string) => {
    try {
      await axios.delete(`/api/aboutUs?slug=${slug}`);
      await fetchSections();
    } catch (error) {
      console.error("Error deleting section:", error);
    }
  };

  const handleSaveCopy = (section: any) => {
    localStorage.setItem("copiedSection", JSON.stringify(section));
    setCopySaved(true);
  };
  const handleCancel = (section: any) => {
    setSelectedSection(section);
    setEditMode(false);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newValue = e.target.value;
    setEditedDescriptions((prevDescriptions) => {
      const updatedDescriptions = [...prevDescriptions];
      updatedDescriptions[index] = newValue;
      return updatedDescriptions;
    });
  };
  const toggleCustomization = () => {
    setIsCustomizing(!isCustomizing);
  };
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

  return (
    <main>
      <section className="flex my-6 justify-between text-white">
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
            </button>
            {isCustomizing ? (
              <GiCancel
                onClick={toggleCustomization}
                className="text-[red] cursor-pointer"
              />
            ) : null}
          </div>
        )}
      </section>
      {sections.map((section, index) => (
        <section key={index}>
          {section.slug === "header-text" && (
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
                      {editMode &&
                      selectedSection &&
                      selectedSection.slug === section.slug ? (
                        <input
                          type="text"
                          value={selectedSection.content.title || ""}
                          onChange={handleContentChange}
                          name="title"
                        />
                      ) : (
                        section.content.title
                      )}
                    </h1>
                  </div>
                </div>
              </div>
            </section>
          )}
          {section.slug === "router-about" && (
            <section
              className="w-full flex bg-primary sm:flex-col md:h-full items-center flex justify-center"
              style={{
                backgroundImage: `url(${"/icons/green_c6iapo.svg"})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
              }}
            >
              <div className="w-[80%] py-16 place-items-center place-content-center grid md:grid-cols-4 grid-cols-2 gap-12">
                {section.content.other.map(
                  (
                    data: {
                      path: string | UrlObject;
                      imageUrl: any;
                      title:
                        | string
                        | number
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | React.ReactPortal
                        | React.PromiseLikeOfReactNode
                        | null
                        | undefined;
                    },
                    index: React.Key | null | undefined
                  ) => (
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
                      <div className="group flex items-center  h-[200px] justify-end flex-col gap-12 p-4 w-full border border-transparent hover:rounded-xl hover:bg-black hover:bg-opacity-50 hover:border-primary relative">
                        <h3 className="text-center text-[yellow] font-bold capitalize group-hover:opacity-50 transition-opacity">
                          {data.title}
                        </h3>
                      </div>
                    </Link>
                  )
                )}
              </div>
            </section>
          )}
          {section.slug === "who-we-are" && (
            <section
              className="flex bg-green h-full py-8 justify-center items-center"
              style={{
                backgroundImage: `url(/icons/lightgreen3_bdlud3.svg)`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
              }}
            >
              <div className="w-[80%] h-full flex flex-col gap-8 py-16">
                <h1 className="text-primary font-bold uppercase">
                  {editMode &&
                  selectedSection &&
                  selectedSection.slug === section.slug ? (
                    <input
                      type="text"
                      value={selectedSection.content.title || ""}
                      onChange={handleContentChange}
                      name="title"
                    />
                  ) : (
                    section.content.title
                  )}
                </h1>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="flex flex-col gap-2">
                    {editMode &&
                      selectedSection &&
                      selectedSection.slug === section.slug && (
                        <input
                          type="file"
                          onChange={handleFileChange}
                          multiple
                          name="bg"
                        />
                      )}
                    <ImageComponent
                      images={section.content.imageUrl}
                      color={"primary"}
                    />
                  </div>
                  <div className="w-full h-full flex flex-col justify-between">
                    <div className="w-full h-full">
                      {editMode &&
                      selectedSection &&
                      selectedSection.slug === section.slug
                        ? section.content.description.map(
                            (item: any, index: number) => (
                              <input
                                key={index}
                                type="text"
                                value={editedDescriptions[index]}
                                onChange={(e) =>
                                  handleDescriptionChange(e, index)
                                }
                                className="w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:border-primary"
                              />
                            )
                          )
                        : section.content.description.map(
                            (item: any, index: number) => (
                              <p key={index} className="text-justify pb-6">
                                {item}
                              </p>
                            )
                          )}
                      <Link
                        href={section.content.links[0].url}
                        target="_blank"
                        className="text-primary md:text-[1.3vw] sm:text-[1.05rem]"
                      >
                        {section.content.links[0].title}
                      </Link>
                    </div>
                    <div>
                      <ButtonBlank
                        action={section.content.links[1].url}
                        name={section.content.links[1].title}
                        background="#018c79"
                        border="1px solid var(--color-border)"
                        color="#fff"
                        icon={<BiVideo className="text-[yellow]" />}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          {section.slug === "head-of-school" && (
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
                  {editMode &&
                  selectedSection &&
                  selectedSection.slug === section.slug ? (
                    <input
                      type="text"
                      value={selectedSection.content.title || ""}
                      onChange={handleContentChange}
                      name="title"
                    />
                  ) : (
                    section.content.title
                  )}
                </h1>
                <div className="w-full h-full md:grid md:place-items-center overflow-hidden">
                  <div className="w-full h-full h-full md:grid md:grid-cols-2 gap-16">
                    <div className="flex justify-start mb-12">
                      <div className="flex flex-col gap-2">
                        {editMode &&
                          selectedSection &&
                          selectedSection.slug === section.slug && (
                            <input
                              type="file"
                              onChange={handleFileChange}
                              multiple
                              name="bg"
                            />
                          )}
                        <ImageComponent
                          images={section.content.imageUrl}
                          color={"primary"}
                        />
                      </div>
                    </div>
                    <div className="w-full h-full flex flex-col justify-between">
                      <div className="w-full h-full flex flex-col gap-12">
                        <div className="grid gap-4">
                          <h3 className="font-bold text-primary">
                            {editMode &&
                            selectedSection &&
                            selectedSection.slug === section.slug ? (
                              <textarea
                                value={selectedSection.content.subtitle || ""}
                                onChange={handleContentChange}
                                name="subtitle"
                                className=" w-full text-black"
                              />
                            ) : (
                              section.content.subtitle
                            )}
                          </h3>
                          <p className="font-bold">
                            {editMode &&
                            selectedSection &&
                            selectedSection.slug === section.slug ? (
                              <textarea
                                value={selectedSection.content.slogan || ""}
                                onChange={handleContentChange}
                                name="slogan"
                                className=" w-full text-black"
                              />
                            ) : (
                              section.content.slogan
                            )}
                          </p>
                        </div>
                        {editMode &&
                        selectedSection &&
                        selectedSection.slug === section.slug ? (
                          section.content.description.map(
                            (item: any, index: number) => (
                              <input
                                key={index}
                                type="text"
                                value={editedDescriptions[index]}
                                onChange={(e) =>
                                  handleDescriptionChange(e, index)
                                }
                                className="w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:border-primary"
                              />
                            )
                          )
                        ) : section.content.description.map(
                          (item: any, index: number) => (
                            <p key={index} className="text-justify pb-6">
                              {item}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          {section.slug === "gha-alumni" && (
            <section
              id="alumni"
              className="w-full h-full flex items-center justify-center"
            >
              <div className="h-[80%] w-[80%] py-16 gap-8 flex-col">
                <h1 className="text-primary uppercase text-center">
                  {editMode &&
                  selectedSection &&
                  selectedSection.slug === section.slug ? (
                    <input
                      type="text"
                      value={selectedSection.content.title || ""}
                      onChange={handleContentChange}
                      name="title"
                    />
                  ) : (
                    section.content.title
                  )}
                </h1>
                <h2 className="font-bold text-primary pt-16">
                  {editMode &&
                  selectedSection &&
                  selectedSection.slug === section.slug ? (
                    <textarea
                      value={selectedSection.content.subtitle || ""}
                      onChange={handleContentChange}
                      name="subtitle"
                      className=" w-full text-black"
                    />
                  ) : (
                    section.content.subtitle
                  )}
                </h2>
                <div className="flex flex-col gap-2">
                  {editMode &&
                    selectedSection &&
                    selectedSection.slug === section.slug && (
                      <input
                        type="file"
                        onChange={handleFileChange}
                        multiple
                        name="bg"
                      />
                    )}
                  <ImageComponent
                    images={section.content.imageUrl}
                    color={"primary"}
                  />
                </div>
              </div>
            </section>
          )}
          {section.slug === "universities" && (
            <section
              className="overflow-x-hidden w-[100%] h-[100%] items-center flex justify-center bg-green text-white rounded-lg font-bold"
              style={{
                backgroundImage: `url(${"/icons/lightgreen_fotidt.svg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-[80%] h-full flex flex-col gap-8 py-16">
                <h2 className="font-bold text-primary">
                  {editMode &&
                  selectedSection &&
                  selectedSection.slug === section.slug ? (
                    <input
                      type="text"
                      value={selectedSection.content.title || ""}
                      onChange={handleContentChange}
                      name="title"
                    />
                  ) : (
                    section.content.title
                  )}
                </h2>
                <Slider
                  dotsClass="slick-dots line-indicator"
                  ref={sliderRef}
                  slidesToShow={3}
                  slidesToScroll={3}
                  infinite={true}
                  autoplay
                  lazyLoad="ondemand"
                  autoplaySpeed={4000}
                  speed={2000}
                  customPaging={(i) => (
                    <div
                      style={{
                        position: "absolute",
                        width: "100%",
                        top: "-10px",
                        opacity: 0,
                      }}
                    >
                      {i}
                    </div>
                  )}
                  {...sliderSettings}
                >
                  {section.content &&
                    section.content.description &&
                    chunkArray(section.content.description, 10).map(
                      (chunk, rowIndex) => (
                        <div key={rowIndex} className="flex gap-8 px-1 h-full">
                          {chunk.map((item, colIndex) => (
                            <div
                              key={colIndex}
                              className={`py-4 px-4 text-[#f8f008] ${
                                colIndex % 2 === 0
                                  ? "bg-primary bg-opacity-50"
                                  : "bg-primary"
                              }`}
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      )
                    )}
                </Slider>
                <div
                  className="div"
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    padding: "0 10px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: 10,
                        // borderRadius: 7,
                        boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
                        cursor: "pointer",
                      }}
                      className="buttons rounded-full"
                      onClick={() => sliderRef.current?.slickPrev()}
                    >
                      <IoIosArrowBack />
                    </div>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // borderRadius: 7,
                        boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
                        cursor: "pointer",
                      }}
                      className="buttons rounded-full"
                      onClick={() => sliderRef.current?.slickNext()}
                    >
                      <IoIosArrowForward />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          {section.slug === "alumni_registration_form" && (
            <section
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
                    {editMode &&
                    selectedSection &&
                    selectedSection.slug === section.slug ? (
                      <input
                        type="text"
                        value={selectedSection.content.title || ""}
                        onChange={handleContentChange}
                        name="title"
                      />
                    ) : (
                      section.content.title
                    )}
                  </h2>
                </div>
                {editMode &&
                selectedSection &&
                selectedSection.slug === section.slug ? (
                  section.content.description.map(
                    (item: any, index: number) => (
                      <input
                        key={index}
                        type="text"
                        value={editedDescriptions[index]}
                        onChange={(e) => handleDescriptionChange(e, index)}
                        className="w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:border-primary"
                      />
                    )
                  )
                ) : (
                  <p className="text-center">
                    {section.content.description[0]}
                  </p>
                )}
                <div className="w-full flex justify-center">
                  <ButtonBlank
                    action={section.content.links[0].url}
                    name={section.content.links[0].title}
                    background="#fff"
                    border="1px solid var(--color-border)"
                    color="#018c79"
                  />
                </div>
                <p className="text-center">{section.content.description[1]}</p>
              </div>
            </section>
          )}
          <div className="flex w-full justify-end">
            {isCustomizing ? (
              <div className="flex gap-4 py-2 items-center">
                {editMode &&
                selectedSection &&
                selectedSection.slug === section.slug ? null : (
                  <>
                    <img
                      onClick={() => handleSelectSection(section)}
                      src="/icons/update_ijqjnj.svg"
                      alt=""
                      className="text-primary cursor-pointer transition duration-300 ease-in-out hover:scale-110"
                    />
                    <img
                      onClick={() => handleDelete(section.slug)}
                      src="/icons/delete_tvo46a.svg"
                      alt=""
                      className="text-red cursor-pointer transition duration-300 ease-in-out hover:scale-110"
                    />
                  </>
                )}
                {editMode &&
                  selectedSection &&
                  selectedSection.slug === section.slug && (
                    <>
                      <button
                        onClick={() => handleCancel(section)}
                        className={`bg-blue text-white text-center rounded-[6px] cursor-pointer transition duration-300 ease-in-out hover:scale-110 p-2`}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleSaveCopy(section)}
                        className={`bg-[#B3B3B3] text-white text-center rounded-[6px] cursor-pointer transition duration-300 ease-in-out hover:scale-110 p-2`}
                      >
                        Save Copy
                      </button>
                      <button
                        onClick={() => handleUpdate(selectedSection.slug)}
                        className="bg-primary text-white rounded-[6px] cursor-pointer transition duration-300 ease-in-out hover:scale-110 p-2"
                      >
                        Publish
                      </button>
                    </>
                  )}
              </div>
            ) : null}
          </div>
        </section>
      ))}
      {copySaved && <p>Copy of section saved to local storage!</p>}
    </main>
  );
};

export default AboutPage;

const chunkArray = (array: any[], size: number) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};
// Chunk the list items into groups of 20
const chunkedItems = chunkArray(universities, 10);
