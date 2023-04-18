interface Props {
  text: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
}

export const Button = ({
  text,
  onClick,
  size = "large",
}: Props): JSX.Element => {
  const buttonConfig = {
    small: "px-2 py-1",
    medium: "px-4 py-2",
    large: "px-5 py-2",
  };

  return (
    <button
      type="button"
      className={`inline-flex items-center shadow-sm rounded-md text-[#a0bbd3] bg-sky-100 hover:bg-gray-50 ${buttonConfig[size]}`}
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
};
