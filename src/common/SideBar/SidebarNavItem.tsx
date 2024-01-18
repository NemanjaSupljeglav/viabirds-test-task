import { NavLink } from "react-router-dom";
import { cn } from "@/utils/helper";

interface SidebarNavItemProps {
  link: any;
  closeSideBar: () => void;
}

const SidebarNavItem = ({ link, closeSideBar }: SidebarNavItemProps) => {
  return (
    <li>
      <NavLink
        to={link.path}
        className={({ isActive }) => {
          return cn(
            "flex flex-row gap-3 py-1 rounded-md px-[10px] items-center w-full text-primary  transition-all duration-300 font-nunito font-semibold ",
            isActive && "text-[red] "
          );
        }}
        onClick={closeSideBar}
      >
        {<link.icon className="text-[18px]" />}
        <span>{link.title}</span>
      </NavLink>
    </li>
  );
};

export default SidebarNavItem;
