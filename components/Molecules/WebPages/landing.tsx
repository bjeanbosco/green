/* eslint-disable react-hooks/exhaustive-deps */
import NewsAndEvents from "../newsAndEvents";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { GiCancel } from "react-icons/gi";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Stats from "../statsCard";
import axiosInstance from "@/lib/axios";
import uploadImage from "@/utils/uploadImage";
import { Landing } from "@/types/webpages";


const LandingPage = ({ user }: any) => {
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [landing, setLanding] = useState<Landing>({
    "mission": {
      "text": "Green Hills Academy Nurtures A Community Of Caring, Inquisitive And Principled Learners Whose Pursue Excellence And Contribute To An Equitable World.",
      "imageUrl": "https://cloudinary.com/addad"
    },
    "sections": [
      {
        "title": "Nursery School",
        "buttonLabel": "Know more",
        "imageUrl": "https://cloudinary.com/addad"
      },
      {
        "title": "Primary School",
        "buttonLabel": "Know more",
        "imageUrl": "https://cloudinary.com/addad"
      },
      {
        "title": "Middle School",
        "buttonLabel": "Know more",
        "imageUrl": "https://cloudinary.com/addad"
      },
      {
        "title": "High School",
        "buttonLabel": "Know more",
        "imageUrl": "https://cloudinary.com/addad"
      }
    ],
    "coreValues": [
      "Integrity",
      "Intellectual",
      "Curiosity"
    ],
    "valuesImage": "string",
    "uniquenessTitle": "string",
    "uniqueness": [
      {
        "title": "Internationally Accredited ",
        "content": "We are the only IB world school, Cognia accredited, Round square school, and Label France education in Rwanda ",
        "imageSrc": "/images/ch3.jpg"
      },
      {
        "title": "Student Leadership ",
        "content": "Strong student leadership through our school wide assemblies, active student council, and perfect body.",
        "imageSrc": "/images/ch2.png"
      },
      {
        "title": "Our Arts",
        "content": "We have a rich arts program with:African Dance, Crafts,  Percussion Music, Kinyarwada for Beginners,School Choir",
        "imageSrc": "/images/ch1.png"
      },
      {
        "title": "Our Language",
        "content": "We offer English,French, Kinyarwanda, German, and Mandarin languages",
        "imageSrc": "/images/studentimage.jpg"
      },
      {
        "title": "Our Sports Teams",
        "content": "Table Tennis, Basketball, Badminton,Aerobics, Football, Traditional Dance, Karate, Volleyball or Swimming",
        "imageSrc": "/images/studentimage1.jpg"
      },
      {
        "title": "Learners Life",
        "content": "Our rich after school life offers various activities and clubs that allow students to explore interests and develop talents",
        "imageSrc": "/images/studentimage2.jpg"
      }
    ],
    "numbers": {
      "learners": 2050,
      "nationalities": 60,
      "courses": 80,
      "educators": 180
    },
    "footer": {
      "label1": "CONNECT WITH GREENHILLS",
      "label2": "#Greenhillsacademy",
      "label3": "Let's stay in touch"
    }
  });
  const toggleCustomization = () => {
    setIsCustomizing(!isCustomizing);
  };

  const saveToapi = () => {
    axiosInstance
      .put("/pages/landing", landing)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setIsCustomizing(false);
  };

  useEffect(() => {
    axiosInstance
      .get("/pages/landing")
      .then((res) => {
        setLanding(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });
  return (
    <div>
      <div className="flex my-6 justify-between text-white">
        {user?.permissions.map(permission => permission.toLowerCase()).includes("edit".toLowerCase()) && (
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
            </button>{" "}
            {isCustomizing ? (
              <GiCancel
                onClick={toggleCustomization}
                className="text-[red] cursor-pointer"
              />
            ) : null}
          </div>
        )}

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
      <div className="">
        <div>
          {" "}
          <div
            className="mt-12 bg-white"
            style={{
              backgroundImage: `url(/icons/whitebg.svg)`,
              backgroundSize: "cover",
              backgroundPosition: "bottom",
            }}
          >
            <div className="mt-12">
              <section className="flex justify-center">
                <div className="w-[80%] p-8 rounded-2xl">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="pb-4 h-[300px] text-center">
                      {isCustomizing ? (
                        <div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              uploadImage(e.target.files?.[0]).then(res => {
                                const sections = [...landing.sections];
                                sections[0].imageUrl = res;
                                setLanding({ ...landing, sections: sections })
                              })
                              
                            }}
                          />
                        </div>
                      ) : null}
                      <div
                        style={{
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${landing.sections[0].imageUrl})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        className="inset-0 mx-4 flex flex-col items-center h-full px-4 justify-end py-4 text-white"
                      >
                        {isCustomizing ? (
                          <>
                            <input
                              className="text-primary capitalize text-2xl mt-4"
                              value={landing.sections[0].title}
                              onChange={(e) => {
                                const sections = [...landing.sections];
                                sections[0].title = e.target.value;
                                setLanding({ ...landing, sections: sections });
                              }}
                            />
                            <input
                              className="text-primary capitalize mt-4"
                              value={landing.sections[0].buttonLabel}
                              onChange={(e) => {
                                const sections = [...landing.sections];
                                sections[0].buttonLabel = e.target.value;
                                setLanding({ ...landing, sections: sections });
                              }}
                            />
                          </>
                        ) : (
                          <>
                            <h2 className="text-2xl font-semibold text-center">
                              {landing.sections[0].title}
                            </h2>
                            <div className="font-bold inline-block py-2 px-4 rounded-full text-primary hover:border hover:border-primary">
                              {landing.sections[0].buttonLabel} →
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="pb-4 h-[300px] text-center">
                      {isCustomizing ? (
                        <div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => (
                              uploadImage(e.target.files?.[0]).then(res => {
                                const sections = [...landing.sections];
                                sections[1].imageUrl = res;
                                setLanding({ ...landing, sections: sections })
                              })
                            )}
                          />
                        </div>
                      ) : null}
                      <div
                        style={{
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${landing.sections[1].imageUrl})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        className="inset-0 mx-4 flex flex-col items-center h-full px-4 justify-end py-4 text-white"
                      >
                        {isCustomizing ? (
                          <>
                            <input
                              className="text-primary capitalize text-2xl mt-4"
                              value={landing.sections[1].title}
                              onChange={(e) => {
                                const sections = [...landing.sections];
                                sections[1].title = e.target.value;
                                setLanding({...landing, sections: sections});
                              }}
                            />
                            <input
                              className="text-primary capitalize mt-4"
                              value={landing.sections[1].buttonLabel}
                              onChange={(e) => {
                                const sections = [...landing.sections];
                                sections[1].buttonLabel = e.target.value;
                                setLanding({...landing, sections: sections});
                              }}
                            />
                          </>
                        ) : (
                          <>
                            <h2 className="text-2xl font-semibold text-center">
                              {landing.sections[1].title}
                            </h2>
                            <div className="font-bold inline-block py-2 px-4 rounded-full text-primary hover:border hover:border-primary">
                              {landing.sections[1].buttonLabel} →
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="pb-4 h-[300px] text-center">
                      {isCustomizing ? (
                        <div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              uploadImage(e.target.files?.[0]).then(res => {
                                const sections = [...landing.sections];
                                sections[2].imageUrl = res;
                                setLanding({ ...landing, sections: sections })
                              })
                            }}
                          />
                        </div>
                      ) : null}
                      <div
                        style={{
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${landing.sections[2].imageUrl})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        className="inset-0 mx-4 flex flex-col items-center h-full px-4 justify-end py-4 text-white"
                      >
                        {isCustomizing ? (
                          <>
                            <input
                              className="text-primary capitalize text-2xl mt-4"
                              value={landing.sections[2].title}
                              onChange={(e) => {
                                const sections = [...landing.sections];
                                sections[2].title = e.target.value;
                                setLanding({...landing, sections: sections});
                              }}
                            />
                            <input
                              className="text-primary capitalize mt-4"
                              value={landing.sections[2].buttonLabel}
                              onChange={(e) => {
                                const sections = [...landing.sections];
                                sections[2].buttonLabel = e.target.value;
                                setLanding({...landing, sections: sections});
                              }}
                            />
                          </>
                        ) : (
                          <>
                            {" "}
                            <h2 className="text-2xl font-semibold text-center">
                              {landing.sections[2].title}
                            </h2>
                            <div className="font-bold inline-block py-2 px-4 rounded-full text-primary hover:border hover:border-primary">
                              {landing.sections[2].buttonLabel} →
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="pb-4 h-[300px] text-center">
                      {isCustomizing ? (
                        <div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              uploadImage(e.target.files?.[0]).then(res => {
                                const sections = [...landing.sections];
                                sections[3].imageUrl = res;
                                setLanding({ ...landing, sections: sections })
                              })
                            }}
                          />
                        </div>
                      ) : null}
                      <div
                        style={{
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${landing.sections[3].imageUrl})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        className="inset-0 mx-4 flex flex-col items-center h-full px-4 justify-end py-4 text-white"
                      >
                        {isCustomizing ? (
                          <>
                            {" "}
                            <input
                              className="text-primary capitalize text-2xl mt-4"
                              value={landing.sections[3].title}
                              onChange={(e) => {
                                const sections = [...landing.sections];
                                sections[3].title = e.target.value;
                                setLanding({...landing, sections: sections});
                              }}
                            />
                            <input
                              className="text-primary capitalize mt-4"
                              value={landing.sections[3].buttonLabel}
                              onChange={(e) => {
                                const sections = [...landing.sections];
                                sections[3].buttonLabel = e.target.value;
                                setLanding({...landing, sections: sections});
                              }}
                            />
                          </>
                        ) : (
                          <>
                            <h2 className="text-2xl font-semibold text-center">
                              {landing.sections[3].title}
                            </h2>
                            <div className="font-bold inline-block py-2 px-4 rounded-full text-primary hover:border hover:border-primary">
                              {landing.sections[3].buttonLabel} →
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="mt-12">
              <div className="w-full flex justify-center">
                <div className="flex sm:flex-wrap w-[80%]">
                  <div className="flex w-full justify-between gap-8">
                    <div className="w-1/2">
                      {isCustomizing ? (
                        <div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              uploadImage(e.target.files?.[0]).then(res => {
                                setLanding({ ...landing, mission: {...landing.mission, imageUrl: res} })
                              })}}
                          />
                        </div>
                      ) : null}
                      <div
                        style={{
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${landing.mission.imageUrl})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        className=" h-[400px] rounded-[16px]"
                      />
                      <div className="w-full flex justify-center">
                        <div className="w-[93%] -mt-20 bg-primary p-8 rounded-2xl">
                          <div className="">
                            <div className="">
                              <div>
                                <h2 className="text-[yellow] font-semibold">
                                  Mission
                                </h2>
                                {isCustomizing ? (
                                  <textarea
                                    rows={3}
                                    className="text-primary capitalize text-2xl mt-4"
                                    value={landing.mission.text}
                                    onChange={(e) => {
                                      setLanding({...landing, mission: {...landing.mission, text: e.target.value}});
                                    }}
                                  />
                                ) : (
                                  <p className="text-white text-xl text-justify">
                                    {landing.mission.text}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2">
                      {isCustomizing ? (
                        <div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              uploadImage(e.target.files?.[0]).then(res => {
                                setLanding({ ...landing, valuesImage: res })
                              })
                            }}
                          />
                        </div>
                      ) : null}
                      <div
                        style={{
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${landing.valuesImage})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        className=" h-[400px] rounded-[16px]"
                      />
                      <div className="w-full flex justify-center">
                        <div className="w-[93%] -mt-20 bg-primary p-8 rounded-2xl">
                          <div className="">
                            <div className="">
                              <div className="">
                                <h2 className="text-[yellow] font-semibold ">
                                  Core value
                                </h2>
                                <div className="text-white text-xl text-justify">
                                  <ol className="list-disc ml-6">
                                    {landing.coreValues.map((detail, index) => (
                                      <div key={index}>
                                        {isCustomizing ? (
                                          <input
                                            value={detail}
                                            onChange={(e) =>{
                                              const coreValues = [...landing.coreValues];
                                              coreValues[index] = e.target.value;
                                              setLanding({...landing, coreValues: coreValues});
                                            }
                                              
                                            }
                                            className="w-full border border-gray-300 p-2 mb-4 text-black"
                                          />
                                        ) : (
                                          <li key={index}>{detail}</li>
                                        )}
                                      </div>
                                    ))}
                                  </ol>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="mt-12 bg-green bg-green"
            ref={ref}
            style={{
              backgroundImage: `url(${inView ? 'https://res.cloudinary.com/dbqwmndns/image/upload/v1700375622/GHA/icons/lightgreen2_xytlj8.svg' : ''}`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="flex py-12 justify-center">
              <div className="w-[80%]">
                <div className="flex justify-center">
                  <div className="w-[55px] grid place-items-center">
                    <div className="w-[18px] h-[7px] my-2 bg-primary" />
                    <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
                  </div>
                </div>
                {isCustomizing ? (
                  <input
                    value={landing.uniquenessTitle}
                    onChange={(e) => {
                      setLanding({...landing, uniquenessTitle: e.target.value});
                    }}
                    className="text-2xl font-semibold text-center mb-2 text-primary"
                  />
                ) : (
                  <h1 className="tracking-widest text-center py-8 text-primary font-semibold uppercase">
                    {landing.uniquenessTitle}
                  </h1>
                )}
                <div className="grid grid-cols-4 gap-4">
                  {landing.uniqueness.map((card, index) => (
                    <div key={index}>
                      {isCustomizing ? (
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              uploadImage(file).then(res => {
                                const cards = [...landing.uniqueness];
                                cards[index].imageSrc = res;
                                setLanding({...landing, uniqueness: cards});
                              });
                            }
                          }}
                          className="text-[25px] mb-2 bg-transparent border-none focus:ring-0"
                        />
                      ) : (
                        ""
                      )}
                      <div className="h-[300px]">
                        <div
                          className={`overflow-hidden my-4 rounded-lg shadow-lg bottom-4 h-full group sm:w-auto`}
                        >
                          <div
                            style={{
                              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${card.imageSrc})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                            className="inset-0 mx-4 flex flex-col items-center h-full px-4 justify-center text-white"
                          >
                            {isCustomizing ? (
                              <>
                                <input
                                  value={card.title}
                                  onChange={(e) => {
                                    const cards = [...landing.uniqueness];
                                    cards[index].title = e.target.value;
                                    setLanding({...landing, uniqueness: cards});
                                    }
                                  }
                                  className="text-[25px] font-semibold text-center mb-2 bg-transparent border-none focus:ring-0"
                                />
                                <textarea
                                  value={card.content}
                                  onChange={(e) => {
                                    const cards = [...landing.uniqueness];
                                    cards[index].content = e.target.value;
                                    setLanding({...landing, uniqueness: cards});
                                    }
                                  }
                                  className="text-sm text-center bg-transparent border-none focus:ring-0"
                                />
                              </>
                            ) : (
                              <div className="border border-white px-2 py-14 rounded-lg">
                                <h2 className="text-[25px] font-semibold text-center mb-2">
                                  {card.title}
                                </h2>
                                <p className="text-sm text-center">
                                  {card.content}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Stats />
          <NewsAndEvents />
          <div
               ref={ref}
               style={{
                 backgroundImage: `url(${inView ? "https://res.cloudinary.com/dbqwmndns/image/upload/v1700375606/GHA/icons/bgwhite2_lpw73r.svg" : ""})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex py-12 justify-center flex-grow">
              <div className="w-full flex-col justify-start items-center gap-2 inline-flex">
                <div className="flex justify-center">
                  <div className="w-[55px] grid place-items-center">
                    <div className="w-[18px] h-[7px] my-2 bg-primary" />
                    <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
                  </div>
                </div>
                {isCustomizing ? (
                  <input
                    value={landing.footer.label1}
                    onChange={(e) => {
                      setLanding({...landing, footer: {...landing.footer, label1: e.target.value}});
                    }}
                    className="text-2xl font-bold text-center mb-2 text-primary"
                  />
                ) : (
                  <h1 className="text-center text-primary font-bold">
                    {landing.footer.label1}
                  </h1>
                )}
                {isCustomizing ? (
                  <input
                    value={landing.footer.label2}
                    onChange={(e) => {
                      setLanding({...landing, footer: {...landing.footer, label2: e.target.value}});
                    }}
                    className="text-2xl font-semibold text-center mb-2 text-primary"
                  />
                ) : (
                  <div className="text-primary text-lg font-semibold">
                    {landing.footer.label2}
                  </div>
                )}
                <div className="flex w-full justify-center">
                  <div className="flex sm:hidden w-1/5 justify-between mb-4 items-end sm:w-full">
                    <div className="w-9 h-9 flex items-center justify-center bg-primary rounded-full">
                      <Link href={""}>
                        <FaFacebook className="w-5 h-5 text-white hover:text-[yellow]" />
                      </Link>
                    </div>
                    <div className="w-9 h-9 flex items-center justify-center bg-primary rounded-full">
                      <Link href={""}>
                        <FaTwitter className="w-5 h-5 text-white hover:text-[yellow]" />
                      </Link>
                    </div>
                    <div className="w-9 h-9 flex items-center justify-center bg-primary rounded-full">
                      <Link href={""}>
                        <FaInstagram className="w-5 h-5 text-white hover:text-[yellow]" />
                      </Link>
                    </div>
                    <div className="w-9 h-9 flex items-center justify-center bg-primary rounded-full">
                      <Link href={""}>
                        <FaYoutube className="w-5 h-5 text-white hover:text-[yellow]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="py-12 flex-col justify-center items-center gap-6 inline-flex">
                {isCustomizing ? (
                  <input
                    value={landing.footer.label3}
                    onChange={(e) => {
                      setLanding({...landing, footer: {...landing.footer, label3: e.target.value}});
                    }}
                    className="text-2xl font-semibold text-center mb-2 text-black"
                  />
                ) : (
                  <h4 className="text-black font-semibold font-['Outfit']">
                    {landing.footer.label3}
                  </h4>
                )}
                <div className="justify-start items-start inline-flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-full bg-neutral-100 text-lg rounded-tl-2xl rounded-bl-2xl justify-center items-center gap-2.5 flex w-[280px] text-neutral-500 text-lg font-normal font-['Outfit']"
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    title="Please enter a valid email address"
                    required
                  />

                  <button className="px-8 py-4 bg-primary rounded-tr-2xl rounded-br-2xl justify-center items-center gap-2.5 flex w-[150px] text-center text-white text-lg font-normal font-['Outfit']">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

const listCoreValueData = ["Integrity", "Intellectual", "Curiosity"];
