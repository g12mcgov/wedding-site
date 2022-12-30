import * as React from "react";

import "./HomePage.css";
import { WeddingOverview } from "../components/WeddingOverview";
import { WeddingParty } from "../components/WeddingParty";
import { OurStory } from "../components/OurStory";
import { Winston } from "../components/Winston";
import { Banner } from "../components/Banner";

export const HomePage = (): JSX.Element => {
  return (
    <>
      <Banner />
      <Winston />
      <WeddingOverview />
      <OurStory />
      <WeddingParty />
    </>
  );
};
