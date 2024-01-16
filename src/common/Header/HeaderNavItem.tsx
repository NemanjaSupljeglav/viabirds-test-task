import { NavLink } from "react-router-dom";
import { cn } from "../../utils/helper";

interface HeaderProps {
  link: { title: string; path: string };
}

const HeaderNavItem = ({ link }: HeaderProps) => {
  return (
    <li>
      <NavLink
        to={link.path}
        className={({ isActive }) => {
          return cn(
            "nav-link",
            isActive
              ? "active text-gray-300 hover:text-secColor font-semibold"
              : "text-gray-300 hover:text-secColor font-semibold"
          );
        }}
        end
      >
        {link.title}
      </NavLink>
    </li>
  );
};

export default HeaderNavItem;
