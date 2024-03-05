/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiCalendar, BiRename } from "react-icons/bi";
import { MdAddCircleOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import Modal from "react-modal";

const News = ({ user }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [privacy, setPrivacy] = useState("public");

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handelSaveNews = () => {
    axios
      .post("/api/new", {
        title,
        selectedFile,
        description,
        privacy,
      })
      .then(function (response) {
        console.log(response.data);
        alert("Form data submitted successfully!");
      })
      .catch(function (error) {
        console.error(error);
        alert("An error occurred while submitting the form.");
      });
  };
  const [data, setNews] = useState([]);
  useEffect(() => {
    axios.get("/api/new").then((res) => setNews(res.data));
  }, []);

  // Convert the string to a Date object
  const DateComponent = (props: { date: string | number | Date }) => {
    const date = new Date(props.date);

    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const localizedDateString = date.toLocaleString("en-US", options);
    console.log(localizedDateString);

    return <p className="text-sm">{localizedDateString}</p>;
};

  return (
    <div>
      <div className="flex justify-end gap-8 items-center mt-8">
        {user?.permissions
          .map((permission: string) => permission.toLowerCase())
          .includes("edit".toLowerCase()) && (
          <button
            onClick={openModal}
            className="flex gap-2 items-center justify-center h-[50px] bg-[#4A6FBB] text-white text-center rounded-[6px]"
          >
            <MdAddCircleOutline className="text-2xl" />
            Add News
          </button>
        )}
      </div>
      <div>
        <div className="grid p-4 grid-cols-2 w-full gap-12 my-8">
          {data.map((item:any) => {
            return (
              <div className="w-full gap-8 flex pb-2">
                <div
                  className="w-1/2"
                  style={{
                    backgroundImage: `url(https://greenhillsacademy.rw:8081/images/1_hcjnfu.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="w-1/2">
                  <p className="font-bold">{item.title}</p>
                  <div className="mt-2 flex flex-row justify-start gap-1 items-center">
                    <BiCalendar />
                    <DateComponent date={item.createdAt} />
                  </div>
                  <p className="mt-2 text-base font-normal text-justify">
                    {item.description}
                  </p>
                  {user?.permissions
                    .map((permission: string) => permission.toLowerCase())
                    .includes("edit".toLowerCase()) && (
                    <div className="flex justify-end">
                      <div className="grid h-12 p-2 grid-cols-2 divide-x items-center">
                        <Link href={""} className="flex justify-center">
                          {" "}
                          <img
                            loading="lazy"
                            src="/icons/update_ijqjnj.svg"
                            alt=""
                            className=""
                          />
                        </Link>
                        <Link href={""} className="flex justify-center">
                          <img
                            loading="lazy"
                            src="/icons/delete_tvo46a.svg"
                            alt=""
                            className=""
                          />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
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
            <p className="mb-3">News Title</p>
            <div className="relative mb-6">
              <p className="absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none">
                <BiRename />
              </p>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border-b border-gray-400 rounded-lg w-full pl-12 p-3"
                placeholder="name"
              />
            </div>
          </div>
          <div className="">
            <p className="mb-3">Select Picture:</p>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="border border-gray-400 py-2 px-4 rounded focus:outline-none focus:border-primary"
            />
            {selectedFile && (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Selected"
                className="mt-4 h-28 w-auto"
              />
            )}
          </div>
          <div className="mt-4">
            <p className="mb-3">Description:</p>
            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeholder="Enter your description here..."
              rows={8}
              className="border border-gray-400 py-2 px-4 rounded focus:outline-none focus:border-primary w-full"
            />
          </div>

          <div className="">
            <p className="mb-3">Post Privacy:</p>
            <select
              value={privacy}
              onChange={(e) => {
                setPrivacy(e.target.value);
              }}
              className="border border-gray-400 py-2 px-4 rounded focus:outline-none focus:border-primary"
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="friends">Friends Only</option>
            </select>
          </div>

          <div className="flex justify-center gap-8 my-8">
            <button
              className="px-4 py-2 bg-[#4A6FBB] w-[120px] h-[50px] rounded-[9px] shadow text-white font-bold"
              onClick={handelSaveNews}
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
    </div>
  );
};

export default News;

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
