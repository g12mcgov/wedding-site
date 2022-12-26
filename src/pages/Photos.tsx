import * as React from "react";

import { GalleryPreview } from "../components/collage/GalleryPreview";

export const Photos = (): JSX.Element => {
  return (
    <div className="font-cormorant-garamond">
      <div className="text-center">
        <h1 className="mt-12 text-[#a0bbd3] sm:tracking-tight text-6xl sm:text-7xl">
          Photo Galleries
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-8 my-4 sm:my-16 px-4">
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
      <div className="flex flex-col sm:flex-row items-center justify-center space-x-2 text-[#a0bbd3] mt-12 sm:mt-24 sm:mb-16 text-md">
        <a
          href="https://www.sparklephoto.com/"
          target="_blank"
          rel="noreferrer"
        >
          2021 Sparkle Photography
        </a>
        <span className="hidden sm:block text-2xl">•</span>
        <a
          href="https://belindajeanphotography.com/"
          target="_blank"
          rel="noreferrer"
        >
          2022 Belinda Jean Photography
        </a>
      </div>
    </div>
  );
};
