import * as React from "react";

import { Image } from "../components/collage/Image";
import { getAllPhotoUrls, shuffle } from "../helpers/photos";
import { ImageRow } from "../components/collage/ImageRow";
import { getCurrentBreakpoints } from "../helpers/tailwind";

const { useEffect, useState } = React;

export const Photos = (): JSX.Element => {
  const [numPhotosInRow, setNumPhotosInRow] = useState<number>(
    getPhotosInRow()
  );

  const photos = shuffle(getAllPhotoUrls());

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  function handleResize(): void {
    setNumPhotosInRow(getPhotosInRow());
  }

  function isMobile(): boolean {
    const breakpoints = getCurrentBreakpoints();
    return (
      breakpoints.length === 0 ||
      (breakpoints.length === 1 && breakpoints[0] === "sm")
    );
  }

  function getPhotosInRow(): number {
    return isMobile() ? 1 : 2;
  }

  function getPhotoGrid(): Array<Array<string>> {
    let grid = [];
    let i = 0;

    while (i < photos.length) {
      grid.push(photos.slice(i, i + numPhotosInRow));
      i += numPhotosInRow;
    }

    return grid;
  }

  return (
    <>
      <Image
        className="flex bg-cover h-[600px] w-full"
        image={photos.find((image) => image.endsWith("63.webp"))}
      />
      <div>
        {getPhotoGrid().map((row, i) => (
          <ImageRow row={row} rowNumber={i} />
        ))}
      </div>
    </>
  );
};
