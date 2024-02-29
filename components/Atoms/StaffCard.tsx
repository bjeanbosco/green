import Image from 'next/image'
import React from 'react'

interface StaffCardProps {
    name: string;
    title: string;
    imageUrl: string;
  }

export default function StaffCard({name, title,imageUrl}:StaffCardProps) {
  return (
      <div className="cardGrid-item">
        <div className="">
          <Image unoptimized
            placeholder="empty"
            blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
            width={0}
            height={0}
            sizes="100vw"
            src={imageUrl}
            alt="Image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="pt-4">
          <p className="font-bold sm:text-lg">{name}</p>
          <p className="md:text-lg">{title}</p>
        </div>
      </div>
  )
}
