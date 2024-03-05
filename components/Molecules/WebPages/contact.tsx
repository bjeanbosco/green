import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
import { MdLocationPin, MdMail, MdPhone } from "react-icons/md";
import axiosInstance from "@/lib/axios";
import { Contact } from "@/types/webpages";

type ScheduleItem = {
  label: string;
  value: string;
};

const ContactPage = () => {
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(
    "/icons/bgwhiteyellow_mekqvs.svg"
  );
  const [contactInfo, setContactInfo] = useState<Contact>({
    "email": "info@greenhillsacademy.rw",
    "phoneNumber": "+250 735 832 348",
    "location": "Kigali KG 278 St, Nyarutarama Kigali",
    "workingDays": [
      {
        "label": "Sunday",
        "value": "Closed"
      },
      {
        "label": "Saturday",
        "value": "Closed"
      },
      {
        "label": "Monday - Friday",
        "value": "Close7:00 AM - 5:00 PMd"
      }
    ]
  });
  const [schedule, setSchedule] = useState<ScheduleItem[]>([
    { label: "Sunday", value: "Closed" },
    { label: "Saturday", value: "Closed" },
    { label: "Monday - Friday", value: "7:00 AM - 5:00 PM" },
  ]);

  const [queryFormFields, setQueryFormFields] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleContactInfoChange = (key: string, value: string) => {
    setContactInfo({ ...contactInfo, [key]: value });
  };

  const handleScheduleChange = (
    index: number,
    key: keyof ScheduleItem,
    value: string
  ) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[index][key] = value;
    setSchedule(updatedSchedule);
  };

  const handleQueryFormChange = (key: string, value: string) => {
    setQueryFormFields({ ...queryFormFields, [key]: value });
  };

  const addNewScheduleDay = () => {
    const updatedSchedule = [...schedule, { label: "", value: "" }];
    setSchedule(updatedSchedule);
  };

  const removeScheduleDay = (index: number) => {
    const updatedSchedule = [...schedule];
    updatedSchedule.splice(index, 1);
    setSchedule(updatedSchedule);
  };

  // const saveToLocalStorage = () => {
  //   localStorage.setItem("backgroundImage", backgroundImage);
  //   localStorage.setItem("contactInfo", JSON.stringify(contactInfo));
  //   localStorage.setItem("schedule", JSON.stringify(schedule));
  //   localStorage.setItem("queryFormFields", JSON.stringify(queryFormFields));

  //   setIsCustomizing(false);
  // };
  const saveToapi = () => {
    setContactInfo({...contactInfo, workingDays : schedule});
    axiosInstance.post("/pages/contact", {contactInfo, schedule}).then((res) => {
      setIsCustomizing(false);
    })
  }
  useEffect(() => {
    axiosInstance.get("/pages/contact").then((res) => {
      setContactInfo(res.data);
    })
  }, []);

  const toggleCustomization = () => {
    setIsCustomizing(!isCustomizing);
  };

  return (
    <div>
      {/* Header */}
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

        <div className="flex gap-4">
          <button
            onClick={isCustomizing ? saveToapi : () => {}}
            className={`w-[124px] h-[43px] ${
              isCustomizing
                ? "bg-[#5B83D7] hover:bg-[#4A6FBB]"
                : "cursor-not-allowed bg-[#B3B3B3] text-white"
            } text-center rounded-[6px]`}
          >
            Save Copy
          </button>

          <button className="w-[124px] h-[43px] bg-primary text-center rounded-[6px]">
            {" "}
            Publish
          </button>
        </div>
      </div>

      {/* Main Content */}
      {isCustomizing ? (
        <section className="flex justify-center bg-white">
          <div className="w-[80%] mt-28 py-12">
            <div className="flex justify-center">
              <div className=" ">
                <h1 className="capitalize text-center text-primary">
                  reach out to us
                </h1>
                <div className="flex sm:flex-wrap justify-between md:gap-8 my-4 text-lg">
                  <div className="flex gap-2 md:my-4 items-center">
                    <MdMail className="mt-1 text-primary text-lg" />
                    <input
                      type="text"
                      value={contactInfo.email}
                      onChange={(e) =>
                        handleContactInfoChange("email", e.target.value)
                      }
                      className="text-primary"
                    />
                  </div>
                  <div className="flex md:my-4">
                    <hr className="h-6 w-0.5 bg-black" />
                  </div>
                  <div className="flex gap-2 md:my-4 items-center">
                    <MdPhone className="mt-1 text-primary text-lg" />
                    <input
                      type="text"
                      value={contactInfo.phoneNumber}
                      onChange={(e) =>
                        handleContactInfoChange("phoneNumber", e.target.value)
                      }
                      className="text-primary"
                    />
                  </div>
                  <div className="flex sm:hidden my-4">
                    <hr className="h-6 w-0.5 bg-black" />
                  </div>
                  <div className="flex gap-2 sm:w-full sm:justify-center md:my-4 items-center">
                    <MdLocationPin className="mt-1 text-primary text-lg" />
                    <input
                      type="text"
                      value={contactInfo.location}
                      onChange={(e) =>
                        handleContactInfoChange("location", e.target.value)
                      }
                      className="text-primary"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="flex justify-center mt-12">
              <div className="md:w-1/2">
                <h2 className="text-primary md:mb-12 font-bold uppercase font-['Outfit']">
                  our schedule
                </h2>
                {schedule.map((item, index) => (
                  <div key={index} className="mb-4 flex items-center">
                    <input
                      type="text"
                      placeholder="Day"
                      value={item.label}
                      onChange={(e) =>
                        handleScheduleChange(index, "label", e.target.value)
                      }
                      className="text-primary"
                    />
                    <span className="mx-2">-</span>
                    <input
                      type="text"
                      placeholder="Hours"
                      value={item.value}
                      onChange={(e) =>
                        handleScheduleChange(index, "value", e.target.value)
                      }
                      className="text-primary"
                    />
                    <GiCancel
                      className="text-red cursor-pointer ml-2"
                      onClick={() => removeScheduleDay(index)}
                    />
                  </div>
                ))}
                <button
                  className="flex items-center text-primary"
                  onClick={addNewScheduleDay}
                >
                  <BsPlusCircle className="mr-2" />
                  Add Day
                </button>
              </div>
            </div>

            {/* Query Form */}
            <div className="flex justify-center mt-12">
              <div className="md:w-1/2">
                <h2 className="text-primary md:mb-6 font-bold uppercase font-['Outfit']">
                  query form
                </h2>
                <div className="mb-4">
                  <p className="pb-1">Name</p>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={queryFormFields.name}
                    onChange={(e) =>
                      handleQueryFormChange("name", e.target.value)
                    }
                    className="text-primary"
                  />
                </div>
                <div className="my-4">
                  <p className="pb-1">Email</p>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    value={queryFormFields.email}
                    onChange={(e) =>
                      handleQueryFormChange("email", e.target.value)
                    }
                    className="text-primary"
                  />
                </div>
                <div className="my-4">
                  <p className="pb-1">Message</p>
                  <textarea
                    placeholder="Your message for us"
                    rows={4}
                    value={queryFormFields.message}
                    onChange={(e) =>
                      handleQueryFormChange("message", e.target.value)
                    }
                    className="text-primary"
                  />
                </div>
                <div className="my-8">
                  <button
                    type="submit"
                    className="capitalize bg-primary text-white w-full rounded-xl text-lg"
                  >
                    Submit now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <main className="flex justify-center bg-white">
          <section className="w-[80%] mt-28 py-12">
            <div className="flex justify-center">
              <div className=" ">
                <h1 className="capitalize text-center text-primary">
                  reach out to us
                </h1>
                <div className="flex sm:flex-wrap justify-between md:gap-8 my-4 text-lg">
                  <div className="flex gap-2 md:my-4">
                    <MdMail className="mt-1 text-primary text-lg" />
                    <Link href={"mailto:info@greenhillsacademy.rw"}>
                      info@greenhillsacademy.rw
                    </Link>
                  </div>
                  <div className="flex md:my-4">
                    <hr className="h-6 w-0.5 bg-black" />
                  </div>
                  <div className="flex gap-2 md:my-4">
                    <MdPhone className="mt-1 text-primary text-lg" />
                    <Link href={"tel:+250735832348"}> +250 735 832 348 </Link>
                  </div>
                  <div className="flex sm:hidden my-4">
                    <hr className="h-6 w-0.5 bg-black" />
                  </div>
                  <div className="flex gap-2 sm:w-full sm:justify-center md:my-4">
                    <MdLocationPin className="mt-1 text-primary text-lg" />
                    <Link href={""}>
                      PO BX 6419, Kigali KG 278 St, Nyarutarama Kigali
                    </Link>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex sm:flex-wrap w-[80%] my-12">
                <div className="md:w-1/2">
                  <h2 className="text-primary md:mb-12 font-bold uppercase font-['Outfit']">
                    our schedule
                  </h2>
                  <div className="mb-4">
                    <p className="font-bold">Sunday</p>
                    <p className="">Closed</p>
                  </div>
                  <div className="mb-4">
                    <p className="font-bold">Saturday</p>
                    <p className="">Closed</p>
                  </div>
                  <div className="mb-4">
                    <p className="font-bold">Monday - Friday</p>
                    <p className="">7:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-primary md:mb-6 font-bold uppercase font-['Outfit']">
                    query form
                  </h2>
                  <div className="mb-4">
                    <p className="pb-1">Name</p>
                    <input type="name" placeholder="Enter your name" />
                  </div>
                  <div className="my-4">
                    <p className="pb-1">Email</p>
                    <input type="email" placeholder="example@gmail.com" />
                  </div>
                  <div className="my-4">
                    <p className="pb-1">Message</p>
                    <textarea placeholder="Your message for us" rows={4} />
                  </div>
                  <div className="my-8">
                    <button
                      type="submit"
                      className="capitalize bg-primary text-white w-full rounded-xl text-lg"
                    >
                      Submit now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </div>
  );
};

export default ContactPage;
