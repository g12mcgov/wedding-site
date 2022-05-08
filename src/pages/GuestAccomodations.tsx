import * as React from "react";
import { Button } from "../components/buttons/Button";
import { Container } from "../components/Container";

export const GuestAccomodations = (): JSX.Element => {
  return (
    <>
      <div className="font-cormorant-garamond text-center">
        <h1 className="mt-12 text-[#a0bbd3] sm:tracking-tight text-6xl sm:text-7xl">
          Guest Accomodations
        </h1>
      </div>
      <Container>
        <div className="font-cormorant-garamond text-center text-[#a0bbd3]">
          <a
            href="https://www.ritzcarlton.com/en/hotels/cleveland"
            target={"_blank"}
            rel="noreferrer"
          >
            <h2 className="max-w-xl mt-6 mx-auto text-5xl">The Ritz Carlton</h2>
          </a>
          <p className="max-w-xl mt-6 mx-auto text-3xl">Cleveland, Ohio</p>
          <img
            className="mx-auto my-8 sm:max-w-lg"
            src="/images/ritz_carlton.webp"
            alt="The Ritz Carlton"
          />
          <p className="max-w-xl mt-5 mx-auto text-2xl">
            Use group code "WINSTON" when making a reservation for a reduced
            rate.
          </p>
          <div className="my-12 text-xl">
            <Button
              text="Book a room"
              onClick={() =>
                window.open(
                  "https://www.ritzcarlton.com/en/hotels/cleveland",
                  "_blank"
                )
              }
            />
          </div>
        </div>
      </Container>
    </>
  );
};
