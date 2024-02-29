import Image from 'next/image'
import React from 'react'

const BoardingPage = ({ user }: any) => {
  return (
    <main className="w-full">
      <section className="md:relative md:h-[85vh] w-full overflow-hidden">
        {/* Background Video */}
        <div className="md:absolute inset-0 w-full h-full overflow-hidden">
          <div className="aspect-w-16 aspect-h-9">
            <video
              autoPlay
              muted
              loop
              className="object-cover w-full h-full"
            >
              <source src={`https://greenhillsacademy.rw:8081/videos/videos/GHA_Boarding_Higlights_v1.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="flex justify-center w-full">
          <div className="w-[80%] h-full flex flex-col gap-8 pt-16">
            <p className="text-center text-justify">
              The Boarding House at Green Hills Academy is a modern,
              purpose-built accommodation with a capacity of nearly 100
              boarders. Its success lies in the clear behavioral expectations,
              the wide range of activities, and the safe and nurturing
              environment that is created to make the boarders feel and
              participate as a family away from home. There are separate wings
              for boys and girls, and the number of learners in each room is
              usually four. The facilities have solar-heated water, and laundry
              facilities, and are connected to the school’s large generator to
              ensure continued power supply.
            </p>
          </div>
        </div>
      </section>
      <section
        className="flex justify-center h-[100%] items-center"
        style={{
          backgroundImage: `url(${"/icons/white2_qkbyoe.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[80%] h-full flex flex-col items-center gap-8 py-16">
          <h1 className="text-primary font-bold text-center">
            Three Boarding Options
          </h1>
          <div className="grid md:grid-cols-2 gap-12 my-4">
            <div className="w-full h-full justify-start items-start gap-[22px] inline-flex">
              <div className="w-1/2 h-full flex-col justify-start items-end gap-[38px] inline-flex">
                <div className="w-full h-2 bg-primary" />
                <Image unoptimized
                  placeholder="empty"
                  blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full md:h-[50vh] sm:h-[20vh] object-cover object-center"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    display: "block",
                  }}
                  src="https://greenhillsacademy.rw:8081/images/GHA_95_r9pjfo.jpg"
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
                  className="w-full md:h-[50vh] sm:h-[20vh] object-cover object-center"
                  src="https://greenhillsacademy.rw:8081/images/398576963_882355820562210_7982080702012160024_n_osqpve.jpg"
                  alt="Image"
                />
                <div className="w-full h-2 bg-primary" />
              </div>
            </div>
            <div className="w-full h-full flex flex-col gap-12">
              <div className="w-full">
                <div className="flex gap-4 items-center">
                  <div className="md:h-12 h-6 w-6 md:w-12">
                    <Image unoptimized
                      placeholder="empty"
                      blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                      src="/icons/international_new_qrcqda.svg"
                      alt="Image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="capitalize text-primary font-bold">
                    Full-Time Boarding
                  </h2>
                </div>
              </div>
              <p className="w-full text-justify">
                Full-time boarding is where the pupil stays at the boarding
                house on weekdays and weekends. It is within full boarding that
                learners can achieve a strong balance between academics, sports,
                activities, service, living skills, and socialization. The
                majority of our learners who are elected for leadership roles
                are full boarders.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="flex bg-green justify-center h-full w-full text-black"
        style={{
          backgroundImage: `url(${"/icons/lightgreen2_xytlj8.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      >
        <div className="w-[80%] h-full flex flex-col gap-8 py-16">
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12">
              <Image unoptimized
                placeholder="empty"
                blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                src="/icons/success_r5s8te.svg"
                alt="Image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="capitalize font-bold text-primary">
              Weekday Boarding
            </h2>
          </div>
          <div className="grid md:grid-cols-2 w-full h-full gap-12">
            <div className="w-full h-full flex flex-col gap-12">
              <p className="w-full pb-4 text-justify">
                Learners attend boarding for school days only. Learners return
                home on Fridays (or the afternoon before holidays) before 5 pm
                and return to boarding by Sunday (or the opening of boarding)
                between 5 pm and 7 pm. Whilst residing in the boarding house
                learners have the rights and responsibilities of full-time
                boarders.
              </p>
              <p className="w-full pb-6 text-justify">
                Weekday boarding is a good option for parents who are available
                to supervise and care for their children on the weekend. Weekday
                boarders have the opportunity to stay for certain weekends and
                join set activities. A weekday boarder participates in the
                program to a large extent but misses out on the majority of the
                activity program and weekend activities.
              </p>
            </div>
            <div className="w-full h-full justify-start items-start gap-[22px] inline-flex">
              <div className="w-1/2 h-full flex-col justify-start items-end gap-[38px] inline-flex">
                <div className="w-full h-2 bg-primary" />
                <div className="single-image-content w-full">
                  <div className="image md:h-[50vh] sm:h-[20vh] ">
                    <Image unoptimized
                      placeholder="empty"
                      blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="object-center object-cover w-full h-full"
                      src="https://greenhillsacademy.rw:8081/images/GHA_63_kejfdv.jpg"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
              <div className="w-1/2 h-full flex-col justify-start items-start gap-[38px] inline-flex">
                <div className="single-image-content w-full">
                  <div className="image md:h-[50vh] sm:h-[20vh] ">
                    <Image unoptimized
                      placeholder="empty"
                      blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full md:h-full"
                      src="https://greenhillsacademy.rw:8081/images/b04_m4hkom.jpg"
                      alt="Image"
                    />
                  </div>
                </div>
                <div className="w-full h-2 bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="flex w-full h-[100%] justify-center"
        style={{
          backgroundImage: `url(${"/icons/white2_qkbyoe.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[80%] md:h-[100vh] flex items-center">
          <div className="w-full grid md:grid-cols-2 sm:grid-cols-1 gap-16">
            <div className="w-full flex items-center relative">
              <div className="w-1/4 my-4 h-full left-0 top-0 absolute bg-primary" />
              <div className="w-full h-[80%] left-[31px] absolute">
                <div className="bgImageContainer">
                  <div className={"inner"}>
                    <div className="single-image-content w-full">
                      <div className="image md:h-full ">
                        <img
                          src="https://greenhillsacademy.rw:8081/images/GHA_82_c4tohw.jpg"
                          alt="Image"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full">
                <div className="flex gap-4 items-center">
                  <div className="md:h-12 h-6 w-6 md:w-12">
                    <Image unoptimized
                      placeholder="empty"
                      blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
                      src="/icons/international_new_qrcqda.svg"
                      alt="Image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="capitalize text-primary font-bold">
                    Short-Term Boarding
                  </h2>
                </div>
              </div>
              <p className="w-full pb-6 text-justify">
                Short-term boarding is for a set, limited period of time.
                Short-term boarders participate fully in the program and have
                all the rights and responsibilities of the full boarder for that
                set period.
              </p>
              <p className="w-full pb-6 text-justify">
                We believe that the overall benefit of Boarding at Green Hills
                Academy above being a day learner is that the learning continues
                after the bell. Amongst their peers and supportive staff,
                learners have the opportunity to grow into young adults with a
                strong foundation. Green Hills Academy Boarding can be used as a
                learning path for university, careers, and travel in an
                environment where learners are safe and protected, encouraged to
                try new things, learn, and become the best version of
                themselves.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="flex justify-center"
        style={{
          backgroundImage: `url(${"/icons/lightgreen2_xytlj8.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      >
        <div className="w-[80%] h-full flex flex-col items-center gap-8 py-16">
          <h1 className="text-primary text-center capitalize">
            Welcome To Boarding School
          </h1>
          <div className="grid md:grid-cols-2 py-16 sm:grid-cols-1 w-full gap-12 justify-between">
            <div className="w-full h-full">
              <h3 className="text-primary mb-4 font-bold capitalize">
                Raymond Kiptum, Boarding School Director
              </h3>
              <p className="pb-6 text-justify">
                At Greenhills Academy, we are dedicated to providing an
                exceptional boarding experience, and our Head of Boarding is at
                the heart of this commitment. Their role is instrumental in
                shaping the experiences and future success of our learners,
                ensuring that every boarder feels valued, safe, and encouraged
                to reach their full potential.
              </p>
              <p className="pb-6 text-justify">
                Raymond Kiptum, the head of boarding is a trusted mentor and a
                compassionate advocate for our learners. They work closely with
                our boarding staff to create a home away from home, where
                learners can thrive both academically and socially. The Head of
                Boarding also collaborates with parents, educators, and
                administrators to build a strong support network for our
                borders. Raymond has over 12 years of experience in managing
                international boarding schools. He is also an experienced
                educator of Business Management and Economics.
              </p>
              <p className="text-justify">
                Mr Raymond shares our passion for the well-being and success of
                our learners and upholds our school's values of excellence,
                respect, and community.
              </p>
            </div>
            <div className="h-full w-full">
              <img
                src="https://greenhillsacademy.rw:8081/images/GHA_2_jhakmk.jpg"
                alt="Image"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default BoardingPage
