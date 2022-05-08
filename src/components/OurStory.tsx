import { Container } from "./Container";

export const OurStory = (): JSX.Element => {
  return (
    <Container>
      <div className="px-4">
        <div className="text-center">
          <h1 className="my-10 mt-1 text-7xl font-square-peg text-[#b1c2d1] sm:text-6xl sm:tracking-tight lg:text-9xl">
            Our Story
          </h1>
        </div>
        <img
          className="mx-auto my-12 max-w-sm"
          src="/images/wait_chapel.webp"
          alt="Megan & Grant"
        />
        <div className="my-10">
          <p className="font-square-peg max-w-xl mt-5 mx-auto text-3xl text-[#a0bbd3]">
            Megan and Grant met at their beloved alma matter, Wake Forest
            University in the Fall of 2014. They remained friends throughout
            college, often crossing paths while going on runs around the Wake
            Forest campus. However, it wasn't until the end of their Senior year
            when they began to hit things off.
          </p>
          <p className="font-square-peg max-w-xl mt-5 mx-auto text-3xl text-[#a0bbd3]">
            Fast forward six years, Megan and Grant now live in New York York
            City with their corgi, Winston. Megan is a Vice President in the
            financial industry and Grant is a Software Engineer.
          </p>
          <p className="font-square-peg max-w-xl mt-5 mx-auto text-3xl text-[#a0bbd3]">
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
