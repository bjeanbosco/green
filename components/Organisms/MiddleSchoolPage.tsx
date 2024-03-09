import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdOutlineCastForEducation } from "react-icons/md";
import ButtonBlank from "../Atoms/ButtonBlank";
import axios from "axios";
import useImageUploader from "@/utils/useImageUploader";
import ImageComponent from "../Molecules/ImageComponent";
import { GiCancel } from "react-icons/gi";
import TextSection from "../Atoms/TextSection";
import { texts } from "@/utils/aboutData";
import DecoratedList from "../Atoms/decoratedList";

export default function MiddleSchoolPage({ user }: any) {
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
      const response = await axios.get("/api/middleSchool");
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
      await axios.put(`/api/middleSchool?slug=${slug}`, updatedContent);
      await fetchSections();
      setEditMode(false);
    } catch (error) {
      console.error("Error updating section:", error);
    }
  };

  const handleDelete = async (slug: string) => {
    try {
      await axios.delete(`/api/middleSchool?slug=${slug}`);
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
        <section key={index} className="pb-12">
          {section.slug === "middle-school" && (
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
                )}{" "}
              <section
                className="w-full h-[70vh] gap-1 flex flex-col pb-4 items-center justify-end "
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${section.content.imageUrl})`,
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
                <h3 className="text-center text-white font-normal">
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
              </section>
            </>
          )}
          {section.slug === "overview" && (
            <section
              className="flex justify-center h-full py-16 items-center"
              style={{
                backgroundImage: `url(${"/icons/whiteflip_h0mlnm.svg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-[80%] h-full flex flex-col gap-12 py-16">
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
                <div className="grid md:grid-cols-2 place-items-center sm:gap-8 md:gap-16">
                  <div className="h-full w-full">
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
                            <DecoratedList
                              key={index}
                              color={"#000"}
                              details={item}
                            />
                          )
                        )}
                    <div>
                      <ButtonBlank
                        action={`https://www.ibo.org/programmes/middle-years-programme/`}
                        name="Learn more"
                        background="#018c79"
                        border="1px solid var(--color-border)"
                        color="#fff"
                        icon={
                          <MdOutlineCastForEducation className="text-[yellow]" />
                        }
                      />
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
                      color={"primary"}
                    />
                  </div>
                </div>
              </div>
            </section>
          )}
          {section.slug === "approach-to-teaching" && (
            <section
              style={{
                backgroundImage: `url(${"/icons/lightgreen_fotidt.svg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-full bg-green flex justify-center"
            >
              <div className="w-[80%] h-full flex flex-col gap-12 py-16">
                <div className="flex gap-4 items-center mb-4">
                  <div className="md:h-12 h-6 w-6 md:w-12">
                    <Image
                      unoptimized
                      placeholder="empty"
                      blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      src="/icons/collaborations-idea_ewmkm0.svg"
                      alt="Image"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h2 className="text-primary">
                    {" "}
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
                <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-12 place-items-start place-content-start">
                  <div className="h-full w-full ">
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
                            <DecoratedList
                              key={index}
                              color={"#000"}
                              details={item}
                            />
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
          {section.slug === "assessment-and-reporting" && (
            <section
              className="w-full flex justify-center h-full py-16"
              style={{
                backgroundImage: `url(${"/icons/whiteflip_h0mlnm.svg"})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
              }}
            >
              <div className="w-[80%] h-full flex flex-col gap-12">
                <h1 className="text-primary font-bold md:text-center">
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
                        src="/icons/global-learning_yb8ziy.svg"
                        alt="Image"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h2 className="text-primary">
                      {" "}
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
                  </div>
                </div>
                <div className="w-[100%] h-full grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center place-content-center">
                  <div className="w-full h-full flex flex-col gap-8">
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
                              <DecoratedList
                                key={index}
                                color={"#000"}
                                details={item}
                              />
                            )
                          )}
                    </div>
                  </div>
                  <div className="flex flex-col justify-evenly h-full">
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
}
