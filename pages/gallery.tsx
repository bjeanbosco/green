/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { MdAddCircleOutline } from "react-icons/md";
import Modal from "react-modal";
import { BsChevronRight, BsChevronUp } from "react-icons/bs";
import Dashboard from "@/components/dashboard";
import { decodeToken } from "@/lib/jwt";
import User from "@/types/user";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [privacy, setPrivacy] = useState("public");
  const [category, setCategory] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: File[] = Array.from(e.target.files || []);
    setSelectedFiles(files);
  };
  const handleRemoveFile = (index: number) => {
    const newSelectedFiles = [...selectedFiles];
    newSelectedFiles.splice(index, 1);
    setSelectedFiles(newSelectedFiles);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [activeIndex, setActiveIndex] = useState(0);

  const handleAccordionClick = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const expandData = [
    {
      title: "Rwanda Culture Day",
      content: [
        "/images/admin1.png",
        "/images/class.png",
        "/images/culture.png",
        "/images/director.png",
      ],
    },
    {
      title: "Section 2",
      content: [
        "/images/admin1.png",
        "/images/class.png",
        "/images/culture.png",
        "/images/director.png",
      ],
    },
  ];

  const [user, setUser] = useState<User>();

  useEffect(() => {
    const token = localStorage.getItem("user_session");
    if (token) {
      const decodedUser = decodeToken(token);
      setUser(decodedUser);
    }
  }, []);

  return (
    <Dashboard>
      <h3 className="font-bold">Posts</h3>
      <p className="">Welcome Back, {user?.name || "Guest"} !</p>
      <div className="flex justify-end gap-8 items-center mt-8">
        {user?.permissions.includes("write") && (
          <button
            onClick={openModal}
            className="flex gap-2 items-center justify-center h-[50px] bg-[#4A6FBB] text-white text-center rounded-[6px]"
          >
            <MdAddCircleOutline className="text-2xl" />
            Upload
          </button>
        )}
      </div>
      <div className="flex justify-center my-4 bg-white">
        <div className="w-[80%] p-4 border rounded-xl">
          {expandData.map((item, index) => (
            <div key={index} className="my-4">
              <div
                className={`flex items-center justify-between p-4 ${
                  activeIndex === index
                    ? "bg-primary text-white"
                    : " bg-[#B3B3B3]/25"
                } cursor-pointer`}
                onClick={() => handleAccordionClick(index)}
              >
                <h2 className="text-lg font-medium">{item.title}</h2>
                {activeIndex === index ? (
                  <BsChevronUp className="w-6 h-6 text-white" />
                ) : (
                  <BsChevronRight className="w-6 h-6" />
                )}
              </div>
              {activeIndex === index && (
                <div className="p-4 bg-white bg-opacity-50">
                  <div className="grid grid-cols-4 gap-4">
                    {item.content.map((imageSrc, imageIndex) => (
                      <div className="flex" key={imageIndex}>
                        <img
                          src={imageSrc}
                          alt={`Image ${imageIndex}`}
                          className="w-full h-full"
                        />
                        {user?.permissions.includes("write") && (
                          <div
                            className="cursor-pointer text-[red] rounded-full"
                            onClick={() => handleRemoveFile(index)}
                          >
                            <CiCircleRemove />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Rate Us Modal"
        style={customStyles}
      >
        <div className="p-4 z-50">
          <h3 className="font-bold text-[#4A6FBB]">Create New Event</h3>
          <hr className="my-4" />
          <div className="">
            <p className="mb-3 text-lg">Category:</p>
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="border border-gray-400 py-2 px-4 rounded w-full focus:outline-none focus:border-primary"
            >
              <option value="">select category</option>
              <option value="Rwanda Culture Day">Rwanda Culture Day</option>
              <option value="Section 1">Section 1</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="mt-8">
            <p className="mb-3 text-lg">Select Pictures</p>
            <div className={`border border-gray-400 rounded`}>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
              />
              <div
                className={`flex gap-2 flex-wrap my-2 ${
                  selectedFiles.length > 0 ? "" : "h-[200px]"
                }`}
              >
                {selectedFiles.map((item, index) => (
                  <div key={index} className="flex">
                    <img
                      src={URL.createObjectURL(item)}
                      alt={`index ${index}`}
                      className="h-20 w-20"
                    />
                    <div
                      className="cursor-pointer text-[red] rounded-full"
                      onClick={() => handleRemoveFile(index)}
                    >
                      <CiCircleRemove />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="">
            <p className="mb-3 text-lg">Post Privacy:</p>
            <select
              value={privacy}
              onChange={(e) => {
                setPrivacy(e.target.value);
              }}
              className="border border-gray-400 py-2 px-4 rounded focus:outline-none focus:border-primary"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>

          <div className="flex justify-center gap-8 my-8">
            <button
              className="px-4 py-2 bg-[#4A6FBB] w-[120px] h-[50px] rounded-[9px] shadow text-white font-bold"
              onClick={closeModal}
            >
              Save
            </button>
            <button
              className="px-4 py-2 bg-white w-[120px] h-[50px] rounded-[9px] shadow font-bold"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </Dashboard>
  );
};

export default Gallery;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    color: "#000",
    maxWidth: "50vw", // Set 75% of the viewport width
    width: "100%", // Ensure the modal takes up the full width within 75vw
  },
};
