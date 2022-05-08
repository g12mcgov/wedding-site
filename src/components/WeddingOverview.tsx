import { Container } from "./Container";

export const WeddingOverview = (): JSX.Element => {
  return (
    <Container zIndex="-z-10">
      <div className="text-center">
        <h1 className="my-10 mt-1 text-6xl font-square-peg sm:text-6xl sm:tracking-tight lg:text-9xl">
          The Wedding
        </h1>
        <p className="font-square-peg max-w-xl mt-5 mx-auto text-3xl">
          Attire: Formal / Cocktail attire
        </p>
        <h2 className="font-square-peg max-w-xl mt-6 mx-auto text-5xl">
          Ceremony & Reception
        </h2>
        <p className="font-square-peg max-w-xl mt-6 mx-auto text-3xl">
          The Shoreby Club
        </p>
        <p className="font-square-peg max-w-xl mt-5 mx-auto text-3xl">
          40 Shoreby Dr, Bratenahl, OH 44108
        </p>
        <img
          className="mx-auto my-12 sm:max-w-lg"
          src="/images/shoreby_club.jpg"
          alt="The Shoreby Club"
        />
        <div className="my-10">
          <p className="font-square-peg max-w-xl mt-5 mx-auto text-3xl text-[#a0bbd3]">
            There will be valet attendants to assist guests when they arrive at
            The Shoreby Club. Transportation will also be provided via a shuttle
            service between the Shoreby Club and the Ritz Carlton.
          </p>
        </div>
      </div>
    </Container>
  );
};
