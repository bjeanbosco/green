/* eslint-disable @next/next/no-img-element */
import DecoratedList from "@/components/Atoms/decoratedList";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiVideo } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import axiosInstance from "@/lib/axios";
import { About } from "@/types/webpages";
import uploadImage from "@/utils/uploadImage";
  
const AboutPage = ({ user }: any) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000, // Adjust the slide transition speed (in milliseconds)
    autoplaySpeed: 4000, // Adjust the time between slides (in milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const url = "https://api.cloudinary.com/v1_1/drjbtprwb/image/upload";
  const [imageData, setImageData] = useState([
    "https://greenhillsacademy.rw:8081/images/4_kxmvir.jpg",
    "https://greenhillsacademy.rw:8081/images/1_hcjnfu.jpg",
    "https://greenhillsacademy.rw:8081/images/3_wb4qxk.jpg",
    "https://greenhillsacademy.rw:8081/images/2_hrxmza.jpg",
    "https://greenhillsacademy.rw:8081/images/8_f9cwce.jpg",
    "https://greenhillsacademy.rw:8081/images/9_ujknty.jpg",
  ]);

  const handleAddImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadImage(file).then(res => {
        setAbout({ ...about, sliderPhotos: [...about.sliderPhotos, res] })
      })
      const imageUrl = URL.createObjectURL(file);
      setImageData([...imageData, imageUrl]);
    }
  };

  const handleDeleteImage = (index: number) => {
    const updatedImageData = about.sliderPhotos.filter((_, i) => i !== index);
    setAbout({ ...about, sliderPhotos: updatedImageData });
  };
  const paragraphs = [
    `It is a great pleasure to welcome you to Green Hills Academy
      (GHA), the only International Baccalaureate World School and
      LabelFrancÉducation school in Rwanda. At GHA, learners excel
      academically and personally in a safe, caring and vibrant
      learning community. We create energizing, engaging and
      empowering learning experiences that foster a love for learning
      and prepare learners for the future in a continuously changing
      world. Preparing learners for the uncertainties of our future
      world is a challenge that we embrace at GHA by developing
      critical thinking skills, creativity, emotional intelligence,
      self-confidence, resilience and collaboration to solve real
   world problems.`,

    `  At GHA, academic achievement and personal growth go hand in
      hand to ensure development of the whole child. We provide
      our learners with engaging and challenging learning
      opportunities while encouraging them to do their personal
      best in every area of life. Learners and Educators set
      goals, and Educator track learners’ academic progress to
      help them achieve goals. We inspire learners to reach their
      full potential, identify and develop interests and talents,
      and become independent and self-reliant individuals. We help
      learners develop excellent social skills, understanding and
      management of emotions, and healthy friendships. Our active
      High School Prefects and Learner Council at all grade levels
      foster learner agency, leadership and voice. In addition,
      learners have many opportunities in classes and
      extracurricular activities to develop artistic, cultural,
      sporting, creative and leadership skills that will serve
      them well during their time at GHA and beyond.
    `,
    `
    With talented Educators from 15 countries and wonderful
    learners from over 60 countries, GHA’s rich diversity
    prepares learners for the diverse societies and economies
    they will join when they enter the workplace. Our learners
    learn to understand and respect multiple viewpoints, express
    empathy and compassion for others, and become ethical young
    people with global understanding and perspective.
  \n\n
    Recognizing the significant value of being multilingual, we
    offer a bilingual French-English program from Nursery
    through Middle School in addition to our English program
    from Nursery through Twelfth Grade. We also offer additional
    language study in Kinyarwanda, German, French and Mandarin.
  `,
    `  Widely recognized as one of the best high school programs of
      study, our International Baccalaureate Diploma Programme
      (IBDP) prepares learners for admission to excellent
      universities of choice worldwide. IBDP learners develop a
      superior breadth and depth of knowledge, essential skills
      for success and leadership in the 21st century, and
      attitudes and values based on a sense of shared
      responsibility for each other. After studying in excellent
      universities, our learners go on to become leaders in their
      areas of work and contribute to building a more peaceful and
      sustainable global society.
   `,
    ` While we are proud of the exemplary education we offer and
   the innumerable successes of our learners, faculty and
   staff, we are keenly aware that our success is contingent
   upon the ongoing growth and development of our faculty and
   staff. To provide an exceptional learning experience for
   learners, the faculty and staff of a school must
   continuously learn and grow. Thus, we are constantly engaged
   in developing our professional practice through training,
   self reflection, peer feedback and mentoring.
  `,
    `In conclusion, our vibrant learning community’s home is a
   lush, beautifully landscaped 26-acre campus with
   purpose-built facilities that include classrooms flooded
   with natural light, a beautiful pool, spacious gymnasium,
   science labs, libraries, band room and more. In this
   gorgeous environment, we live and learn together.
  `,
  ];

  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);

  const handleNextClick = () => {
    if (currentParagraphIndex < paragraphs.length - 1) {
      setCurrentParagraphIndex(currentParagraphIndex + 1);
    }
  };

  const handleBackClick = () => {
    if (currentParagraphIndex > 0) {
      setCurrentParagraphIndex(currentParagraphIndex - 1);
    }
  };

  const isBackButtonVisible = currentParagraphIndex > 0;
  const isNextButtonVisible = currentParagraphIndex < paragraphs.length - 1;
  //////
  const [isCustomizing, setIsCustomizing] = useState(false);

  const toggleCustomization = () => {
    setIsCustomizing(!isCustomizing);
  };
  const [about, setAbout] = useState<About>({
    "title": "Green Hills Academy At Glimpse",
    "sliderPhotos": [
      "/images/4.JPG",
      "/images/1.JPG",
      "/images/3.JPG",
      "/images/2.JPG",
      "/images/8.JPG",
      "/images/9.JPG"
    ],
    "whoWeAre": {
      "title": "WHO WE ARE",
      "description": "Green Hills Academy is authorized by the International Baccalaureate (IB) organization to offer the Primary Years Programme for learners in Nursery 1 to Grade 5, the Middle Years Programme for learners in Grades 6 to 10 and the Diploma Programme for learners in Grades 11 and 12 . IB World School shares a common philosophy and commitment to providing a high quality, challenging, international education that prepares learners for further study in university and fulfilling lives. For further information about the IB and its programmes, visit www.ibo.org.",
      "videoUrl": "https://www.youtube.com/watch?v=wsNLaXRCxog&t",
      "photoUrl": "/images/1.JPG"
    },
    "welcomeNote": {
      "title": "WELCOME TO GREEN HILLS ACADEMY",
      "professorName": "Daniel Holliger, PHD",
      "professorPosition": "Head of School(He/Him/His)",
      "professorPhotoUrl": "/images/2.png",
      "note": "It is a great pleasure to welcome you to Green Hills Academy (GHA), the only International Baccalaureate World School and LabelFrancÉducation school in Rwanda. At GHA, learners excel academically and personally in a safe, caring and vibrant learning community. We create energizing, engaging and empowering learning experiences that foster a love for learning and prepare learners for the future in a continuously changing world. Preparing learners for the uncertainties of our future world is a challenge that we embrace at GHA by developing critical thinking skills, creativity, emotional intelligence, self-confidence, resilience and collaboration to solve real world problems.",
      "readMoreSlug": ""
    },
    "sectionsBackgroundImageSrc": "/images/12.png",
    "sections": [
      {
        "iconSrc": "icons/icon-1.png",
        "title": "Learners life",
        "viewMoreSlug": "",
        "viewMoreLabel": "View More"
      },
      {
        "iconSrc": "icons/icon-2.png",
        "title": "Leadership",
        "viewMoreSlug": "",
        "viewMoreLabel": "View More"
      },
      {
        "iconSrc": "icons/icon-3.png",
        "title": "Facilities",
        "viewMoreSlug": "",
        "viewMoreLabel": "View More"
      },
      {
        "iconSrc": "icons/icon-4.png",
        "title": "Accreditation",
        "viewMoreSlug": "",
        "viewMoreLabel": "View More"
      }
    ],
    "alumniSectionTitle": "GREEN HILLS ALUMNI",
    "operationalCountriesTitle": "World wide react",
    "operationalCountries": [
      "Rwanda",
      "US",
      "Canada",
      "Holland",
      "China",
      "Germany",
      "Kenya"
    ],
    "partnerUniversitiesTitle": "Prestigious Universities",
    "partnerUniversities": [
      "Harvard University",
      "Massachusetts Institute of Technology (MIT)",
      "Stanford University",
      "Dartmouth College",
      "Cornell University",
      "New York University (NYU)",
      "McGill University",
      "University of Rwanda",
      "African Leadership University",
      "Kaiserslautern University"
    ],
    "achievementsTitle": "Diverse Achievements",
    "achievements": [
      "Technology Innovators",
      "Media Pioneers",
      "Legal Experts",
      "Entrepreneurs",
      "Medical Professionals",
      "Creative Artists",
      "Public Service Leaders"
    ]
  })
  useEffect(() => {
    axiosInstance.get("/pages/about").then(res => {
      setAbout(res.data)
    })
  }, [])
  const saveToapi = () => {
    axiosInstance.put("/pages/about", about).then(res => {
      console.log(res.data)
    })
  }
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });
  return (
    <div>
      <div className="flex my-6 justify-between text-white">
        <div className="flex gap-2">
          {user?.permissions.map((permission: string) => permission.toLowerCase()).includes("edit".toLowerCase()) && (
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
          )}
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
      <div>
        <div>
          <div className="">
            <div
              className="w-full"
              style={{
                backgroundImage: `url(/icons/bgwhiteyellow_mekqvs.svg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex h-[300px] items-end justify-center">
                <div className="text-center w-[80%] my-12">
                  <div className="flex justify-center">
                    <div className="w-[55px] grid place-items-center">
                      <div className="w-[18px] h-[7px] my-2 bg-primary" />
                      <div className="w-[55px] h-[7px] bg-[#80C1B9]" />
                    </div>
                  </div>
                  <div className="flex justify-center">
                    {isCustomizing ? (
                      <input
                        className="text-primary capitalize text-2xl text-center mt-4"
                        value={about.title}
                        onChange={(e) => {
                          setAbout({ ...about, title: e.target.value });
                        }}
                      />
                    ) : (
                      <h1 className="text-primary capitalize sm:text-2xl">
                        {about.title}
                      </h1>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full pb-16 flex justify-center">
                <div className="w-[80%]">
                  <div className="flex justify-end">
                    {isCustomizing && (
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleAddImage}
                        className="cursor-pointer"
                      />
                    )}
                  </div>
                  <Slider {...settings}>
                    {about.sliderPhotos.map((card, index) => (
                      <div className="h-[30vh]" key={index}>
                        <div
                          className={`overflow-hidden my-4 h-full group sm:w-auto`}
                        >
                          <div
                            style={{
                              backgroundImage: ` url(${card})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                            className="inset-0 mx-2 flex flex-col items-center h-full px-4 justify-center text-white"
                          >
                            {isCustomizing && (
                              <GiCancel
                                onClick={() => handleDeleteImage(index)}
                                className="text-[red] cursor-pointer"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div
                className="flex h-full bg-green py-8 justify-center"
                style={{
                  backgroundImage: `url(/icons/lightgreen3_bdlud3.svg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "bottom",
                }}
              >
                <div className="md:w-[80%] w-full gap-4 md:flex-row flex-col flex items-center my-16 gap-[53px] inline-flex">
                  <div className="flex flex-col gap-4 md:w-1/2 w-[80%]">
                    {isCustomizing ? (
                      <input
                        className="text-primary capitalize text-2xl text-center mt-4"
                        value={about.whoWeAre.title}
                        onChange={(e) => {
                          setAbout({ ...about, whoWeAre: { ...about.whoWeAre, "title": e.target.value } });
                        }}
                      />
                    ) : (
                      <h2 className="text-primary font-semibold uppercase">
                        {about.whoWeAre.title}
                      </h2>
                    )}
                    <hr className="w-[75px] h-1.5 bg-primary mb-4" />

                    {isCustomizing ? (
                      <textarea
                        className="text-xl pt-4 text-justify text-black text-base font-normal border border-gray-400 p-2 w-full"
                        value={about.whoWeAre.description}
                        rows={5}
                        onChange={(e) => {
                          setAbout({ ...about, whoWeAre: { ...about.whoWeAre, "description": e.target.value } });
                        }}
                      />
                    ) : (
                      <p className="text-xl pt-4 text-justify text-black text-base font-normal">
                        {about.whoWeAre.description}
                      </p>
                    )}
                    <button className="text-white rounded-xl bg-primary flex flex-row justify-center items-center space-x-2 hover:text-[yellow]">
                      <BiVideo className="text-[yellow] " />
                      <span>Stream&nbsp;video</span>{" "}
                    </button>
                  </div>
                  <div className="w-1/2 flex items-center">
                    <div className="">
                      {isCustomizing && (
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e: any) => {
                            const file = e.target.files[0];
                            uploadImage(file).then(res => {
                              setAbout({ ...about, whoWeAre: { ...about.whoWeAre, "photoUrl": res} })
                            }
                            )}}
                          className="cursor-pointer"
                        />
                      )}
                      <img loading="lazy"className="h-[100%]" src={about.whoWeAre.photoUrl} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center my-20">
                <div className="w-[80%] py-28 h-full flex sm:flex-wrap items-center justify-start gap-24">
                  <div className="md:w-1/2">
                    <div className="">
                      <img
                        src="/images/ytr.png"
                        alt=""
                        className="object-contain object-center w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2 w-full h-full">
                    <div className="grid gap-2">
                      {isCustomizing ? (
                        <input
                          className="text-primary text-2xl text-center mt-4"
                          value={about.welcomeNote.title}
                          onChange={(e) => {
                            setAbout({ ...about, welcomeNote: { ...about.welcomeNote, "title": e.target.value } });;
                          }}
                        />
                      ) : (
                        <h2 className="text-primary capitalize uppercase">
                          {about.welcomeNote.title}
                        </h2>
                      )}
                      <hr className="w-[75px] h-1.5 bg-primary mb-4" />
                      <p className="mt-4 my-2 text-xl font-bold ">
                        {about.welcomeNote.professorName}
                      </p>
                      <p className="text-zinc-600 text-xl font-normal ">
                        {about.welcomeNote.professorPosition}
                      </p>
                      <p className="text-xl pt-4 text-justify font-normal">
                        {paragraphs[currentParagraphIndex]}
                      </p>
                      <div className="flex gap-4 mt-4">
                        {isBackButtonVisible && (
                          <span className="text-primary cursor-pointer font-medium font-['Outfit']">
                            <a
                              onClick={handleBackClick}
                              className="md:text-xl text-2xl"
                            >
                              back
                            </a>
                          </span>
                        )}
                        {isNextButtonVisible && (
                          <span className="text-primary cursor-pointer font-medium font-['Outfit']">
                            <a
                              onClick={handleNextClick}
                              className="md:text-xl text-2xl"
                            >
                              Read more
                            </a>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {isCustomizing && (
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e: any) => {
                    const file = e.target.files[0];
                    uploadImage(file).then(res => {
                      setAbout({ ...about, sectionsBackgroundImageSrc: res 
                    })})
                  }}
                  className="cursor-pointer"
                />
              )}
              <div
                className="w-full flex sm:flex-col h-[500px] bg-fixed bg-cover bg-no-repeat bg-center flex justify-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${about.sectionsBackgroundImageSrc})`,
                }}
              >
                <div className="md:w-[80%] w-full place-items-center grid place-content-center md:grid-cols-4 grid-cols-2 gap-4">
                  <div className="grid place-items-center gap-4">
                    <div className="flex justify-center">
                      <img
                        src="/icons/Learners_life_lrohks.png"
                        alt=""
                        className="w-[60px] h-[60px]"
                      />
                    </div>
                    {isCustomizing ? (
                      <input
                        value={about.sections[0].title}
                        onChange={(e) => {
                          const sections = [...about.sections]
                          sections[0].title = e.target.value
                          setAbout({ ...about, sections: sections });
                        }}
                        className="text-[25px] font-semibold text-center mb-2 bg-transparent border-none focus:ring-0"
                      />
                    ) : (
                      <h2 className="text-center text-[white] font-black">
                        {about.sections[0].title}
                      </h2>
                    )}
                    <button className="hover:text-[yellow] text-white grid mt-4 place-items-center bg-primary rounded-lg justify-center shadow-2xl hover:border-[yellow] hover:border">
                      <div className="flex space-x-4 items-center">
                        {isCustomizing ? (
                          <input
                            value={about.sections[0].viewMoreLabel}
                            onChange={(e) => {
                              const sections = [...about.sections]
                              sections[0].viewMoreLabel = e.target.value
                              setAbout({ ...about, sections: sections });
                            }}
                            className="text-center bg-transparent border-none focus:ring-0"
                          />
                        ) : (
                          <span>{about.sections[0].viewMoreLabel}</span>
                        )}
                        <BsEye className="text-[yellow] mt-1" />
                      </div>
                    </button>
                  </div>
                  <div className="grid place-items-center gap-4">
                    <div className="flex justify-center">
                      <img
                        src="/icons/international.svg"
                        alt=""
                        className="w-[60px] h-[60px]"
                      />
                    </div>
                    {isCustomizing ? (
                      <input
                        value={about.sections[1].title}
                        onChange={(e) => {
                          const sections = [...about.sections]
                          sections[1].title = e.target.value
                          setAbout({ ...about, sections: sections });
                        }}
                        className="text-[25px] font-semibold text-center mb-2 bg-transparent border-none focus:ring-0"
                      />
                    ) : (
                      <h2 className="text-center text-[white] font-black">
                        {about.sections[1].title}
                      </h2>
                    )}
                    <button className="hover:text-[yellow] text-white grid mt-4 place-items-center bg-primary rounded-lg justify-center shadow-2xl hover:border-[yellow] hover:border">
                      <div className="flex space-x-4 items-center">
                        {isCustomizing ? (
                          <input
                            value={about.sections[1].viewMoreLabel}
                            onChange={(e) => {
                              const sections = [...about.sections]
                              sections[1].viewMoreLabel = e.target.value
                              setAbout({ ...about, sections: sections });
                            }}
                            className="text-center bg-transparent border-none focus:ring-0"
                          />
                        ) : (
                          <span>{about.sections[1].viewMoreLabel}</span>
                        )}
                        <BsEye className="text-[yellow] mt-1" />
                      </div>
                    </button>
                  </div>

                  <div className="grid place-items-center gap-4">
                    <div className="flex justify-center">
                      {" "}
                      <img
                        src="/icons/diploma.svg"
                        alt=""
                        className="w-[60px] h-[60px]"
                      />
                    </div>
                    {isCustomizing ? (
                      <input
                        value={about.sections[2].title}
                        onChange={(e) => {
                          const sections = [...about.sections]
                          sections[2].title = e.target.value
                          setAbout({ ...about, sections: sections });
                        }}
                        className="text-[25px] font-semibold text-center mb-2 bg-transparent border-none focus:ring-0"
                      />
                    ) : (
                      <h2 className="text-center  text-[white] font-black">
                        {about.sections[2].title}
                      </h2>
                    )}
                    <button className="hover:text-[yellow] text-white grid mt-4 place-items-center bg-primary rounded-lg justify-center shadow-2xl hover:border-[yellow] hover:border">
                      <div className="flex space-x-4 items-center">
                        {isCustomizing ? (
                          <input
                            value={about.sections[2].viewMoreLabel}
                            onChange={(e) => {
                              const sections = [...about.sections]
                              sections[2].viewMoreLabel = e.target.value
                              setAbout({ ...about, sections: sections});
                            }}
                            className="text-center bg-transparent border-none focus:ring-0"
                          />
                        ) : (
                          <span>{about.sections[2].viewMoreLabel}</span>
                        )}
                        <BsEye className="text-[yellow] mt-1" />
                      </div>
                    </button>
                  </div>
                  <div className="grid place-items-center gap-4">
                    <div className="flex justify-center">
                      <img
                        src="/icons/shield.svg"
                        alt=""
                        className="w-[60px] h-[60px]"
                      />
                    </div>
                    {isCustomizing ? (
                      <input
                        value={about.sections[3].title}
                        onChange={(e) => {
                          const sections = [...about.sections]
                          sections[3].title = e.target.value
                          setAbout({ ...about, sections: sections });
                        }}
                        className="text-[25px] font-semibold text-center mb-2 bg-transparent border-none focus:ring-0"
                      />
                    ) : (
                      <h2 className="text-center text-white font-black">
                        {about.sections[3].title}
                      </h2>
                    )}
                    <button className="hover:text-[yellow] text-white grid mt-4 place-items-center bg-primary rounded-lg justify-center shadow-2xl hover:border-[yellow] hover:border">
                      <div className="flex space-x-4 items-center">
                        {isCustomizing ? (
                          <input
                            value={about.sections[3].viewMoreLabel}
                            onChange={(e) => {
                              const sections = [...about.sections]
                              sections[3].viewMoreLabel = e.target.value
                              setAbout({ ...about, sections: sections });
                            }}
                            className="text-center bg-transparent border-none focus:ring-0"
                          />
                        ) : (
                          <span>{about.sections[3].viewMoreLabel}</span>
                        )}
                        <BsEye className="text-[yellow] mt-1" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="w-full pt-16"
                ref={ref}
                style={{
                  backgroundImage: `url(${inView ? "/icons/bgwhite2_lpw73r.svg" : ""})`,
                  backgroundSize: "cover",
                  backgroundPosition: "bottom",
                }}
              >
                <div className="w-full grid place-items-center">
                  <div className="md:w-[80%] w-[91%]">
                    {isCustomizing ? (
                      <input
                        className="text-primary text-2xl text-center mt-4"
                        value={about.alumniSectionTitle}
                        onChange={(e) => {
                          setAbout({ ...about, alumniSectionTitle: e.target.value });
                        }}
                      />
                    ) : (
                      <h2 className="text-primary capitalize uppercase">
                        {about.alumniSectionTitle}
                      </h2>
                    )}
                    <hr className="w-[75px] h-1.5 bg-primary mb-4" />
                  </div>
                  <div className="md:w-[80%] my-20 py-16 flex items-start md:flex-row flex-col gap-[53px] ">
                    <div className="md:w-1/2">
                      <div className="gap-8 grid w-[91%]">
                        <div className="w-[80%] text-primary mb-4">
                          {isCustomizing ? (
                            <input
                              className="text-2xl"
                              value={about.operationalCountriesTitle}
                              onChange={(e) => {
                                setAbout({ ...about, operationalCountriesTitle: e.target.value });
                              }}
                            />
                          ) : (
                            <h2 className="">{about.operationalCountriesTitle}:</h2>
                          )}
                        </div>

                        <div className="grid grid-cols-3 gap-12 mt-4 justify-items-end">
                          {about.operationalCountries.map((detail, index) => (
                            <DecoratedList color="black" key={index} details={detail} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 flex items-center">
                      <div className="flex md:flex-row flex-col md:gap-0 gap-7 items-end">
                        <img loading="lazy"className="h-[100%]" src="/images/7.JPG" alt="" />
                      </div>
                    </div>
                  </div>
                  <div
                    className="md:w-full py-20 flex bg-green justify-center "
                    ref={ref}
                    style={{
                      backgroundImage: `url(${inView ? '/icons/lightgreen_fotidt.svg' : ''})`,
                      backgroundSize: "cover",
                      backgroundPosition: "bottom",
                    }}
                  >
                    <div className="md:w-[80%] py-16 flex md:flex-row items-start flex-col gap-[53px] ">
                      <div className="w-1/2 flex items-center">
                        <div className="flex md:flex-row flex-col md:gap-0 gap-7 items-end">
                          <img
                            className="h-[100%]"
                            src="/images/profile.JPG"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="flex justify-between md:w-1/2">
                        <div className="gap-8 grid w-[91%]">
                          <div className="w-[80%] text-primary mb-4">
                            {isCustomizing ? (
                              <input
                                className="text-2xl"
                                value={about.partnerUniversitiesTitle}
                                onChange={(e) => {
                                  setAbout({ ...about, partnerUniversitiesTitle: e.target.value });
                                }}
                              />
                            ) : (
                              <h3 className="">{about.partnerUniversitiesTitle}:</h3>
                            )}
                          </div>

                          <div className="grid grid-cols-2 gap-12 mt-4 justify-items-end">
                            {about.partnerUniversities.map((detail, index) => (
                              <DecoratedList color="black" key={index} details={detail} />
                            ))}
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="md:w-[80%] my-20 py-16 flex items-start md:flex-row flex-col gap-[53px] ">
                    <div className="flex justify-between md:w-1/2">
                      {" "}
                      <div className="gap-8 grid w-[91%]">
                        <div className="w-[80%] text-primary mb-4">
                          {isCustomizing ? (
                            <input
                              className="text-2xl"
                              value={about.achievementsTitle}
                              onChange={(e) => {
                                setAbout({ ...about, achievementsTitle: e.target.value });
                              }}
                            />
                          ) : (
                            <h3 className="">{about.achievementsTitle}:</h3>
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-12 mt-4 justify-items-end">
                          {about.achievements.map((detail, index) => (
                            <DecoratedList color="black" key={index} details={detail} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2 flex items-center">
                      <div className="flex md:flex-row flex-col md:gap-0 gap-7 items-end">
                        <img
                          className="h-[100%]"
                          src="https://greenhillsacademy.rw:8081/images/alumni_frls5b.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" flex justify-center mt-24">
                    <p className="text-gray-600 w-[80%] text-center font-bold">
                      ** We are eager to hear your success stories and
                      experiences. Reach out to us at{" "}
                      <Link
                        className="text-primary"
                        href={"mailto:marketing@greenhillsacademy.rw"}
                      >
                        marketing@greenhillsacademy.rw
                      </Link>{" "}
                      and let us know about your journey!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

const detailsArray = [
  "Rwanda",
  "USA",
  "UK",
  "Canada",
  "Holland",
  "China",
  "Germany",
  "Switzerland",
  "Poland",
  "Kenya",
  "Philippines",
];

const universitiesArray = [
  "Harvard University",
  "Massachusetts Institute of Technology (MIT)",
  "Stanford University",
  "Dartmouth College",
  "Cornell University",
  "New York University (NYU)",
  "McGill University",
  "University of Rwanda",
  "African Leadership University",
  "Kaiserslautern University",
];

const diverseArray = [
  " Technology Innovators",
  "Media Pioneers",
  "Legal Experts",
  "Entrepreneurs",
  "Medical Professionals",
  "Creative Artists",
  "Public Service Leaders",
];
