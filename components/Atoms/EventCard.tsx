import React, { useRef, useState } from "react";
import Image from "next/image";
import Button from "./Button";
import { useTransform, motion, useScroll } from "framer-motion";


interface EventCardProps {
  title: string;
  date: string;
  description: string;
  imageUrl: string[];
  slug: string;
  type: string;
  videoUrl?: string;
}

const EventCard = ({
  description,
  imageUrl,
  slug,
  title,
}: EventCardProps) => {
  // Split description into paragraphs based on line breaks
  const paragraphs = description!.split(/\n\s*\n/);

  // Extract the first 30 words from the first paragraph
  const truncatedDescription = paragraphs[0].split(" ").slice(0, 20).join(" ");

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);


  return (
    <div
    ref={container}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url("/icons/green_c6iapo.svg"
      )`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full bg-green p-4 gap-8 border rounded-xl shadow-lg"
    >
      <div className="flex justify-between flex-col h-full">
        <div>
          <div className="h-[300px]">
          <div className="bgImageContainer">
                  <motion.div className={"inner"} style={{ scale: imageScale }}>
                    <img
              src={Array.isArray(imageUrl) ? imageUrl[0] : imageUrl}
              alt="Image"
            />
            </motion.div>
                </div>
          </div>

          <div className="mt-4 flex-col justify-start items-start gap-1 inline-flex">
            <h4 className="font-bold text-[yellow]">{title}</h4>
          </div>
          {/* <div className="mt-2 text-white flex flex-row justify-start gap-1 items-center">
            <BiCalendar />
            <p className="text-sm">{date}</p>
          </div> */}
          <p className=" mt-2 text-white font-normal text-justify">
            {truncatedDescription}...
          </p>
        </div>
        <div className="mt-12">
          <Button
            action={`/news/${slug}?tab=events`}
            name="View More"
            background="#fff"
            border="1px solid var(--color-border)"
            color="#018c79"
          />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
