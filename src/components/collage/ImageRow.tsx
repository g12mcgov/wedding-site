import React from "react";
import { Image } from "./Image";
import LazyLoad from "react-lazy-load";
import { randomInteger } from "../../helpers/math";

interface Props {
  rowNumber: number;
  row: Array<string>;
}

export const ImageRow = (props: Props): JSX.Element => {
  const { row, rowNumber } = props;
  const imageToStretch = randomInteger(0, 1);

  const shouldStretch = (index: number): boolean => {
    return index === imageToStretch;
  };

  return (
    <LazyLoad height={500} key={`row-${rowNumber}`}>
      <div className={`md:grid md:grid-cols-3`}>
        {row.map((image: string, i: number) => (
          <Image
            className={`bg-cover h-[500px] w-full ${
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
