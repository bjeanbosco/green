/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { GiCancel } from "react-icons/gi";
import { MdCastForEducation } from "react-icons/md";
import { SiGoogleforms } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import axiosInstance from "@/lib/axios";
import uploadImage from "@/utils/uploadImage";
import { Admissions } from "@/types/webpages";
import ButtonBlank from "@/components/Atoms/ButtonBlank";
import Image from "next/image";
import {
  header,
  overview,
  admissionDriven,
  everyoneChallenged,
  everyoneSuccessful,
} from "@/utils/admissionData";
import { useTransform, motion, useScroll } from "framer-motion";
import { LuDownload } from "react-icons/lu";
import axios from "axios";
import useImageUploader from "@/utils/useImageUploader";
import ImageComponent from "../ImageComponent";

const AdmissionPage = ({ user }: any) => {
  const currentYear = new Date().getFullYear();
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
      const response = await axios.get("/api/admission");
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
      await axios.put(`/api/admission?slug=${slug}`, updatedContent);
      await fetchSections();
      setEditMode(false);
    } catch (error) {
      console.error("Error updating section:", error);
    }
  };

  const handleDelete = async (slug: string) => {
    try {
      await axios.delete(`/api/admission?slug=${slug}`);
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

  const cloudinaryUrl = "/docs/2023-2024 Tuition and Fee Schedule.pdf";
  const fileName = "2023-2024 Tuition and Fee Schedule.pdf";

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
      </div>
      {sections.map((section, index) => (
        <section key={index}>
          {section.slug === "join_us" && (
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
                className="w-full h-[70vh] gap-1 flex flex-col pb-4 items-center justify-end "
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${section.content.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <p className="md:w-[45%] w-[80%] text-center text-white">
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
                </p>
                <ButtonBlank
                  name="Apply now"
                  icon={<MdCastForEducation className="text-[yellow]" />}
                  action="https://greenhillsacademy.openapply.com/"
                  background="#018c79"
                  color="#fff"
                />
              </section>
            </>
          )}
          {section.slug === "overview" && (
            <section className="flex h-full justify-center">
              <div className="w-[80%] flex flex-col gap-8 py-16">
                <div className="grid md:grid-cols-2 h-full w-full sm:gap-8 md:gap-12">
                  <div className="grid w-full relative h-full">
                    <div className="md:w-[20vw] overflow-x-hidden absolute top-1/3 shadow-2xl left-1/4 z-40 p-3 bg-primary">
                      <h3 className="text-[yellow] font-bold">
                        {currentYear - section.content.startYear}+ Years
                      </h3>
                      <p className="text-white">Years of Experience</p>
                    </div>
                    <div className="w-full mt-4 grid grid-cols-2 items-center justify-center gap-4 h-full">
                      <div className="h-[300px]">
                        <Image
                          unoptimized
                          placeholder="empty"
                          blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                          width={0}
                          height={0}
                          sizes="100vw"
                          src={section.content.imageUrl[0]}
                          alt="Image"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="h-[300px]">
                        <Image
                          unoptimized
                          placeholder="empty"
                          blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                          width={0}
                          height={0}
                          sizes="100vw"
                          src={section.content.imageUrl[1]}
                          alt="Image"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="h-[300px]">
                        <Image
                          unoptimized
                          placeholder="empty"
                          blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                          width={0}
                          height={0}
                          sizes="100vw"
                          src={section.content.imageUrl[2]}
                          alt="Image"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="h-[300px]">
                        <Image
                          unoptimized
                          placeholder="empty"
                          blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                          width={0}
                          height={0}
                          sizes="100vw"
                          src={section.content.imageUrl[3]}
                          alt="Image"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-full flex flex-col justify-between items-start">
                    <div className="w-full h-full flex flex-col gap-12">
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
                    <motion.button
                      onClick={handleDownload}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        background: "#018c79",
                        color: "#fff",
                        border: "1px solid var(--color-border)",
                      }}
                      className="border rounded-lg gap-2 hover:bg-primary hover:border-[yellow] hover:text-white sm:text-xs p-2 md:px-4 md:py-2 flex items-center justify-center"
                    >
                      Tuition and Fee Schedule
                      <p>
                        <LuDownload className="text-[yellow]" />
                      </p>
                    </motion.button>
                  </div>
                </div>
              </div>
            </section>
          )}
          {section.slug === "mission_driven" && (
            <section
              className="w-full bg-primary flex justify-center text-white"
              style={{
                backgroundImage: `url(${"/icons/green_c6iapo.svg"})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
              }}
            >
              <div className="w-[80%] flex flex-col gap-8 py-16">
                <div className="w-full h-full object-cover">
                  <h1 className="text-white font-bold">
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

                <div className="w-full h-full grid gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 place-items-start">
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

                    <div className="w-full h-full flex flex-col gap-16 justify-between items-start">
                      <div className="flex flex-col gap-8">
                        <div className="w-full p-0">
                          <div className="flex gap-4 items-center">
                            <div className="md:h-12 h-6 w-6 md:w-12">
                              <Image
                                unoptimized
                                placeholder="empty"
                                blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                                width={0}
                                height={0}
                                sizes="100vw"
                                src="/icons/international_newwhite_hkvubl.svg"
                                alt="Image"
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <h2 className="text-[yellow]">
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
                      ? section.content.subDescription.map(
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
                      : section.content.subDescription.map(
                          (item: any, index: number) => (
                            <p key={index} className="text-justify pb-6">
                              {item}
                            </p>
                          )
                        )}
                      </div>
                      <div className="">
                        <ButtonBlank
                          name="Enrollment Portal"
                          icon={<SiGoogleforms className="text-[yellow]" />}
                          action="https://greenhillsacademy.openapply.com/"
                          background="#018c79"
                          color="#fff"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          {section.slug === "everyone_challenged" && (
            <section
              className="flex justify-center w-full h-[100%] items-center"
              style={{
                backgroundImage: `url(${"/icons/whiteflip_h0mlnm.svg"})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
              }}
            >
              <div className="w-[80%] grid md:grid-cols-2 h-full gap-16 py-16">
                <div className="flex h-full w-full flex-col justify-between gap-4">
                  <div className="flex gap-4 items-center">
                    <div className="md:h-12 md:w-12">
                      <Image
                        unoptimized
                        placeholder="empty"
                        blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                        width={0}
                        height={0}
                        sizes="100vw"
                        src="/icons/success_r5s8te.svg"
                        alt="Image"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h2 className="text-primary font-bold">
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
                  <div>
                    <ButtonBlank
                      name="Enrollment Portal"
                      icon={<SiGoogleforms className="text-[yellow]" />}
                      action="https://greenhillsacademy.openapply.com/"
                      background="#018c79"
                      color="#fff"
                    />
                  </div>
                </div>
              </div>
            </section>
          )}
          {section.slug === "everyone_successful" && (
            <section
              className="flex justify-center h-[100%] items-center"
              style={{
                backgroundImage: `url(${"/icons/white2_qkbyoe.svg"})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
              }}
            >
              <div className="w-[80%] flex flex-col gap-8 py-16">
                <div className="grid md:grid-cols-2 gap-16">
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
                  <div className="w-full h-full flex flex-col justify-between items-start">
                    <div className="w-full">
                      <div className="flex gap-4 mb-4 items-center">
                        <div className="md:h-12 h-6 w-6 md:w-12">
                          <Image
                            unoptimized
                            placeholder="empty"
                            blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            src="/icons/octicon_goal-16_rz4dds.svg"
                            alt="Image"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <h2 className="text-primary font-bold">
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
                    <div>
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
                    <ButtonBlank
                      name="Enrollment Portal"
                      icon={<SiGoogleforms className="text-[yellow]" />}
                      action="https://greenhillsacademy.openapply.com/"
                      background="#018c79"
                      color="#fff"
                    />
                  </div>
                </div>
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

export default AdmissionPage;
