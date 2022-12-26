import * as React from "react";

import { Image } from "../../components/collage/Image";
import { getAllPhotoUrls, shuffle } from "../../helpers/photos";
import { ImageRow } from "../../components/collage/ImageRow";
import { isMobile } from "../../helpers/tailwind";

const { useEffect, useState } = React;

interface Props {
  name: string;
  size: number;
  bannerImage: string;
}

export const Gallery = (props: Props): JSX.Element => {
  const { name, size, bannerImage } = props;

  const [numPhotosInRow, setNumPhotosInRow] = useState<number>(
    getPhotosInRow()
  );

  const photos = shuffle(getAllPhotoUrls(name, size));

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  function handleResize(): void {
    setNumPhotosInRow(getPhotosInRow());
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
      <Image className="flex bg-cover h-[600px] w-full" image={bannerImage} />
      <div>
        {getPhotoGrid().map((row, i) => (
          <ImageRow row={row} rowNumber={i} />
        ))}
      </div>
    </>
  );
};
