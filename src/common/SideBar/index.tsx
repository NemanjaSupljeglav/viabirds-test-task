import React, { useCallback } from "react";
import { AnimatePresence, m } from "framer-motion";

import SidebarNavItem from "./SidebarNavItem";

import { useGlobalContext } from "@/context/globalContext";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useMotion } from "@/hooks/useMotion";
import { navLinks } from "@/constants";
import { sideBarHeading } from "@/styles";
import { INavLink } from "@/types";
import { cn } from "@/utils/helper";

const SideBar: React.FC = () => {
  const { showSidebar, setShowSidebar } = useGlobalContext();
  const { slideIn } = useMotion();

  const closeSideBar = useCallback(() => {
    setShowSidebar(false);
  }, [setShowSidebar]);

  const { ref } = useOnClickOutside(closeSideBar);

  return (
    <AnimatePresence>
      {showSidebar && (
        <m.nav
          variants={slideIn("right", "tween", 0, 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          ref={ref}
          className={cn(
            `fixed top-0 right-0 sm:w-[40%] xs:w-[220px] w-[195px] h-full z-[25] overflow-y-auto shadow-md md:hidden p-4 pb-0 dark:text-gray-200 text-gray-600 dark-glass`
          )}
        >
          <div className="flex items-center justify-center  ">
            <p>Logo</p>
          </div>

          <div className="p-4 sm:pt-8  xs:pt-6 pt-[22px] h-full flex flex-col">
            <h3 className={sideBarHeading}>Menu</h3>
            <ul className="flex flex-col sm:gap-2 xs:gap-[6px] gap-1 capitalize xs:text-[14px] text-[13.5px] font-medium">
              {navLinks.map((link: INavLink) => {
                return (
                  <SidebarNavItem
                    link={link}
                    closeSideBar={closeSideBar}
                    key={link.title.replaceAll(" ", "")}
                  />
                );
              })}
            </ul>
          </div>
        </m.nav>
      )}
    </AnimatePresence>
  );
};

export default SideBar;
