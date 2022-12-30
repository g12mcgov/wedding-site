import * as React from "react";

export interface AddressProps {
  street: string;
  city: string;
  zip: string;
}

export const Address = (props: AddressProps): JSX.Element => {
  const { street, city, zip } = props;

  const formatAddress = (): string => {
    return `${street}, ${city}, ${zip}`;
  };

  return (
    <a
      href={`http://maps.google.com/?q=${formatAddress()}`}
      target="_blank"
      rel="noreferrer"
    >
      <p className="max-w-xl mx-auto text-2xl">{street}</p>
      <p className="max-w-xl mx-auto text-2xl">
        {city} {zip}
      </p>
    </a>
  );
};
