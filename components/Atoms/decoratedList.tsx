import Image from "next/image";
import React from "react";

interface ListProps {
  details: string;
  color: string;
}

const DecoratedList: React.FC<ListProps> = ({ details, color }) => {
  const parts = details.split(':');

  return (
    <div className="py-4 text-justify">
      {parts.length === 2 ? (
        <div className="w-full justify-start gap-2 flex">
        <Image
            src="/icons/mingcute_right-fill_anrax6.svg"
            alt=""
            width={16}
            height={16}
            className="w-6 h-6 mt-1"
          />
          <p className={`text-${color}`}>
            <strong className="text-primary">{parts[0]}:</strong> {parts[1]}
          </p>
        </div>
      ) : (
        <div className="w-full justify-start gap-2 flex">
        <Image
          src="/icons/mingcute_right-fill_anrax6.svg"
          alt=""
          width={16}
          height={16}
          className="w-6 h-6 mt-1"
          // layout="responsive"
        />
        <p className={`text-${color}`}>{details}</p>
      </div>
      )}
    </div>
  );
};

export default DecoratedList;
