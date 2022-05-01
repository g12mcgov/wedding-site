import * as React from "react";

import { Image } from "../components/collage/Image";
import { MoreButton } from "../components/collage/MoreButton";

const { useState, useEffect } = React;

interface Props {
  limit: number;
}

export const Photos = (props: Props): JSX.Element => {
  const [photoIndex, setPhotoIndex] = useState<number>(1);
  const [photos, setPhotos] = useState([
    "/images/collage/1.jpg",
    "/images/collage/2.jpg",
    "/images/collage/3.jpg",
    "/images/collage/4.jpg",
    "/images/collage/5.jpg",
    "/images/collage/6.jpg",
    "/images/collage/7.jpg",
  ]);

  const generateRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       const slot = generateRandomNumber(0, 3);
  //       const updatedPhotos = [...photos];

  //       let index = photoIndex;
  //       if (photoIndex === props.limit) {
  //         index = 1;
  //       }

  //       updatedPhotos[slot] = `/images/collage/${index}.jpg`;
  //       index++;

  //       setPhotos([...updatedPhotos]);
  //       setPhotoIndex(index);
  //     }, 5000);
  //     return () => clearInterval(interval);
  //   }, [photos, photoIndex, props.limit]);

  return (
    <div>
      <Image className="flex bg-cover h-[600px] w-full" image={photos[0]} />
      <div className="md:flex">
        {photos.slice(1, 4).map((image, i) => (
          <Image key={`image-${i}`} className="bg-cover w-full" image={image} />
        ))}
        <Image
          className="bg-cover h-[500px] w-full flex justify-center items-center brightness-50"
          image={photos[photos.length - 1]}
        >
          <MoreButton />
        </Image>
      </div>
    </div>
  );
};
