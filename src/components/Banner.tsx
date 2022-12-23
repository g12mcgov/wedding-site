export const Banner = (): JSX.Element => {
  return (
    <div
      className="bg-cover bg-center h-screen flex"
      style={{ backgroundImage: "url('proposal.webp')" }}
    >
      <div className="m-auto">
        <h1 className="first-letter:text-8xl -mt-72 sm:-mt-16 text-7xl text-white text-center font-cormorant-sc">
          MEGAN & <h1 className="inline-block first-letter:text-8xl">GRANT</h1>
        </h1>
        <h2 className="mt-8 text-4xl text-white text-center font-cormorant-sc">
          JUNE 24, 2023
        </h2>
        <h2 className="text-4xl text-white text-center font-cormorant-sc">
          CLEVELAND, OHIO
        </h2>
      </div>
    </div>
  );
};
