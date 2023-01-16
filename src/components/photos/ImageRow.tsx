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
      className={`transition-opacity duration-1000 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
      onContentVisible={handleOnContentVisible}
    >
      <div className={`md:grid md:grid-cols-3`}>
        {row.map((image: string, i: number) => {
          console.log(`shouldStretch(${i}): `, shouldStretch(i));
          return (
            <div className={shouldStretch(i) ? "col-span-2" : ""}>
              <Image height="600px" key={`image-${image}`} image={image} />
            </div>
          );
        })}
      </div>
    </LazyLoad>
  );
};
