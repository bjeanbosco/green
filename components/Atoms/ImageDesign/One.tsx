// components/ImageDesign/One.tsx

import React from "react";
import Image from "next/image";



interface Props {
  image: string;
  color: string;
}

const One: React.FC<Props> = ({ image, color }) => {
  return (
    <div className="w-full h-full flex items-center relative">
      <div className={`w-1/4 my-4 h-full left-0 top-0 absolute bg-${color}`} />
      <div className="w-full h-[80%] left-[31px] absolute">
        <div className="bgImageContainerHead">
          <div className="inner">
            <Image
              unoptimized
              placeholder="empty"
              blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
              width={0}
              height={0}
              sizes="100vw"
              className=""
              src={image}
              alt={image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;
