import { Parallax } from "react-scroll-parallax";

export const Winston = (): JSX.Element => {
  return (
    <Parallax translateX={["-200px", "-65px"]}>
      <div className="z-10 mt-[60px] max-w-[150px] md:max-w-[200px] absolute rotate-[45deg]">
        <img src="/images/winston.webp" alt="Winston" />
      </div>
    </Parallax>
  );
};
