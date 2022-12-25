import React from "react";
import { Image } from "./Image";
import LazyLoad from "react-lazy-load";
import { randomInteger } from "../../helpers/math";

interface Props {
  key: string;
  row: Array<string>;
}

export const ImageRow = (props: Props): JSX.Element => {
  const { row, key } = props;
  const imageToStretch = randomInteger(0, 1);

  const shouldStretch = (index: number): boolean => {
    return row.length === 2 && index === imageToStretch;
  };

  return (
    <LazyLoad height={500} key={key}>
      <div className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
        {row.map((image: string, i: number) => (
          <Image
            className={`bg-cover h-[500px] w-full ${
              shouldStretch(i) ? "md:col-span-2" : ""
            }`}
            key={`image-${image}`}
            image={image}
          />
        ))}
      </div>
    </LazyLoad>
  );
};
