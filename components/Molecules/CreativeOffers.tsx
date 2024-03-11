import React, { useEffect, useState } from "react";
import Image from "next/image";
import { nursaryArray, primaryArray, middleArray } from "../../utils/aboutData";
import TextSection from "../Atoms/TextSection";
import { GiCancel } from "react-icons/gi";
import axios from "axios";
import useImageUploader from "@/utils/useImageUploader";
import ImageComponent from "./ImageComponent";

const Creative_offers = ({ user }: any) => {
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
      const response = await axios.get("/api/creativeOffer");
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
      await axios.put(`/api/creativeOffer?slug=${slug}`, updatedContent);
      await fetchSections();
      setEditMode(false);
    } catch (error) {
      console.error("Error updating section:", error);
    }
  };

  const handleDelete = async (slug: string) => {
    try {
      await axios.delete(`/api/creativeOffer?slug=${slug}`);
      await fetchSections();
    } catch (error) {
      console.error("Error deleting section:", error);
    }
  };

  const localStorageKeyPrefix = "creativeOffer_";
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
      {sections.map((section: any, index: React.Key | null | undefined) => (
        <section key={index} className="">
          {section.slug === "nursery" && (
            <section
              className="w-full flex justify-center"
              style={{
                backgroundImage: `url(${"/icons/bgwhite2_lpw73r.svg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-[80%] flex flex-col gap-8 py-16">
                <h1 className="font-bold text-primary">
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
                <h2 className="text-primary capitalize">
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
                <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-12 place-items-start">
                  <div>
                    {editMode &&
                    selectedSection &&
                    selectedSection.slug === section.slug ? (
                      section.content.listItems.map(
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
                      <TextSection
                        description={section.content.listItems}
                        color="#000"
                      />
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
          {section.slug === "primary" && (
            <section
              className="w-full flex bg-primary justify-center"
              style={{
                backgroundImage: `url(${"/icons/green_c6iapo.svg"}`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="w-[80%] flex flex-col gap-8 py-16">
                <h2 className="text-[yellow] capitalize">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-start">
                  <div>
                    {editMode &&
                    selectedSection &&
                    selectedSection.slug === section.slug ? (
                      section.content.listItems.map(
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
                      <TextSection
                        description={section.content.listItems}
                        color="#fff"
                      />
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
                      color={"[yellow]"}
                    />
                  </div>
                </div>
              </div>
            </section>
          )}
          {section.slug === "middle" && (
            <section
              className="w-full flex justify-center"
              style={{
                backgroundImage: `url(${"/icons/bgwhite2_lpw73r.svg"}`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-[80%] flex flex-col gap-8 py-16">
                <h2 className="text-primary capitalize">
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
                <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-12 place-items-start">
                  <div>
                    {editMode &&
                    selectedSection &&
                    selectedSection.slug === section.slug ? (
                      section.content.listItems.map(
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
                      <TextSection
                        description={section.content.listItems}
                        color="#000"
                      />
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
                        <p key={index} className="text-center font-bold">
                          {item}
                        </p>
                      )
                    )}
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

export default Creative_offers;
