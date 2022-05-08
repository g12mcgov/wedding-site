import { Container } from "./Container";

export const WeddingOverview = (): JSX.Element => {
  return (
    <Container zIndex="-z-10">
      <div className="px-4 text-center font-cormorant-garamond text-[#a0bbd3]">
        <h1 className="my-10 mt-1 text-6xl sm:text-7xl sm:tracking-tight lg:text-8xl">
          The Wedding
        </h1>
        <p className="max-w-xl mt-5 mx-auto text-2xl">
          Attire: Formal / Cocktail
        </p>
        <h2 className="max-w-xl mt-6 mx-auto text-5xl">Ceremony & Reception</h2>
        <p className="max-w-xl mt-6 mx-auto text-3xl">The Shoreby Club</p>
        <p className="max-w-xl mt-5 mx-auto text-2xl">40 Shoreby Drive</p>
        <p className="max-w-xl mx-auto text-2xl">Bratenahl, OH 44108</p>
        <img
          className="mx-auto my-12 sm:max-w-lg"
          src="/images/shoreby_club.jpg"
          alt="The Shoreby Club"
        />
        <div className="my-10">
          <p className="max-w-xl mt-5 mx-auto text-2xl">
            There will be valet attendants to assist guests when they arrive at
            The Shoreby Club. Transportation will also be provided via a shuttle
            service between the Shoreby Club and the Ritz Carlton.
          </p>
        </div>
      </div>
    </Container>
  );
};
