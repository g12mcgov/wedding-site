export const WeddingOverview = (): JSX.Element => {
  return (
    <div className="bg-white">
      <div className="relative max-w-7xl mx-auto pt-16 px-4 sm:pt-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="my-10 mt-1 text-6xl font-square-peg text-slate-400 sm:text-6xl sm:tracking-tight lg:text-9xl">
            The Wedding
          </h1>
          {/* <img
            className="mx-auto my-12 sm:max-w-lg"
            src="/images/lily_divider.png"
            alt=""
          /> */}
          <p className="font-square-peg max-w-xl mt-5 mx-auto text-3xl text-gray-500">
            Attire: Formal / Cocktail attire
          </p>
          <h2 className="font-square-peg max-w-xl mt-5 mx-auto text-4xl text-gray-500">
            Ceremony & Reception
          </h2>
          <p className="font-square-peg max-w-xl mt-5 mx-auto text-3xl text-gray-500">
            The Shoreby Club
          </p>
          <p className="font-square-peg max-w-xl mt-5 mx-auto text-3xl text-gray-500">
            40 Shoreby Dr, Bratenahl, OH 44108
          </p>
          <img
            className="mx-auto my-12 sm:max-w-lg"
            src="/images/shoreby_club.jpg"
            alt="The Shoreby Club"
          />
          <div className="my-10">
            <p className="font-square-peg italic max-w-xl mt-5 mx-auto text-l text-gray-500">
              There will be parking lot attendants to assist guests when they
              arrive at First Baptist Church. The parking lot address for the
              church is 48 Meeting Street. Off-street parking is also available
              on the weekends at no charge. There will be a trolley service to
              take a limited number of guests from the ceremony to the reception
              venue. There is limited parking at Merchants Hall. The venue has a
              pay to park lot directly behind it. We recommend Uber or Lyft.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
