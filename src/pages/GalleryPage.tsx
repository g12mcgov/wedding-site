import * as React from "react";
import { useParams } from "react-router-dom";

import { Gallery } from "../components/photos/Gallery";

export const GalleryPage = (): JSX.Element => {
  const { name } = useParams();

  const getGallerySettings = (): { size: number; bannerImage: number } => {
    switch (name) {
      case "engagement":
        return { size: 82, bannerImage: 63 };
      case "cultural_gardens":
        return { size: 187, bannerImage: 6 };
      case "museum":
        return { size: 163, bannerImage: 139 };
      default:
        throw new Error(`Unknown name ${name}`);
    }
  };

  const { size, bannerImage } = getGallerySettings();

  return (
    <Gallery
      name={name}
      size={size}
      bannerImage={`/images/galleries/${name}/${bannerImage}.webp`}
    />
  );
};
