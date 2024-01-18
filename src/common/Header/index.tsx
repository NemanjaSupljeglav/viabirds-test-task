import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineStepForward } from "react-icons/ai";

import HeaderNavItem from "./HeaderNavItem";

import { useGlobalContext } from "@/context/globalContext";
import { maxWidth, textColor } from "@/styles";
import { navLinks } from "@/constants";
import { cn } from "@/utils/helper";
import { INavLink } from "@/types";

const Header = () => {
  const { setShowSidebar } = useGlobalContext();

  const [isActive, setIsActive] = useState<boolean>(false);
  const [isNotFoundPage, setIsNotFoundPage] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.split("/").length > 3) {
      setIsNotFoundPage(true);
    } else {
      setIsNotFoundPage(false);
    }
  }, [location.pathname]);

  return (
    <header
      className={`md:py-[16px] py-[24.5px]  fixed top-0 left-0 w-full z-10 transition-all duration-50 header-bg--dark`}
    >
      <nav
        className={cn(maxWidth, `flex justify-between flex-row items-center`)}
      >
        <div className="flex flex-row">
          <div className="text-[red] text-[25px]">
            <AiOutlineStepForward />
          </div>

          <p className="active text-gray-300 hover:text-secColor font-semibold ml-1">
            ViaBirds
          </p>
        </div>
        <div className=" hidden md:flex flex-row gap-8 items-center text-gray-300">
          <ul className="flex flex-row gap-8 capitalize text-[14.75px] font-medium">
            {navLinks.map((link: any, index) => {
              return <HeaderNavItem link={link} key={index} />;
            })}
          </ul>
        </div>

        <button
          type="button"
          name="menu"
          className={cn(
            `inline-block text-[22.75px] md:hidden  transition-all duration-300`,
            isNotFoundPage || isActive
              ? `${textColor} dark:hover:text-secColor hover:text-black `
              : ` dark:hover:text-secColor text-secColor`
          )}
          onClick={() => setShowSidebar(true)}
        >
          <AiOutlineMenu />
        </button>
      </nav>
    </header>
  );
};

export default Header;
