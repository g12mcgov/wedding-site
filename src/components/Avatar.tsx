interface Props {
  name: string;
  image: string;
}

export const Avatar = (props: Props): JSX.Element => {
  return (
    <div className="font-cormorant-garamond flex my-8 items-center justify-center">
      <div className="w-24">
        <img
          className="shadow-xl mx-auto block h-30 w-30 rounded-full"
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
