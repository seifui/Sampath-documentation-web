import React, { useState } from "react";
import { DarkModeToggler } from "../DarkModeToggler";
import { useNavigate } from "react-router-dom";
import { NavBarProps } from "@types";
import {
  LOGO_WHITE,
  LOGO_DARK,
} from "@assets";


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
      <button
        key={index}
        type="button"
        className={`text-sm font-medium px-5 py-2.5 transition-all duration-200 rounded-full ${
          activeLink === index 
            ? "bg-brand-600 text-white shadow-sm" 
            : "text-primary dark:text-gray-dark-600 hover:text-brand-600 dark:hover:text-brand-600 hover:bg-gray-50 dark:hover:bg-gray-dark-50"
        }`}
        onClick={() => handleLinkClick(navBarItem.path, index)}
      >
        {navBarItem.name}
      </button>
    ));

  return (
    <header className="relative flex flex-wrap lg:justify-start lg:flex-nowrap w-full bg-white text-base dark:bg-solid-dark-base sticky top-0 h-20 items-center">
      <nav
        className="w-full mx-auto lg:flex lg:items-center lg:justify-between py-4"
        aria-label="Global"
      >
        <div className="flex items-center justify-between w-full lg:w-auto">
          <button type="button" onClick={() => handleNavigation("/")} className="flex items-center">
           <img className="w-28 md:w-36 h-auto block dark:hidden" src={LOGO_DARK} alt="logo" />
           <img className="w-28 md:w-36 h-auto hidden dark:block" src={LOGO_WHITE} alt="logo" />
          </button>
          
          <div className="lg:hidden flex gap-4 items-center">
            <div className="cursor-pointer">
              <DarkModeToggler width={"26px"} height={"26px"} />
            </div>
          </div>
        </div>
        <div
          id="navbar-with-mega-menu"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block"
        >
           <div className="flex items-center justify-between lg:pl-8">

            {/* CENTER — Menu (stays centered) */}
            <div className="flex flex-1 gap-3 justify-center items-center">
              {renderMenuList()}
            </div>

            {/* RIGHT — Dark mode toggler */}
            <div className="flex justify-end items-center ml-6">
              <DarkModeToggler width="20px" height="20px" />
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
}
