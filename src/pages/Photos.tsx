import * as React from "react";

import { GalleryPreview } from "../components/collage/GalleryPreview";

export const Photos = (): JSX.Element => {
  return (
    <>
      <div className="font-cormorant-garamond text-center">
        <h1 className="mt-12 text-[#a0bbd3] sm:tracking-tight text-6xl sm:text-7xl">
          Photo Galleries
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-8 my-16 px-8">
        <GalleryPreview
          name="engagement"
          description="Engagement"
          image="/images/galleries/engagement/63.webp"
        />
        <GalleryPreview
          name="cultural_gardens"
          description="Cleveland Cultural Gardens"
          image="/images/galleries/cultural_gardens/6.webp"
        />
        <GalleryPreview
          name="museum"
          description="Cleveland Museum of Art"
          image="/images/galleries/museum/139.webp"
        />
      </div>
    </>
  );
};
