import React, { useState } from "react";
import { DarkModeToggler } from "../DarkModeToggler";
import { HorizontalDotMenuIcon, SearchIcon } from "../icons";
import { useNavigate } from "react-router-dom";
import { NavBarProps } from "@types";

export function NavBar({ navBarItemList }: NavBarProps) {
  const [activeLink, setActiveLink] = useState(0); // State to track active link, initialized with 0
  const navigate = useNavigate();

  const handleNavigation = (path: string = "") => {
    if (path !== "") {
      navigate(path);
    } else {
      console.error("Internal Navigating Error ");
    }
  };

  const handleLinkClick = (path: string, index: number) => {
    setActiveLink(index); // Update active link state when a link is clicked
    handleNavigation(path);
  };
  const renderMenuList = () =>
    navBarItemList.map((navBarItem, index) => (
      <a
        key={index}
        className={`text-sm text-gray-700  hover:text-brand-600 dark:text-gray-dark-700 dark:hover:text-brand-600 transition-colors duration-200 ${
          activeLink === index
            ? "border-b-2 border-brand-600"
            : "border-b-2 border-transparent"
        }`}
        href="#"
        onClick={() => handleLinkClick(navBarItem.path, index)}
      >
        {navBarItem.name}
      </a>
    ));

  return (
    <header className="relative flex flex-wrap lg:justify-start lg:flex-nowrap w-full bg-white text-base  dark:bg-solid-dark-base sticky top-0 h-14 items-center">
      <nav
        className=" w-full mx-auto  lg:flex lg:items-center lg:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className="flex-none text-2xl font-semibold dark:text-white"
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
