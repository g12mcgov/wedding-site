import * as React from "react";

import { Image } from "../components/collage/Image";
import { getAllPhotoUrls, shuffle } from "../helpers/photos";
import { ImageRow } from "../components/collage/ImageRow";
import { randomInteger } from "../helpers/math";

export const Photos = (): JSX.Element => {
  const photos = shuffle(getAllPhotoUrls());
  let grid = [];

  // 4 photos per row
  let i = 0;
  while (i < photos.length) {
    const numPhotosInRow = randomInteger(2, 2);
    grid.push(photos.slice(i, i + numPhotosInRow));
    i += numPhotosInRow;
  }

  return (
    <>
      <Image
        className="flex bg-cover h-[600px] w-full"
        image={photos.find((image) => image.endsWith("63.webp"))}
      />
      <div>
        {grid.map((row, i) => (
          <ImageRow row={row} key={`row-${i}`} />
        ))}
      </div>
    </>
  );
};
