export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-white">
      <div className="max-w-8xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-center lg:px-8">
        <div className="mt-8 md:mt-0 order-1">
          <p className="text-center text-base text-gray-400">
            <a
              target="_blank"
              href="https://github.com/g12mcgov/wedding-site"
              rel="noreferrer"
              className="text-indigo-500"
            >
              Built
            </a>{" "}
            with ❤️ by{" "}
            <a
              target="_blank"
              href="https://grantmcgovern.com"
              rel="noreferrer"
              className="text-indigo-500"
            >
              Grant
            </a>{" "}
            (and{" "}
            <a
              target="_blank"
              href="https://www.instagram.com/winstonshortnubs/"
              rel="noreferrer"
              className="text-indigo-500"
            >
              Winston
            </a>
            )
          </p>
        </div>
      </div>
    </footer>
  );
};
