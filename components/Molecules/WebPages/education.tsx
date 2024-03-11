/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GiCancel } from "react-icons/gi";
import { learnerProfile } from "@/utils/learnerProfile";

import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion";
import TextSection from "@/components/Atoms/TextSection";
import CustomModal from "@/components/Atoms/CustomModal";
import axios from "axios";
import useImageUploader from "@/utils/useImageUploader";
import DecoratedList from "@/components/Atoms/decoratedList";
import GreenDecoratedList from "@/components/Atoms/greenDecoratedList";
import ImageComponent from "../ImageComponent";

const EducationMainPage = ({ user }: any) => {
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
      const response = await axios.get("/api/education");
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
      await axios.put(`/api/education?slug=${slug}`, updatedContent);
      await fetchSections();
      setEditMode(false);
    } catch (error) {
      console.error("Error updating section:", error);
    }
  };

  const handleDelete = async (slug: string) => {
    try {
      await axios.delete(`/api/education?slug=${slug}`);
      await fetchSections();
    } catch (error) {
      console.error("Error deleting section:", error);
    }
  };

  const localStorageKeyPrefix = "education_";
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
          {section.slug === "academics" && (
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
              <section
                className="w-full h-[70vh] gap-1 flex flex-col  items-center justify-end "
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${section.content.imageUrl})`,
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
                <h1 className="text-white capitalize">
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
              </section>
            </>
          )}
          {section.slug === "overview" && (
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
                    <h1 className="text-primary font-bold">
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
                    <div className="md:columns-2 columns-1 gap-12">
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
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          {section.slug === "learner-profile" && (
            <section
              className="flex bg-primary justify-center"
              style={{
                backgroundImage: `url(${"/icons/green_c6iapo.svg"})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
              }}
            >
              <div className="w-[80%] flex flex-col gap-8 py-16 text-white">
                <h1 className="font-bold text-[yellow]">
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
                <div className="gap-16 grid md:grid-cols-2 place-items-center items-center text-white">
                  <div className="w-full flex flex-col gap-12">
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
                    <div className="">
                      {editMode &&
                      selectedSection &&
                      selectedSection.slug === section.slug
                        ? section.content.listItems.map(
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
                        : section.content.listItems.map(
                            (item: any, index: number) => (
                              <GreenDecoratedList
                                key={index}
                                color={"#fff"}
                                details={item}
                              />
                            )
                          )}
                    </div>
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
                      color={"green"}
                    />
                  </div>
                </div>
              </div>
            </section>
          )}
          {section.slug === "school-hours" && (
            <section className="flex justify-center bg-white">
              <div className="w-[80%] h-full flex flex-col gap-4 py-16">
                <h1 className="text-primary font-bold">
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
                <img src={section.content.imageUrl} alt="Image" className="" />
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
      {copySaved && (
        <p className="text-green">Copy of section saved to local storage!</p>
      )}
    </main>
  );
};

export default EducationMainPage;
