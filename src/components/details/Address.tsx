import * as React from "react";

export interface AddressProps {
  street: string;
  city: string;
  zip: string;
}

export const Address = (props: AddressProps): JSX.Element => {
  const { street, city, zip } = props;
  return (
    <>
      <p className="max-w-xl mx-auto text-2xl">{street}</p>
      <p className="max-w-xl mx-auto text-2xl">
        {city} {zip}
      </p>
    </>
  );
};
