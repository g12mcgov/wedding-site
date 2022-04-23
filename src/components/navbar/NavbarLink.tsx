import { NavLink } from "react-router-dom";

interface Props {
  text: string;
  route: string;
}

export const NavbarLink = (props: Props): JSX.Element => {
  return (
    <NavLink
      className={({ isActive }) =>
        `hover:border-gray-300 active:border-indigo-500 ${
          isActive ? "border-indigo-500" : "border-transparent"
        } inline-flex items-center px-1 pt-1 border-b-2 text-2xl font-square-peg`
      }
      to={props.route}
    >
      {props.text}
    </NavLink>
  );
};
