import * as React from "react";
import { Container } from "../components/Container";

export const Details = (): JSX.Element => {
  return (
    <>
      <div className="font-cormorant-garamond text-center">
        <h1 className="mt-12 text-[#a0bbd3] sm:tracking-tight text-6xl sm:text-7xl">
          Details
        </h1>
      </div>
      <Container>
        <>
          <div className="font-cormorant-garamond text-center text-[#a0bbd3]">
            <h2 className="max-w-xl mt-6 mx-auto text-5xl">Things To Do</h2>
          </div>
        </>
      </Container>
    </>
  );
};
