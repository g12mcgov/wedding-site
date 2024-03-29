import * as React from "react";

import { Image } from "./Image";

interface Props {
  top: string;
  last: string;
}

export const PhotoCollage = (props: Props): JSX.Element => {
  return (
    <div>
      <Image height="h-[600px]" image={props.top} />
      <div className="xl:flex">
        <Image
          height="h-[500px]"
          brightness="brightness-50"
          image={props.last}
        />
      </div>
    </div>
  );
};
