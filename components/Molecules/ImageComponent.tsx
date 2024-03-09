// components/ImageComponent.tsx

import React from 'react';
import One from '../Atoms/ImageDesign/One';
import Two from '../Atoms/ImageDesign/Two';
import Three from '../Atoms/ImageDesign/Three';
import Four from '../Atoms/ImageDesign/Four';
import TwoSpecial from '../Atoms/ImageDesign/TwoSpecial';


interface Props {
  images: string | string[];
  color: string
  special?:boolean
}

const ImageComponent: React.FC<Props> = ({ images, color, special }) => {
  const getDesign = (imagesLength: number) => {
    if (imagesLength === 1) {
      return <One image={images[0]} color={color} />;
    } else if (imagesLength === 2) {
      return special? <TwoSpecial images={images}  color={color}/> : <Two images={images}  color={color}/>;
    } else if (imagesLength === 3) {
      return <Three images={images}  color={color}/>;
    } else {
      return <Four images={images}  color={color}/>;
    }
  };

  return <div>{getDesign(images.length)}</div>;
};

export default ImageComponent;
