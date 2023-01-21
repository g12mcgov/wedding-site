import { LongPress } from "../hooks/useLongPress";

export interface Props {
  name: string;
  image: string;
  longPress?: LongPress;
}

export const Avatar = (props: Props): JSX.Element => {
  // Override browser/iOS popup menus on right click
  // (e.g. save image etc).
  const handleOnContextMenu = (e: any): void => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div
      {...props.longPress}
      onContextMenu={handleOnContextMenu}
      className="font-cormorant-garamond flex my-8 items-center justify-center [-webkit-touch-callout:none] [-webkit-user-select:none]"
    >
      <div className="w-28">
        <div
          className="shadow-xl mx-auto block max-h-[28] h-28 max-w-[28] w-28 rounded-full bg-cover"
          style={{
            backgroundImage: `url('${props.image}')`,
          }}
        />
        <p className="mt-4 text-center text-2xl font-medium group-hover:text-gray-900">
          {props.name}
        </p>
      </div>
    </div>
  );
};
