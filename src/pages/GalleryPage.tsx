import * as React from "react";
import { useParams } from "react-router-dom";

import { Gallery } from "../components/collage/Gallery";

export const GalleryPage = (): JSX.Element => {
  const { name } = useParams();

  const getSizeForGallery = (): number => {
    switch (name) {
      case "engagement":
        return 82;
    }
  };

  return (
    <div>
      <Gallery name={name} size={getSizeForGallery()} />
    </div>
  );
};
