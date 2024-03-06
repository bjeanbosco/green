
import React from 'react';

interface Image {
  url: string;
  alt: string;
}

interface Props {
  images: string| string[];
  color: string;
}

const Two: React.FC<Props> = ({ images, color }) => {
  return (
    <div className="flex sm:flex-wrap gap-12 items-center w-full">
      <div className="w-full h-full justify-start items-start gap-[22px] inline-flex">
        <div className="w-1/2 h-full flex-col justify-start items-end gap-[38px] inline-flex">
          <div className={`w-full h-2 bg-${color}`} />
          <img
            src={images[0]}
            alt={images[0]}
            className="w-full md:h-[50vh] object-cover object-center"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              display: "block",
            }}
          />
        </div>
        <div className="w-1/2 h-full flex-col justify-start items-start gap-[38px] inline-flex">
          <img
            src={images[1]}
            alt={images[1]}
            className="w-full md:h-[50vh] object-cover object-center"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              display: "block",
            }}
          />
          <div className={`w-full h-2 bg-${color}`} />
        </div>
      </div>
    </div>
  );
};

export default Two;
