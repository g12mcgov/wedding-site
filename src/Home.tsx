import * as React from "react";

import "./Home.css";
import { WeddingOverview } from "./components/WeddingOverview";

export const Home = (): JSX.Element => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen flex"
        style={{ backgroundImage: "url('proposal.jpg')" }}
      >
        <div className="m-auto">
          <h1 className="text-9xl text-white text-center font-square-peg">
            Megan & Grant
          </h1>
          <h2 className="text-6xl text-white text-center font-square-peg">
            June 24, 2023
          </h2>
          <h2 className="text-6xl text-white text-center font-square-peg">
            Cleveland, Ohio
          </h2>
        </div>
      </div>
      <WeddingOverview />
    </div>
  );
};