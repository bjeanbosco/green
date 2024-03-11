import Image from "next/image";
import React from "react";
import HoverCard from "../hoverCard";
interface HoverCardProps {
  description: string;
  imageUrl: string;
}
const Behaviour =  ({description, imageUrl}:HoverCardProps) => {
  return (
    <div className="w-full h-full">
      <HoverCard
        description={description}
        imageUrl={imageUrl}
        title="behaviour"
      />
    </div>
  );
};

export default Behaviour;
