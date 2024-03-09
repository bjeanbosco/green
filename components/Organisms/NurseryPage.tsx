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

export default function NurseryPage({ user }: any) {
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
      const response = await axios.get("/api/nurserySchool");
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
      await axios.put(`/api/nurserySchool?slug=${slug}`, updatedContent);
      await fetchSections();
      setEditMode(false);
    } catch (error) {
      console.error("Error updating section:", error);
    }
  };

  const handleDelete = async (slug: string) => {
    try {
      await axios.delete(`/api/nurserySchool?slug=${slug}`);
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
        <section className="pb-12">
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
                )}
              <section
                className="w-full h-[70vh] gap-1 flex flex-col pb-4 items-center justify-end "
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(
            ${section.content.imageUrl})`,
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
                <h3 className="text-center text-white">
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
              className="flex justify-center md:h-[100%] items-center"
              style={{
                backgroundImage: `url(${"/icons/whiteflip_h0mlnm.svg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-[80%] h-full py-16 flex flex-col gap-12">
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
                  <div className="w-full h-full">
                    <div className="w-full h-full ">
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
                              <DecoratedList key={index} details={item} />
                            )
                          )}
                      <div>
                        <ButtonBlank
                          action={`https://www.ibo.org/programmes/primary-years-programme/`}
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
                      special={true}
                      images={section.content.imageUrl}
                      color={"primary"}
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
      {copySaved && <p>Copy of section saved to local storage!</p>}
    </main>
  );
}
