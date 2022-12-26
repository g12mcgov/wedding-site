import * as React from "react";
import { Container } from "../components/Container";

export const Details = (): JSX.Element => {
  return (
    <>
      <div className="font-cormorant-garamond text-center">
        <h1 className="mt-6 text-[#a0bbd3] sm:tracking-tight text-6xl sm:text-7xl">
          Details
        </h1>
      </div>
      <Container>
        <div className="mb-12">
          <div className="font-cormorant-garamond text-center text-[#a0bbd3]">
            <h2 className="max-w-xl mt-6 mx-auto text-5xl">Schedule</h2>
            <h3 className="max-w-xl mt-12 mx-auto text-3xl">
              Friday, June 23, 2023
            </h3>
            <p className="max-w-xl mt-5 mx-auto text-2xl">
              8:00pm - Welcome Drinks
            </p>
            <p className="max-w-xl mt-5 mx-auto text-2xl">The Ritz Carlton</p>
            <p className="max-w-xl mx-auto text-2xl">1515 W 3rd Street</p>
            <p className="max-w-xl mx-auto text-2xl">Cleveland, OH 44113</p>
            <h3 className="max-w-xl mt-12 mx-auto text-3xl">
              Saturday, June 24, 2023
            </h3>
            <p className="max-w-xl mt-5 mx-auto text-2xl">
              5:00pm - Wedding Ceremony
            </p>
            <p className="max-w-xl mt-2 mx-auto text-xl italic">
              Cocktails, dinner, and dancing to follow
            </p>
            <p className="max-w-xl mt-5 mx-auto text-2xl">The Shoreby Club</p>
            <p className="max-w-xl mx-auto text-2xl">40 Shoreby Drive</p>
            <p className="max-w-xl mx-auto text-2xl">Bratenahl, OH 44108</p>
          </div>
          <div className="font-cormorant-garamond text-center text-[#a0bbd3]">
            <h2 className="max-w-xl mt-20 mx-auto text-5xl">Things To Do</h2>
            <h3 className="max-w-xl mt-12 mx-auto text-3xl">
              Recommended Dining:
            </h3>
            <a
              href="https://gomarestaurant.com/"
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="max-w-xl mt-6 mx-auto text-3xl">Goma</h3>
            </a>
            <p className="max-w-xl mt-2 mx-auto text-xl italic">
              Japanese, Sushi, Izayaka
            </p>
            <p className="max-w-xl mx-auto text-2xl">1515 W 3rd Street</p>
            <p className="max-w-xl mx-auto text-2xl">Cleveland, OH 44113</p>
            <a
              href="https://www.marbleroomcle.com/"
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="max-w-xl mt-12 mx-auto text-3xl">
                The Marble Room
              </h3>
            </a>
            <p className="max-w-xl mt-2 mx-auto text-xl italic">
              Steaks, Chops, Sushi
            </p>
            <p className="max-w-xl mx-auto text-2xl">623 Euclid Ave</p>
            <p className="max-w-xl mx-auto text-2xl">Cleveland, OH 44114</p>
            <a
              href="https://www.valeriosristorante.com/"
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="max-w-xl mt-12 mx-auto text-3xl">Valerio's</h3>
            </a>
            <p className="max-w-xl mt-2 mx-auto text-xl italic">
              Italian, pasta, steaks
            </p>
            <p className="max-w-xl mx-auto text-2xl">12405 Mayfield Rd</p>
            <p className="max-w-xl mx-auto text-2xl">Cleveland, OH 44106</p>
          </div>
        </div>
      </Container>
    </>
  );
};
