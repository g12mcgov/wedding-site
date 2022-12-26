import * as React from "react";
import { Link } from "react-router-dom";
import { isMobile } from "../../helpers/tailwind";
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

  function handleOnMouseEnter(): void {
    setHovering(true);
  }

  function handleOnMouseLeave(): void {
    setHovering(false);
  }

  return (
    <div
      className="mt-8 h-[400px] w-full"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <Link to={`/photos/gallery/${name}`}>
        <Image
          className={`flex bg-cover h-[400px] w-full justify-center items-center ${
            isMobile() || hovering ? "brightness-50" : ""
          }`}
          image={image}
          showCarousel={false}
        >
          {(isMobile() || hovering) && (
            <h1 className="text-3xl font-cormorant-garamond text-white">
              {description}
            </h1>
          )}
        </Image>
      </Link>
    </div>
  );
};
