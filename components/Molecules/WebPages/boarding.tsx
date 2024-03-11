import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import useImageUploader from "@/utils/useImageUploader";
import { GiCancel } from "react-icons/gi";
import ImageComponent from "../ImageComponent";
import Academics from "@/components/Atoms/Boarding/academics";
import Life from "@/components/Atoms/Boarding/life";
import Behaviour from "@/components/Atoms/Boarding/behaviour";
import Medical from "@/components/Atoms/Boarding/medical";
import Responsibility from "@/components/Atoms/Boarding/responsibility";
import Fun from "@/components/Atoms/Boarding/fun";

const BoardingPage = ({ user }: any) => {
  const [activeTab, setActiveTab] = useState("Academics");

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };
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
      const response = await axios.get("/api/boarding");
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
      await axios.put(`/api/boarding?slug=${slug}`, updatedContent);
      await fetchSections();
      setEditMode(false);
    } catch (error) {
      console.error("Error updating section:", error);
    }
  };

  const handleDelete = async (slug: string) => {
    try {
      await axios.delete(`/api/boarding?slug=${slug}`);
      await fetchSections();
    } catch (error) {
      console.error("Error deleting section:", error);
    }
  };

  const localStorageKeyPrefix = "counselling_";
  const handleSaveCopy = (section: any) => {
    localStorage.setItem(
      localStorageKeyPrefix + "copiedSection",
      JSON.stringify(section)
    );
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

  return (
    <main>
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
      </div>
      {sections.map((section: any, index: React.Key | null | undefined) => (
        <section key={index} className="w-full">
          {section.slug === "video" && (
            <>
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
            <section className="bg-white">
              <div className="md:relative md:h-[85vh] w-full overflow-hidden">
                {/* Background Video */}
                <div className="md:absolute inset-0 w-full h-full overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <video
                      autoPlay
                      muted
                      loop
                      className="object-cover w-full h-full"
                    >
                      <source
                        src={section.content.videoUrl}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
              <div className="flex justify-center w-full">
                <div className="w-[80%] h-full flex flex-col gap-8 pt-16">
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
                            <p key={index} className="text-center">
                              {item}
                            </p>
                          )
                        )}
                </div>
              </div>
            </section>
            </>
          )}
          {section.slug === "full_time" && (
            <section
              className="flex justify-center h-[100%] items-center"
              style={{
                backgroundImage: `url(${"/icons/white2_qkbyoe.svg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-[80%] h-full flex flex-col items-center gap-8 py-16">
                <h1 className="text-primary font-bold text-center">
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
                <div className="grid md:grid-cols-2 gap-12 my-4">
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
                  <div className="w-full h-full flex flex-col gap-12">
                    <div className="w-full">
                      <div className="flex gap-4 items-center">
                        <div className="md:h-12 h-6 w-6 md:w-12">
                          <Image
                            unoptimized
                            placeholder="empty"
                            blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                            src="/icons/international_new_qrcqda.svg"
                            alt="Image"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h2 className="capitalize text-primary font-bold">
                          {editMode &&
                          selectedSection &&
                          selectedSection.slug === section.slug ? (
                            <input
                              type="text"
                              value={selectedSection.content.subtitle || ""}
                              onChange={handleContentChange}
                              name="subtitle"
                            />
                          ) : (
                            section.content.subtitle
                          )}
                        </h2>
                      </div>
                    </div>
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
                            <p key={index} className="text-justify">
                              {item}
                            </p>
                          )
                        )}
                  </div>
                </div>
              </div>
            </section>
          )}
          {section.slug === "weekday" && (
            <section
              className="flex bg-green justify-center h-full w-full text-black"
              style={{
                backgroundImage: `url(${"/icons/lightgreen2_xytlj8.svg"})`,
                backgroundSize: "cover",
                backgroundPosition: "right",
              }}
            >
              <div className="w-[80%] h-full flex flex-col gap-8 py-16">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12">
                    <Image
                      unoptimized
                      placeholder="empty"
                      blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                      src="/icons/success_r5s8te.svg"
                      alt="Image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="capitalize font-bold text-primary">
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
                <div className="grid md:grid-cols-2 w-full h-full gap-12">
                  <div className="w-full h-full flex flex-col gap-12">
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
                            <p key={index} className="text-justify">
                              {item}
                            </p>
                          )
                        )}
                  </div>
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
              </div>
            </section>
          )}
          {section.slug === "short_term" && (
            <section
              className="flex w-full h-[100%] justify-center"
              style={{
                backgroundImage: `url(${"/icons/white2_qkbyoe.svg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-[80%] md:h-[100vh] flex items-center">
                <div className="w-full grid md:grid-cols-2 sm:grid-cols-1 gap-16">
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
                  <div className="w-full">
                    <div className="w-full">
                      <div className="flex gap-4 items-center">
                        <div className="md:h-12 h-6 w-6 md:w-12">
                          <Image
                            unoptimized
                            placeholder="empty"
                            blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                            src="/icons/international_new_qrcqda.svg"
                            alt="Image"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h2 className="capitalize text-primary font-bold">
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
                    </div>
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
                            <p key={index} className="text-justify">
                              {item}
                            </p>
                          )
                        )}
                  </div>
                </div>
              </div>
            </section>
          )}
          {section.slug === "head_boarding" && (
            <section
              className="flex justify-center"
              style={{
                backgroundImage: `url(${"/icons/lightgreen2_xytlj8.svg"})`,
                backgroundSize: "cover",
                backgroundPosition: "right",
              }}
            >
              <div className="w-[80%] h-full flex flex-col items-center gap-8 py-16">
                <h1 className="text-primary text-center capitalize">
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
                <div className="grid md:grid-cols-2 py-16 sm:grid-cols-1 w-full gap-12 justify-between">
                  <div className="w-full h-full">
                    <h3 className="text-primary mb-4 font-bold capitalize">
                      {editMode &&
                      selectedSection &&
                      selectedSection.slug === section.slug ? (
                        <input
                          type="text"
                          value={selectedSection.content.subtitle || ""}
                          onChange={handleContentChange}
                          name="subtitle"
                        />
                      ) : (
                        section.content.subtitle
                      )}
                    </h3>
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
                            <p key={index} className="text-justify">
                              {item}
                            </p>
                          )
                        )}
                  </div>
                  <div className="h-full w-full">
                    <img
                      src={section.content.imageUrl}
                      alt="Image"
                      className="object-cover h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </section>
          )}
          {section.slug === "footer" && (
            <section className="flex justify-center">
              <div className="w-[80%] md:my-8 text-center font-bold">
                <h4 className="sm:text-justify font-bold">
                  {editMode &&
                  selectedSection &&
                  selectedSection.slug === section.slug
                    ? section.content.description.map(
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
                    : section.content.description.map(
                        (item: any, index: number) => (
                          <p key={index} className="text-justify">
                            {item}
                          </p>
                        )
                      )}
                </h4>
              </div>
            </section>
          )}
          {/* TODO UPDATE BOARDING SECTION/  */}
          {/* <section className="flex justify-center">
            <div
              className="w-[80%] bg-primary relative z-10 h-full text-center text-white rounded-xl shadow-xl font-bold sm:overflow-x-auto"
              style={{
                backgroundImage: `url(${"/icons/green_c6iapo.svg"})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
              }}
            >
              <div className="w-full flex justify-center">
                <div className="w-[80%] flex md:justify-between md:my-8 gap-1 p-4 overflow-x-auto">
                  <button
                    className={`${
                      activeTab === "Academics"
                        ? "text-black bg-green hover:text-white hover:bg-primary hover:border hover:border-[yellow]"
                        : "text-white bg-primary border border-[yellow] hover:text-black hover:bg-green hover:shadow-xl"
                    } border rounded-lg gap-2 sm:text-xs p-2 md:px-4 md:py-2 flex items-center justify-center`}
                    onClick={() => handleTabClick("Academics")}
                  >
                    Academics
                  </button>
                  <button
                    className={`${
                      activeTab === "Life"
                        ? "text-black bg-green hover:text-white hover:bg-primary hover:border hover:border-[yellow]"
                        : "text-white bg-primary border border-[yellow] hover:text-black hover:bg-green hover:shadow-xl"
                    } border rounded-lg gap-2 sm:text-xs p-2 md:px-4 md:py-2 flex items-center justify-center`}
                    onClick={() => handleTabClick("Life")}
                  >
                    Life&nbsp;skills
                  </button>
                  <button
                    className={`${
                      activeTab === "behaviour"
                        ? "text-black bg-green hover:text-white hover:bg-primary hover:border hover:border-[yellow]"
                        : "text-white bg-primary border border-[yellow] hover:text-black hover:bg-green hover:shadow-xl"
                    } border rounded-lg gap-2 sm:text-xs p-2 md:px-4 md:py-2 flex items-center justify-center`}
                    onClick={() => handleTabClick("behaviour")}
                  >
                    Behavior
                  </button>
                  <button
                    className={`${
                      activeTab === "medical"
                        ? "text-black bg-green hover:text-white hover:bg-primary hover:border hover:border-[yellow]"
                        : "text-white bg-primary border border-[yellow] hover:text-black hover:bg-green hover:shadow-xl"
                    } border rounded-lg gap-2 sm:text-xs p-2 md:px-4 md:py-2 flex items-center justify-center`}
                    onClick={() => handleTabClick("medical")}
                  >
                    Medical,&nbsp;Health&nbsp;and&nbsp;Fitness
                  </button>
                  <button
                    className={`${
                      activeTab === "responsibility"
                        ? "text-black bg-green hover:text-white hover:bg-primary hover:border hover:border-[yellow]"
                        : "text-white bg-primary border border-[yellow] hover:text-black hover:bg-green hover:shadow-xl"
                    } border rounded-lg gap-2 sm:text-xs p-2 md:px-4 md:py-2 flex items-center justify-center`}
                    onClick={() => handleTabClick("responsibility")}
                  >
                    Responsibility&nbsp;and&nbsp;service
                  </button>
                  <button
                    className={`${
                      activeTab === "fun"
                        ? "text-black bg-green hover:text-white hover:bg-primary hover:border hover:border-[yellow]"
                        : "text-white bg-primary border border-[yellow] hover:text-black hover:bg-green hover:shadow-xl"
                    } border rounded-lg gap-2 sm:text-xs p-2 md:px-4 md:py-2 flex items-center justify-center`}
                    onClick={() => handleTabClick("fun")}
                  >
                    Fun
                  </button>
                </div>
              </div>

              {activeTab === "Academics" && (
                <div id="">
                  {section.slug === "academics" && (
                    <Academics
                      description={section.content.description[0]}
                      imageUrl={section.content.imageUrl}
                    />
                  )}
                </div>
              )}
              {activeTab === "Life" && (
                <div id="">
                  {section.slug === "Life" && (
                    <Life
                      description={section.content.description[0]}
                      imageUrl={section.content.imageUrl}
                    />
                  )}
                </div>
              )}
              {activeTab === "behaviour" && (
                <div>
                  {section.slug === "behaviour" && (
                    <Behaviour
                      description={section.content.description[0]}
                      imageUrl={section.content.imageUrl}
                    />
                  )}
                </div>
              )}
              {activeTab === "medical" && (
                <div>
                  {section.slug === "medical" && (
                    <Medical
                      description={section.content.description[0]}
                      imageUrl={section.content.imageUrl}
                    />
                  )}
                </div>
              )}
              {activeTab === "responsibility" && (
                <div>
                  {section.slug === "responsibility" && (
                    <Responsibility
                      description={section.content.description[0]}
                      imageUrl={section.content.imageUrl}
                    />
                  )}
                </div>
              )}
              {activeTab === "fun" && (
                <div>
                  {section.slug === "fun" && (
                    <Fun
                      description={section.content.description[0]}
                      imageUrl={section.content.imageUrl}
                    />
                  )}
                </div>
              )}
            </div>
          </section> */}
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
      {copySaved && (
        <p className="text-green">Copy of section saved to local storage!</p>
      )}
    </main>
  );
};

export default BoardingPage;
