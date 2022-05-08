import * as React from "react";

import { Image } from "../components/collage/Image";
import { MoreButton } from "../components/collage/MoreButton";
import { getAllPhotoUrls, shuffle } from "../helpers/photos";

const { useState, useEffect } = React;

interface Props {
  limit: number;
}

export const Photos = (props: Props): JSX.Element => {
  const [photoIndex, setPhotoIndex] = useState<number>(1);
  const [photos, setPhotos] = useState(shuffle(getAllPhotoUrls()));

  const generateRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const slot = generateRandomNumber(0, 3);
      const updatedPhotos = [...photos];

      let index = photoIndex;
      if (photoIndex === props.limit) {
        index = 1;
      }

      updatedPhotos[slot] = `/images/collage/${index}.webp`;
      index++;

      setPhotos(updatedPhotos);
      setPhotoIndex(index);
    }, 5000);
    return () => clearInterval(interval);
  }, [photos, photoIndex, props.limit]);

  return (
    <>
      <Image
        className="animate-pulse flex bg-cover h-[600px] w-full"
        image={photos[0]}
      />
      <div className="lg:flex">
        {photos.slice(1, 4).map((image, i) => (
          <Image
            className="animate-pulse bg-cover h-[500px] w-full"
            key={`image-${i}`}
            image={image}
          />
        ))}
        <Image
          className="bg-cover h-[500px] w-full flex justify-center items-center brightness-50"
          image={photos[photos.length - 1]}
        >
          <MoreButton />
        </Image>
      </div>
    </>
  );
};
