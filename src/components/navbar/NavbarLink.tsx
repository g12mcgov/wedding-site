import { NavLink } from "react-router-dom";

interface Props {
  text: string;
  route: string;
}

export const NavbarLink = (props: Props): JSX.Element => {
  return (
    <NavLink
      className={({ isActive }) =>
        `hover:border-sky-100 active:border-sky-100 float-left text-bold text-[#a0bbd3] ${
          isActive ? "border-sky-100" : "border-transparent"
        } inline-flex items-center px-1 pt-1 border-b-2 text-2xl font-cormorant-garamond max-w-max`
      }
      to={props.route}
    >
      {props.text}
    </NavLink>
  );
};
