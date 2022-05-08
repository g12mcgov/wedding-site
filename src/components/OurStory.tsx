import { Container } from "./Container";

export const OurStory = (): JSX.Element => {
  return (
    <Container>
      <div className="px-4">
        <div className="text-center font-cormorant-garamond">
          <h1 className="my-10 mt-1 text-6xl text-[#b1c2d1] sm:text-6xl sm:tracking-tight">
            Our Story
          </h1>
        </div>
        <img
          className="mx-auto my-12 sm:max-w-sm"
          src="/images/wait_chapel.webp"
          alt="Megan & Grant"
        />
        <div className="font-cormorant-garamond text-2xl text-[#a0bbd3] my-10">
          <p className="max-w-xl mt-5 mx-auto">
            Megan and Grant met at their beloved alma matter, Wake Forest
            University in the Fall of 2014. They remained friends throughout
            college, often crossing paths while going on runs around the Wake
            Forest campus. However, it wasn't until the end of their Senior year
            when they began to hit things off.
          </p>
          <p className="max-w-xl mt-5 mx-auto">
            Fast forward six years, Megan and Grant now live in New York York
            City with their corgi, Winston. Megan is a Vice President in the
            financial industry and Grant is a Software Engineer.
          </p>
          <p className="max-w-xl mt-5 mx-auto">
            In their spare time, they can be found skiing a new mountain out
            West, exploring new restaurants, or finding a new dog park for
            Winston. They are lovers of reading (particularly by the beach),
            weekend getaways, and Benihana. Megan is a passionate marathon
            runner and Grant is an avid cyclist.
          </p>
        </div>
      </div>
    </Container>
  );
};
