import * as React from "react";
import { Address, AddressProps } from "./Address";

interface Props {
  url: string;
  name: string;
  img?: string;
  description?: string;
  subtext?: string;
  address: AddressProps;
}

export const Attraction = (props: Props): JSX.Element => {
  const { url, name, img, description, subtext, address } = props;
  return (
    <div className="my-12">
      {img && <img className="mx-auto sm:max-w-md" src={img} alt={name} />}
      <a href={url} target="_blank" rel="noreferrer">
        <h3 className="max-w-xl mt-12 mx-auto text-3xl">{name}</h3>
      </a>
      {description && (
        <p className="max-w-xl mt-2 mx-auto text-xl italic">{description}</p>
      )}
      {subtext && (
        <p className="max-w-xl mt-2 mx-auto text-lg italic">{subtext}</p>
      )}
      <div className="mt-4">
        <Address {...address} />
      </div>
    </div>
  );
};
