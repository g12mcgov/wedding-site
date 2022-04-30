export const Banner = (): JSX.Element => {
  return (
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
  );
};
