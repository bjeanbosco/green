/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { BiRename } from "react-icons/bi";
import { MdAddCircleOutline } from "react-icons/md";
import Modal from "react-modal";
import { BsCalendarWeek, BsCashCoin, BsFillBuildingFill } from "react-icons/bs";
import { GiLevelEndFlag } from "react-icons/gi";
import { AiOutlineClockCircle, AiOutlineExperiment } from "react-icons/ai";
import { VscBriefcase } from "react-icons/vsc";
import { formatDistanceToNow, parse } from "date-fns";
import Link from "next/link";
import axios from "axios";
interface JobState {
  slug: string;
  title: string;
  type: string;
  posted: string;
  deadline: string;
  isPublished: boolean;
  publishDate: Date | null;
  description: string;
}

const Career = ({ user }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [industry, setIndustry] = useState("");
  const [jobLevel, setJobLevel] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");

  const formattedJobData = jobData.map((job) => ({
    ...job,
    publishDate: job.publishDate ? new Date(job.publishDate) : null,
  }));

  const [jobStates, setJobStates] = useState<JobState[]>(formattedJobData);

  const isPastOrToday = (deadline: string): boolean => {
    const today = new Date();
    const [day, month, year] = deadline.split("/").map(Number);
    const deadlineDate = new Date(year, month - 1, day);

    return deadlineDate <= today;
  };

  const handlePublishClick = (index: number) => {
    const updatedJobStates = [...jobStates];

    if (isPastOrToday(updatedJobStates[index].deadline)) {
      updatedJobStates[index] = {
        ...updatedJobStates[index],
        isPublished: true,
        publishDate: new Date(),
      };
      setJobStates(updatedJobStates);
    } else {
      console.log("Cannot publish job before the deadline.");
    }
  };

  //post data from the form into database

  const handleSaveCareer = () => {
    axios
      .post("/api/careers", {
        jobTitle,
        industry,
        jobLevel,
        experience,
        salary,
        deadline,
        selectedOption,
        description,
        selectedFile,
      })
      .then((res) => {
        closeModal();
        console.log(res.data);
        //resetNewStaffData(); // Reset newStaffData
      });
  };

  //get data from the database
  const [Data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api/career").then((res) => setData(res.data));
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  const [selectedOption, setSelectedOption] = useState("fulltime"); // Initial selected option

  const handleOptionChange = (value: any) => {
    setSelectedOption(value);
  };
  function truncateString(str: string): string {
    if (str.length > 100) {
      return str.substring(0, 100) + "...";
    }
    return str;
  }
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
            Add Career
          </button>
        )}
      </div>
      <div>
        <div className="my-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {Data.map((job, index) => (
            <div
              key={index}
              className="border bg-white rounded-xl shadow-lg p-2"
            >
              <div
                className="w-full h-[300px] rounded-2xl"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(https://greenhillsacademy.rw:8081/images/studentimage_eknrqa.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="justify-between items-center gap-8 flex ml-4">
                  <div className="grid place-items-center mt-4 text-white px-4 py-1 text-center bg-[yellow] bg-opacity-50 rounded-lg text-xs font-['Outfit']">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {job.selectedOption}
                    </div>
                  </div>
                  {user?.permissions
                    .map((permission: string) => permission.toLowerCase())
                    .includes("edit".toLowerCase()) && (
                    <div className="grid grid-cols-2 divide-x items-center">
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
                  )}
                </div>
              </div>
              <div className="p-2">
                <h5 className="text-2xl font-bold">{job.jobTitle}</h5>
                <div className="flex space-x-4 my-2">
                  <div className="flex text-sm text-gray-400 space-x-1.5">
                    <VscBriefcase className="text-sm mt-0.5 font-bold" />{" "}
                    <span>{job.selectedOption}</span>
                  </div>
                  <div className="flex text-sm text-gray-400 space-x-1.5">
                    <AiOutlineClockCircle className="text-sm mt-0.5 font-bold" />{" "}
                    <span>
                      {job.publishDate &&
                        `Posted ${formatDistanceToNow(
                          parse(job.publishDate, "dd/MM/yyyy", new Date()),
                          {
                            addSuffix: true,
                          }
                        )}`}
                    </span>
                  </div>
                </div>
                <hr />
                <p className="text-justify text-lg my-2">
                  {truncateString(job.description)}
                </p>
              </div>
              <div className="flex justify-between items-center p-4">
                {isPastOrToday(job.deadline) && (
                  <button
                    className={`h-[45px] rounded-lg mb-4 text-white ${
                      job.isPublished === true ? "bg-primary" : "bg-[#4A6FBB]"
                    } ${
                      user?.permissions.includes("write")
                        ? ""
                        : "cursor-not-allowed"
                    }`}
                    onClick={
                      user?.permissions.includes("write")
                        ? () => handlePublishClick(index)
                        : () => {}
                    }
                  >
                    {job.isPublished === true ? "Published" : "Publish"}
                  </button>
                )}
                <Link
                  href={`/news/career_tab/${job.slug}`}
                  className="text-lg text-primary hover:underline"
                >
                  View More
                </Link>
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
          <h3 className="font-bold text-[#4A6FBB]">Create New Job</h3>
          <hr className="my-4" />
          <div className="flex w-full gap-4 my-8">
            <div className="w-1/2">
              <div className="">
                <p className="mb-3 text-lg">Job Title</p>
                <div className="relative mb-6">
                  <p className="absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none">
                    <BiRename />
                  </p>
                  <input
                    type="text"
                    className="border-b border-gray-400 rounded-lg w-full pl-12 p-3"
                    placeholder="Marketing Manager"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <p className="mb-3 text-lg">Industry</p>
                  <div className="relative mb-6">
                    <p className="absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none">
                      <BsFillBuildingFill />
                    </p>
                    <input
                      type="text"
                      className="border-b border-gray-400 rounded-lg w-full pl-12 p-3"
                      placeholder="Content Writer"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <p className="mb-3 text-lg">Job level</p>
                  <div className="relative mb-6">
                    <p className="absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none">
                      <GiLevelEndFlag />
                    </p>
                    <input
                      type="text"
                      className="border-b border-gray-400 rounded-lg w-full pl-12 p-3"
                      placeholder="Entry level"
                      value={jobLevel}
                      onChange={(e) => setJobLevel(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <p className="mb-3 text-lg">Experience</p>
                  <div className="relative mb-6">
                    <p className="absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none">
                      <AiOutlineExperiment />
                    </p>
                    <input
                      type="text"
                      className="border-b border-gray-400 rounded-lg w-full pl-12 p-3"
                      placeholder="2-4 Years"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <p className="mb-3 text-lg">Salary range</p>
                  <div className="relative mb-6">
                    <p className="absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none">
                      <BsCashCoin />
                    </p>
                    <input
                      type="text"
                      className="border-b border-gray-400 rounded-lg w-full pl-12 p-3"
                      placeholder="500,000 - 1,000,000"
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <p className="mb-3 text-lg">Deadline Date</p>
                  <div className="relative mb-6">
                    <p className="absolute inset-y-0 left-0 flex items-center pl-2.5 pointer-events-none">
                      <BsCalendarWeek />
                    </p>
                    <input
                      type="date"
                      className="border-b border-gray-400 rounded-lg w-full pl-12 p-3"
                      value={deadline}
                      onChange={(e) => setDeadline(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <p className="mb-3 text-lg">Job Type</p>
                <div className="flex items-center gap-4">
                  <div className="relative flex items-center cursor-pointer">
                    <div
                      className={`w-6 h-6 border-2 rounded-full transition duration-300 ${
                        selectedOption === "fulltime"
                          ? "bg-primary border-green p-2"
                          : "border-gray-400"
                      }`}
                    />
                    <input
                      type="radio"
                      name="option"
                      value="fulltime"
                      className="hidden"
                      onChange={() => handleOptionChange("fulltime")}
                    />
                  </div>
                  <label
                    className="cursor-pointer"
                    onClick={() => handleOptionChange("fulltime")}
                  >
                    Full Time
                  </label>

                  <div className="relative flex items-center cursor-pointer">
                    <div
                      className={`w-6 h-6 border-2 rounded-full transition duration-300 ${
                        selectedOption === "partTime"
                          ? "border-green bg-primary"
                          : "border-gray-400"
                      }`}
                    />
                    <input
                      type="radio"
                      name="option"
                      value="partTime"
                      className="hidden"
                      onChange={() => handleOptionChange("partTime")}
                    />
                  </div>
                  <label
                    className="cursor-pointer"
                    onClick={() => handleOptionChange("partTime")}
                  >
                    Part Time
                  </label>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div>
                <p className="mb-3 text-lg">Description:</p>
                <textarea
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  placeholder="Enter job description here..."
                  rows={10}
                  className="border border-gray-400 py-2 px-4 rounded focus:outline-none focus:border-primary w-full"
                />
              </div>
              <div className="mt-8">
                <p className="mb-3 text-lg">Select Picture:</p>
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
            </div>
          </div>

          <div className="flex justify-center gap-8 my-8">
            <button
              className="px-4 py-2 bg-[#4A6FBB] w-[120px] h-[50px] rounded-[9px] shadow text-white font-bold"
              onClick={handleSaveCareer}
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

export default Career;

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
const jobData = [
  {
    slug: "figma-designer",
    title: "Figma Designer",
    type: "Full Time",
    posted: "Posted 12 months ago",
    deadline: "30/09/2023",
    isPublished: false,
    publishDate: "31/10/2023",
    industry: "Content Writer/ Finance",
    jobLevel: "Entry level",
    experience: "2-4 Years",
    salary: "500,000-1,000,000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur...",
  },
  {
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    type: "Part Time",
    posted: "Posted 6 months ago",
    deadline: "30/10/2023",
    isPublished: true,
    publishDate: "31/10/2023",
    industry: "Content Writer/ Finance",
    jobLevel: "Entry level",
    experience: "2-4 Years",
    salary: "500,000-1,000,000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur...",
  },
  {
    slug: "marketing-manager",
    title: "Marketing Manager",
    type: "Full Time",
    posted: "Posted 6 months ago",
    deadline: "31/10/2023",
    isPublished: false,
    publishDate: "20/08/2023",
    industry: "Content Writer/ Finance",
    jobLevel: "Entry level",
    experience: "2-4 Years",
    salary: "500,000-1,000,000",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur...",
  },
];
