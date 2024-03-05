/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { BiCalendar, BiRename } from "react-icons/bi";
import { MdAddCircleOutline, MdMoreTime } from "react-icons/md";
import Modal from "react-modal";
import { SlLocationPin } from "react-icons/sl";
import { BsCalendarWeek } from "react-icons/bs";
import { GiAlarmClock } from "react-icons/gi";
import Link from "next/link";
import axios from "axios";

const Event = ({ user }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [start_time, setStart_time] = useState("");
  const [end_time, setEnd_time] = useState("");
  const [location, setLocation] = useState("");

  const [description, setDescription] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: File[] = Array.from(e.target.files || []);
    setSelectedFiles(files);
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleCoverChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleSaveEvent = () => {
    axios
      .post("/api/event", {
        title,
        date,
        start_time,
        end_time,
        location,
        description,
        selectedFile,
        selectedFiles,
      })
      .then((res) => {
        console.log(res.data);

        alert("it is working correctly");
      })
      .catch((err) => {
        console.error(err);
        alert("An error occured while submitting");
      });
  };
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

  //get data from database
  const [EventData, setEvent] = useState([]);

  useEffect(() => {
    axios.get("/api/event").then((res) => setEvent(res.data));
  }, []);

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
            Add Event
          </button>
        )}
      </div>
      <div>
        <div className="grid p-4 grid-cols-2 w-full gap-12 my-8">
          {EventData.map((event:any, index) => (
            <div
              key={index}
              className="w-full bg-white p-6 border rounded-xl shadow-lg"
            >
              <div>
                <div
                  className="w-full h-[200px] flex items-center"
                  style={{
                    backgroundImage: `url(${event.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
              <div>
                <div className="mt-4 flex-col justify-start items-start gap-1 inline-flex">
                  <p className="text-sm">Alumni day</p>
                  <p className="font-bold ">{event.title}</p>
                </div>
                <div className="text-sm mt-2 text-gray-600 flex flex-row justify-start gap-1 items-center">
                  <BiCalendar />
                  <DateComponent date={event.date} />
                </div>
                <p className=" mt-2 text-base font-normal text-justify">
                  {event.description}
                </p>
                {user?.permissions
                  .map((permission: string) => permission.toLowerCase())
                  .includes("edit".toLowerCase()) && (
                  <div className="flex justify-end">
                    <div className="grid h-12 grid-cols-2 divide-x items-center">
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
          <div className="flex w-full gap-4 my-8">
            <div className="w-1/2">
              <div className="">
                <p className="mb-3 text-lg">Event Title</p>
                <div className="relative mb-6">
                  <p className="absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none">
                    <BiRename />
                  </p>
                  <input
                    type="text"
                    className="border-b border-gray-400 rounded-lg w-full pl-12 p-3"
                    placeholder="name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <p className="mb-3 text-lg">Event Date</p>
                  <div className="relative mb-6">
                    <p className="absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none">
                      <BsCalendarWeek />
                    </p>
                    <input
                      type="date"
                      className="border-b border-gray-400 rounded-lg w-full pl-12 p-3"
                      placeholder="name@flowbite.com"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <p className="mb-3 text-lg">Start Time</p>
                  <div className="relative mb-6">
                    <p className="absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none">
                      <MdMoreTime />
                    </p>
                    <input
                      type="time"
                      className="border-b border-gray-400 rounded-lg w-full pl-12 p-3"
                      value={start_time}
                      onChange={(e) => setStart_time(e.target.value)}
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <p className="mb-3 text-lg">End Time</p>
                  <div className="relative mb-6">
                    <p className="absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none">
                      <GiAlarmClock />
                    </p>
                    <input
                      type="time"
                      className="border-b border-gray-400 rounded-lg w-full pl-12 p-3"
                      value={end_time}
                      onChange={(e) => setEnd_time(e.target.value)}
                    />
                  </div>
                </div>{" "}
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <p className="mb-3 text-lg">Location</p>
                  <div className="relative mb-6">
                    <p className="absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none">
                      <SlLocationPin />
                    </p>
                    <input
                      type="text"
                      className="border-b border-gray-400 rounded-lg w-full pl-12 p-3"
                      placeholder="kigali, Rwanda"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div>
                <p className="mb-3 text-lg">Description</p>
                <textarea
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  placeholder="Enter your description here..."
                  rows={10} // Set the number of visible rows
                  className="border border-gray-400 py-2 px-4 rounded focus:outline-none focus:border-primary w-full"
                />
              </div>
              <div className="mt-8">
                <p className="mb-3 text-lg">Cover Photo</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleCoverChange}
                  className="border border-gray-400 py-2 px-4 rounded focus:outline-none focus:border-primary"
                />
                {selectedFile && (
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    alt="Selected"
                    className="mt-4 h-20"
                  />
                )}
              </div>
              <div className="mt-8">
                <p className="mb-3 text-lg">Select Pictures</p>
                <input
                  type="file"
                  accept="image/*" // Allow only image files
                  multiple // Allow multiple files to be selected
                  onChange={handleFileChange}
                  className="border border-gray-400 py-2 px-4 rounded focus:outline-none focus:border-primary"
                />
              </div>
              <div className="flex gap-2 flex-wrap my-2">
                {selectedFiles.map((item, index) => (
                  <img
                    src={URL.createObjectURL(item)}
                    alt={`index ${index}`}
                    key={index}
                    className="h-12 w-12"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-8 my-8">
            <button
              className="px-4 py-2 bg-[#4A6FBB] w-[120px] h-[50px] rounded-[9px] shadow text-white font-bold"
              onClick={handleSaveEvent}
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

export default Event;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    color: "#000",
    maxWidth: "75vw", // Set 75% of the viewport width
    width: "100%", // Ensure the modal takes up the full width within 75vw
  },
};
