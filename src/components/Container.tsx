interface Props {
  className?: string;
  children: JSX.Element;
}

export const Container = (props: Props): JSX.Element => {
  return (
    <div className="bg-[#fdfdfd] relative -z-10 text-[#b1c2d1]">
      <div className="relative mt-24 sm:mt-32 border-sky-100 border-2 max-w-7xl mx-auto pt-16 px-8">
        <div className=" border-sky-100 border-2 -mr-[28px] -ml-[28px] mb-[4px] -mt-[61px]">
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
