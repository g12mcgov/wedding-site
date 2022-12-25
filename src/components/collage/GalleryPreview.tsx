import * as React from "react";
import { Image } from "./Image";

const { useState } = React;

interface Props {
  name: string;
  image: string;
  description: string;
}

export const GalleryPreview = (props: Props): JSX.Element => {
  const { name, image, description } = props;
  const [hovering, setHovering] = useState<boolean>(false);

  function handleOnClick(): void {
    window.location.href = `/photos/gallery/${name}`;
  }

  function handleOnMouseEnter(): void {
    setHovering(true);
  }

  function handleOnMouseLeave(): void {
    setHovering(false);
  }

  return (
    <div
      className="h-[400px] w-full"
      onClick={handleOnClick}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <Image
        className={`flex bg-cover h-[400px] w-full justify-center items-center ${
          hovering ? "brightness-50" : ""
        }`}
        image={image}
        showCarousel={false}
      >
        {hovering && (
          <h1 className="text-3xl font-cormorant-garamond text-white">
            {description}
          </h1>
        )}
      </Image>
    </div>
  );
};
