import * as React from "react";

import { Image } from "./Image";
import { MoreButton } from "./MoreButton";

interface Props {
  top: string;
  last: string;
  bottom: string[];
}

export const PhotoCollage = (props: Props): JSX.Element => {
  return (
    <div>
      <Image className="flex bg-cover h-[600px] w-full" image={props.top} />
      <div className="xl:flex">
        {props.bottom.map((image, i) => (
          <Image key={`image-${i}`} className="bg-cover w-full" image={image} />
        ))}
        <Image
          className="bg-cover h-[500px] w-full flex justify-center items-center brightness-50"
          image={props.last}
        >
          <MoreButton />
        </Image>
      </div>
    </div>
  );
};
