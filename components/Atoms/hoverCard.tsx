import React from "react";
import Image from "next/image";

interface HoverCardProps {
  description: string;
  imageUrl: string;
  title?: string;
}

const HoverCard = ({ description, imageUrl, title }: HoverCardProps) => {

  return (
      <div className="md:header-content sm:grid p-8">
        <div className="w-full image-content">
          <div
            className="image md:w-[300px] h-[300px]"
          >
            <Image unoptimized
              placeholder="empty"
              blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
              src={imageUrl}
              alt={title ? title : "Image"}
              className="object-center object-cover w-full h-full"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
        <div className="text-content">
          <p className="text-justify font-normal font-['Outfit']">
            {description}
          </p>
        </div>
      </div>
  );
};

export default HoverCard;
