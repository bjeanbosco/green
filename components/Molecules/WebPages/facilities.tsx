import Image from 'next/image'
import React from 'react'
import { facilities } from "@/utils/aboutData";

const FacilitiesPage = ({ user }: any) => {
  return (
    <main className="">
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
    <section
      style={{
        backgroundImage: `url(/icons/bgwhiteyellow_mekqvs.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
      className="flex justify-center"
    >
      <div className="w-[80%] my-16 flex flex-col gap-12">
        <div className="">
          <h2 className="text-primary uppercase font-bold">
            Campus Development
          </h2>
          <p className="text-black text-justify pb-6">
            Green Hills Academy is expanding and developing its campus to
            improve the physical space for our learners. We opened our new
            Primary School in September 2022 and our new Nursery School and a
            second swimming pool for Nursery and Primary learners in September
            2023. Our Primary School and Nursery School are state-of-the-art
            facilities with spacious, light-filled classrooms, libraries, art
            rooms, activity rooms, playgrounds, playing fields and more.{" "}
          </p>
          <p className="text-black text-justify pb-6">
            During the upcoming years, GHA will construct a new
            state-of-the-art High School, Gymnasium, Sports Field, Dining Hall
            and Arts Center, which will include a Theater.
          </p>
        </div>
        <div className="">
          <h2 className="text-primary uppercase font-bold">
            WORLD-CLASS FACILITIES
          </h2>

          <p className="text-black text-justify">
            At GHA, we offer ever-expanding living and learning environments
            with our world-class boarding facilities, science and ICT labs,
            music and art rooms, gym, pool, and sports field; to provide your
            child with a comfortable and enriching environment that is created
            to make the boarders feel and participate as a family away from
            home.
          </p>
        </div>
        <div className="">
          <h2 className="text-primary uppercase font-bold">
            BOARDING SCHOOL
          </h2>

          <p className="text-black pb-6 text-justify">
            Our commitment extends beyond academics. For those who choose to
            reside on campus, our modern Boarding House accommodates nearly
            100 learners, ensuring a safe, nurturing environment. Separate
            wings for boys and girls, along with low learner-to-room ratios,
            offer individualized attention. Solar-heated water, laundry
            facilities, and a backup generator guarantee a comfortable and
            secure living experience. Our Boarding House thrives on dedicated
            House Parents and staff who provide support and supervision.
          </p>
        </div>
        <p className="text-black pb-6 text-justify">
          Weekends are a blend of relaxation and engagement, offering sports
          tournaments, service-learning projects, trips, cinema visits, and
          more. learners also have access to sports facilities, including
          football fields, a basketball gym, and a swimming pool, all under
          expert guidance.{" "}
        </p>
        <div className="w-full h-full cardGrid gap-12 my-12">
          {" "}
          {facilities.map((detail, index) => (
            <div key={index} className="h-full">
              {" "}
              <Image unoptimized
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
          ))}
        </div>
      </div>
    </section>
  </main>
  )
}

export default FacilitiesPage
