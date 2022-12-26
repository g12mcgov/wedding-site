import React from "react";
import { Image } from "./Image";
import LazyLoad from "react-lazy-load";
import { randomInteger } from "../../helpers/math";

const { useState } = React;

interface Props {
  rowNumber: number;
  row: Array<string>;
}

export const ImageRow = (props: Props): JSX.Element => {
  const [fadeIn, setFadeIn] = useState<boolean>(false);

  const { row, rowNumber } = props;
  const imageToStretch = randomInteger(0, 1);

  const shouldStretch = (index: number): boolean => {
    return index === imageToStretch;
  };

  function handleOnContentVisible(): void {
    setFadeIn(true);
  }

  return (
    <LazyLoad
      height={600}
      key={`row-${rowNumber}`}
      onContentVisible={handleOnContentVisible}
    >
      <div className={`md:grid md:grid-cols-3`}>
        {row.map((image: string, i: number) => (
          <Image
            className={`transition-all duration-500 ${
              fadeIn ? "opacity-100" : "opacity-0"
            } bg-cover h-[600px] w-full ${
              shouldStretch(i) ? "col-span-2" : ""
            }`}
            key={`image-${image}`}
            image={image}
          />
        ))}
      </div>
    </LazyLoad>
  );
};
