interface Props {
  zIndex?: string;
  children: JSX.Element;
}

export const Container = (props: Props): JSX.Element => {
  return (
    <div
      className={`${props.zIndex} bg-[#fdfdfd] relative text-[#b1c2d1] px-4`}
    >
      <div className="relative mt-24 sm:mt-28 border-sky-100 border-2 max-w-7xl mx-auto pt-16 px-4">
        <div className=" border-sky-100 border-2 -mr-[24px] -ml-[24px] mb-[4px] -mt-[61px] px-4">
          <img
            className="mx-auto max-w-[100px] -mt-[50px] sm:max-w-[150px] sm:-mt-[70px] mb-8"
            src="/images/hydragena_water_colors.png"
            alt=""
          />
          {props.children}
        </div>
      </div>
    </div>
  );
};
