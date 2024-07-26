import React, { useState } from "react";
import { DarkModeToggler } from "../DarkModeToggler";
import { HorizontalDotMenuIcon, SearchIcon } from "../icons";

type NavBarProps = {
  menuList: string[];
};

export function NavBar({ menuList }: NavBarProps) {
  const [activeLink, setActiveLink] = useState(0); // State to track active link, initialized with 0

  const handleLinkClick = (index: number) => {
    setActiveLink(index); // Update active link state when a link is clicked
  };
  const renderMenuList = () =>
    menuList.map((menuItem, index) => (
      <a
        key={index}
        className={`text-xs hover:text-brand-600 dark:text-neutral-400 dark:hover:text-neutral-500 transition-colors duration-200 ${
          activeLink === index
            ? "border-b-2 border-brand-600"
            : "border-b-2 border-transparent"
        }`}
        href="#"
        onClick={() => handleLinkClick(index)}
      >
        {menuItem}
      </a>
    ));

  return (
    <header className="relative flex flex-wrap lg:justify-start lg:flex-nowrap w-full bg-white text-sm  dark:bg-gray-950 sticky top-0 h-14 items-center">
      <nav
        className=" w-full mx-auto  lg:flex lg:items-center lg:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className="flex-none text-xl font-semibold dark:text-white"
            href="#"
          >
            Sampath Design System
          </a>

          <div className="lg:hidden flex gap-4 items-center">
            <div className="cursor-pointer">
              <SearchIcon width={"16px"} height={"16px"} />
            </div>
            <div className="cursor-pointer">
              <DarkModeToggler width={"16px"} height={"16px"} />
            </div>
            <div className="cursor-pointer">
              <HorizontalDotMenuIcon width={"16px"} height={"16px"} />
            </div>
          </div>
        </div>
        <div
          id="navbar-with-mega-menu"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block"
        >
          <div className="flex flex-col gap-5 mt-5 lg:flex-row lg:items-center lg:justify-end lg:mt-0 lg:ps-5">
            {renderMenuList()}

            <DarkModeToggler width={"16px"} height={"16px"} />
          </div>
        </div>
      </nav>
    </header>
  );
}
