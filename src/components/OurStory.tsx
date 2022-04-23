export const OurStory = (): JSX.Element => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto pt-16 px-4 sm:pt-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="my-10 mt-1 text-6xl font-square-peg text-slate-400 sm:text-6xl sm:tracking-tight lg:text-9xl">
            Our Story
          </h1>
        </div>
        <img
          className="mx-auto my-12"
          src="/images/us.png"
          alt="Megan & Grant"
        />
        <div className="my-10">
          <p className="font-square-peg max-w-xl mt-5 mx-auto text-2xl text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};
