import { BiMoviePlay } from "react-icons/bi";
import { BsListStars } from "react-icons/bs";

import { INavLink } from "../types";

export const navLinks: INavLink[] = [
  {
    title: "movies",
    path: "/",
    icon: BiMoviePlay
  },
  {
    title: "favorites",
    path: "/favorites",
    icon: BsListStars
  }
];
