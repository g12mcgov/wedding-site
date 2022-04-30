import { Container } from "./Container";

export const OurStory = (): JSX.Element => {
  return (
    <Container>
      <>
        <div className="text-center">
          <h1 className="my-10 mt-1 text-7xl font-square-peg text-[#b1c2d1] sm:text-6xl sm:tracking-tight lg:text-9xl">
            Our Story
          </h1>
        </div>
        <img
          className="mx-auto my-12"
          src="/images/us.png"
          alt="Megan & Grant"
        />
        <div className="my-10">
          <p className="font-square-peg max-w-xl mt-5 mx-auto text-3xl text-[#a0bbd3]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </>
    </Container>
  );
};
