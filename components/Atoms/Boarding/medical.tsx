import React from "react";
import HoverCard from "../hoverCard";
interface HoverCardProps {
  description: string;
  imageUrl: string;
}
const Medical =  ({description, imageUrl}:HoverCardProps) => {
  return (
    <div className="w-full h-full">
      <HoverCard
        description={description}
        imageUrl={imageUrl} title="medical"
    />
  </div>
  );
};

export default Medical;
