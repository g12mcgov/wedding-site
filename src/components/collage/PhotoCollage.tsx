import { Carousel } from "./Carousel";

interface Props {
  top: string;
  last: string;
  bottom: string[];
}

export const PhotoCollage = (props: Props): JSX.Element => {
  return (
    <div>
      <div
        className="flex bg-cover h-[600px] w-full"
        style={{
          backgroundImage: `url('${props.top}')`,
          backgroundPosition: "center",
        }}
      />
      <div className="flex">
        {props.bottom.map((image, i) => (
          <div
            className="bg-cover h-[500px] w-full"
            style={{
              backgroundImage: `url('${image}')`,
              backgroundPosition: "center",
              transition: "opacity 1s ease-in-out",
            }}
          />
        ))}
        <div
          className="bg-cover h-[500px] w-full flex justify-center items-center brightness-50"
          style={{
            backgroundImage: `url('${props.last}')`,
            backgroundPosition: "center",
            transition: "opacity 1s ease-in-out",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <h1 className="text-white">More</h1>
        </div>
      </div>
    </div>
  );
};

// position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
