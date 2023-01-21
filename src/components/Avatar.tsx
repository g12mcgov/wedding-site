import { LongPress } from "../hooks/useLongPress";

export interface Props {
  name: string;
  image: string;
  longPress?: LongPress;
}

export const Avatar = (props: Props): JSX.Element => {
  return (
    <div
      {...props.longPress}
      className="font-cormorant-garamond flex my-8 items-center justify-center"
    >
      <div className="w-28">
        <img
          className="shadow-xl mx-auto block max-h-[28] h-28 max-w-[28] w-28 rounded-full"
          src={props.image}
          alt=""
        />
        <p className="mt-4 text-center text-2xl font-medium group-hover:text-gray-900">
          {props.name}
        </p>
      </div>
    </div>
  );
};
