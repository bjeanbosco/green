// components/ImageDesign/Three.tsx

import Image from "next/image";
import React from "react";


interface Props {
  images: string| string[];
  color: string;
}

const Three: React.FC<Props> = ({ images, color }) => {
  return (
    <div className="w-full h-full justify-start items-start gap-[19px] inline-flex">
      <Image
        unoptimized
        placeholder="empty"
        blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
        width={0}
        height={0}
        sizes="100vw"
        className="w-1/2 h-full object-cover"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          display: "block",
        }}
        src={images[0]}
        alt={images[0]}
      />
      <div className="flex-col w-1/2 h-full justify-start items-start gap-2.5 inline-flex">
        <Image
          unoptimized
          placeholder="empty"
          blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            display: "block",
          }}
          src={images[1]}
          alt={images[1]}
        />
        <Image
          unoptimized
          placeholder="empty"
          blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full object-cover"
          src={images[2]}
          alt={images[2]}
        />
      </div>
    </div>
  );
};

export default Three;
