interface Props {
  text: string;
  onClick?: () => void;
}

export const Button = (props: Props): JSX.Element => {
  return (
    <button
      type="button"
      className="inline-flex items-center px-4 py-2 shadow-sm rounded-md text-[#a0bbd3] bg-sky-100 hover:bg-gray-50"
      onClick={() => props.onClick()}
    >
      {props.text}
    </button>
  );
};
