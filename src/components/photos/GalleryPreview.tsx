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
          height="400px"
          className="absolute"
          brightness={isMobile() || hovering ? 50 : 100}
          image={image}
          showCarousel={false}
          overlay={<h1>{isMobile() || hovering ? description : ""}</h1>}
        />
      </Link>
    </div>
  );
};
