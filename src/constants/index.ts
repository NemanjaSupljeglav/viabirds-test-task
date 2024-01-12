import { AiOutlineHome } from "react-icons/ai";

import { INavLink } from "../types";

export const navLinks: INavLink[] = [
  {
    title: "movies",
    path: "/",
    icon: AiOutlineHome
  },
  {
    title: "favorites",
    path: "/favorites",
    icon: AiOutlineHome
  },
  {
    title: "detail",
    path: "/detail",
    icon: AiOutlineHome
  }
];
