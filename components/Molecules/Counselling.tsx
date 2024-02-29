import Image from "next/image";
import React from "react";

const Counselling = () => {
  return (
    <main className="">
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
            CAREER AND COLLEGE COUNSELLING
          </h1>
          <div className="h-full w-full text-justify grid grid-cols-1 md:grid-cols-2 gap-12 place-items-start">
            <div className="flex flex-col gap-4">
              <p className={`text-black`}>
                Green Hills Academy offers comprehensive career guidance and
                counselling to assist our learners in making informed
                educational and occupational choices. The department is made up
                of a Guidance counsellor and a College counsellor. The Guidance
                counsellor helps learners navigate the transition from middle
                school to Grades 9 and 10 as they delve into subject choices,
                make informed decisions about their future careers, and develop
                strategies to train and strategically position themselves in the
                world of work.
              </p>
              <p className="text-black">
                Understanding the relationship between the choice of subjects,
                and exploring their interests, values, and skills determines the
                strategies the learners put in place to achieve their goals.
              </p>
            </div>
            <div className="w-full h-full justify-start items-start gap-[22px] inline-flex">
              <div className="w-1/2 h-full flex-col justify-start items-end gap-[38px] inline-flex">
                <div className="w-full h-2 bg-primary" />
                <Image unoptimized
                  placeholder="empty"
                  blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full md:h-[50vh] object-cover object-center"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    display: "block",
                  }}
                  src="https://greenhillsacademy.rw:8081/images/GHA_139_por9ht.jpg"
                  alt="Image"
                />
              </div>
              <div className="w-1/2 h-full flex-col justify-start items-start gap-[38px] inline-flex">
                <Image unoptimized
                  placeholder="empty"
                  blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full md:h-[50vh] object-cover object-center"
                  src="https://greenhillsacademy.rw:8081/images/GHA_20_1_ibo2qv.jpg"
                  alt="Image"
                />
                <div className="w-full h-2 bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
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
          <div className="md:columns-2 columns-1 gap-12 text-justify">
            <p className={`text-white pb-4`}>
              Whilst we understand the importance of the exploration stage, we
              also prioritise safe landing in the world of work by embedding an
              array of 21st-century transferable skills in the counsellor
              sessions. We believe this gives them a head start to their future
              endeavours.
            </p>
            <p className={`text-white py-4`}>
              Career preparedness starts early in the lives of our learners
              hence we take pride in creating opportunities for our learners to
              immerse themselves and interact with different work ecosystems.
              GHA invites different professionals to share first-hand
              information from different fields. This endeavour has fostered
              active and open-minded collaboration with learners, parents, and
              the community at large.
            </p>
            <p className={`text-white py-4`}>
              The College Counselor, on the other hand, prepares and readies
              learners for college and beyond. They are guided and advised to
              sit for Standardised Tests (ACT & SAT) and English proficiency
              tests (TOEFL, IELTS & Duolingo) as some universities and colleges
              may require them during admission. Learners are encouraged to
              research and find good-fit universities and financial aid. Through
              individual and group counsellor, they are given information about
              study options after graduation. It is here that learners are
              exposed to various application portals like CommonApp, Coalition,
              UCAS, Studielink, OUAC, bridgeU, and many more. The college
              counsellor must support all learners through the application
              process besides writing strong letters of recommendation,
              submitting transcripts, compiling and sending predicted grades to
              universities, and reviewing learners’ essays as they seek to
              submit water-tight applications to universities. Additionally, the
              college counsellor helps learners to apply for and secure
              internships with various partners and companies. The college
              counselling is designed to help and assist learners as they
              navigate this journey and map their future.
            </p>
            <p className={`text-white py-4`}>
              Through hosting university fairs, and inviting university
              representatives or admission officers from various universities,
              learners get vital first-hand admission information from them.
              They can ask questions regarding the admission requirements,
              tuition fees, and available scholarships. This program supports
              learners even after graduation and endeavours to maintain a strong
              alumni network who are always encouraged to give back to the GHA
              community through mentorship.
            </p>
          </div>
        </div>
      </section>
      <section
        className="w-full flex justify-center"
        style={{
          backgroundImage: `url(${"/icons/bgwhite2_lpw73r.svg"}`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[80%] flex flex-col gap-8 py-16">
          <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-12 place-items-start">
            <div className="flex flex-col gap-4 text-justify">
              <h2 className="text-primary capitalize">
                SOCIAL-EMOTIONAL COUNSELLING
              </h2>

              <p className={`text-black`}>
                Green Hills Academy takes the mental health and well-being of
                its learners and staff very seriously. GHA employs trained
                counsellors to assist learners, staff, and families in all
                matters related to mental health and well-being.
              </p>
              <p className="text-black">
                Our social-emotional counsellors aim to help learners of all
                ages to better comprehend their emotions, feel those emotions
                fully, and demonstrate empathy for others.
              </p>
              <p className={`text-black`}>
                All children are welcome to visit the counsellor, regardless of
                their situation. We maintain the confidentiality of the learner
                unless we believe someone is in harm’s way, either the learner
                or another, or a child is experiencing child abuse.
              </p>
              <p className="text-black">
                In these instances, the counsellor must inform the Head of
                School within the same school day so the next steps can be
                discussed and decided upon.
              </p>
              <p>
                {" "}
                We offer one-on-one counselling, small group counselling,
                conflict resolution, and education and awareness-raising.
              </p>
              <p className="">
                Learners may be referred to the counsellor by a parent, staff
                member, or other learners, and all referrals are taken
                seriously. The counsellors also have an open-door policy, where
                any learner is welcome to visit with or without an appointment.
              </p>
            </div>
            <div>
              <div className="w-full h-full justify-start items-start gap-[22px] inline-flex">
                <div className="w-1/2 h-full flex-col justify-start items-end gap-[38px] inline-flex">
                  <div className="w-full h-2 bg-primary" />
                  <Image unoptimized
                    placeholder="empty"
                    blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full md:h-[50vh] object-cover object-center"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      display: "block",
                    }}
                    src="https://greenhillsacademy.rw:8081/images/GHA_237_k8x35u.jpg"
                    alt="Image"
                  />
                </div>
                <div className="w-1/2 h-full flex-col justify-start items-start gap-[38px] inline-flex">
                  <Image unoptimized
                    placeholder="empty"
                    blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full md:h-[50vh] object-cover object-center"
                    src="https://greenhillsacademy.rw:8081/images/GHA_9_yemcwp.jpg"
                    alt="Image"
                  />
                  <div className="w-full h-2 bg-primary" />
                </div>
              </div>

              <div className="w-full h-full justify-start items-start gap-[22px] inline-flex">
                <div className="w-1/2 h-full flex-col justify-start items-end gap-[38px] inline-flex">
                  <div className="w-full h-2 bg-primary" />
                  <Image unoptimized
                    placeholder="empty"
                    blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full md:h-[50vh] object-cover object-center"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      display: "block",
                    }}
                    src="https://greenhillsacademy.rw:8081/images/GHA_178_hguot7.jpg"
                    alt="Image"
                  />
                </div>
                <div className="w-1/2 h-full flex-col justify-start items-start gap-[38px] inline-flex">
                  <Image unoptimized
                    placeholder="empty"
                    blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full md:h-[50vh] object-cover object-center"
                    src="https://greenhillsacademy.rw:8081/images/276061831_992170084771751_3991068514308903998_n_yn7swk.jpg"
                    alt="Image"
                  />
                  <div className="w-full h-2 bg-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Counselling;
