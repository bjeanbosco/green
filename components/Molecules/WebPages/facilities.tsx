import Image from "next/image";
import React, { useEffect, useState } from "react";
import { facilities } from "@/utils/aboutData";
import { GiCancel } from "react-icons/gi";
import axios from "axios";
import useImageUploader from "@/utils/useImageUploader";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const FacilitiesPage = ({ user }: any) => {
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
      const response = await axios.get("/api/facilities");
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
      await axios.put(`/api/facilities?slug=${slug}`, updatedContent);
      await fetchSections();
      setEditMode(false);
    } catch (error) {
      console.error("Error updating section:", error);
    }
  };

  const handleDelete = async (slug: string) => {
    try {
      await axios.delete(`/api/facilities?slug=${slug}`);
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
          {section.slug === "facilities" && (
            <section
              className="w-full h-[70vh] gap-1 flex flex-col  items-center justify-end "
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(https://greenhillsacademy.rw:8081/images/infrastructures/GHA_44_sws6pa.jpg)`,
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
              <h1 className="text-primary capitalize">Facilities</h1>
            </section>
          )}
          {section.slug === "campus_development" && (
            <section className="">
              <h2 className="text-primary uppercase font-bold">
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
                      <p key={index} className="text-justify pb-6">
                        {item}
                      </p>
                    )
                  )}
            </section>
          )}
          {section.slug === "world_facilities" && (
            <section className="">
              <h2 className="text-primary uppercase font-bold">
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
                      <p key={index} className="text-justify pb-6">
                        {item}
                      </p>
                    )
                  )}
            </section>
          )}
          {section.slug === "boarding_school" && (
            <section className="">
              <h2 className="text-primary uppercase font-bold">
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
                      <p key={index} className="text-justify pb-6">
                        {item}
                      </p>
                    )
                  )}
            </section>
          )}
          {section.slug === "facility_image" && (
            <section className="w-full h-full cardGrid gap-12 my-12">
              {section.content.imageUrl.map(
                (
                  detail: string | StaticImport,
                  index: React.Key | null | undefined
                ) => (
                  <div key={index} className="h-full">
                    <Image
                      unoptimized
                      placeholder="empty"
                      blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      src={detail}
                      alt={`Image ${index}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )
              )}
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

export default FacilitiesPage;
