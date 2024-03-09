import Image from "next/image";
import React from "react";

interface Image {
  url: string;
  alt: string;
}

interface Props {
  images: string | string[];
  color: string;
}

const TwoSpecial: React.FC<Props> = ({ images, color }) => {
  return (
    <div className="md:w-full h-full overflow-hidden relative flex items-end">
      <Image
        unoptimized
        placeholder="empty"
        blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full left-[86px] top-0 absolute object-cover"
        src={images[0]}
        alt={"image"}
      />
      <Image
        unoptimized
        placeholder="empty"
        blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
        width={0}
        height={0}
        sizes="100vw"
        className="w-1/2 h-1/2 left-0 absolute border-8 border-white object-cover"
        src={images[1]}
        alt={"image"}
      />
    </div>
  );
};

export default TwoSpecial;
