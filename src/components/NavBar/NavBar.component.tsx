import React from "react";
import { UserIcon } from "../icons";
import { useNavigate, useLocation } from "react-router-dom";
import { NavBarProps } from "@types";
import {
  LOGO_WHITE,
  LOGO_DARK,
} from "@assets";


export function NavBar({ navBarItemList }: NavBarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveIndex = () => {
    // Find the nav item whose path best matches the current URL
    let bestMatch = 0;
    let bestMatchLength = 0;
    navBarItemList.forEach((item, index) => {
      if (item.path === "/") {
        if (location.pathname === "/" && bestMatchLength === 0) {
          bestMatch = index;
          bestMatchLength = 1;
        }
      } else if (location.pathname.startsWith(item.path) && item.path.length > bestMatchLength) {
        bestMatch = index;
        bestMatchLength = item.path.length;
      }
    });
    return bestMatch;
  };

  const activeLink = getActiveIndex();

  const handleNavigation = (path: string = "") => {
    if (path !== "") {
      navigate(path);
    } else {
      console.error("Internal Navigating Error ");
    }
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
        onClick={() => handleNavigation(navBarItem.path)}
      >
        {navBarItem.name}
      </button>
    ));

  return (
    <header className="relative flex flex-wrap lg:justify-start lg:flex-nowrap w-full bg-white text-base dark:bg-solid-dark-base sticky top-0 lg:h-20 items-center z-50">
      <nav
        className="w-full mx-auto lg:flex lg:items-center lg:justify-between py-4"
        aria-label="Global"
      >
        {/* Mobile layout */}
        <div className="flex flex-col w-full lg:hidden">
          {/* Logo row */}
          <div className="flex items-center justify-between w-full py-2">
            <button type="button" onClick={() => handleNavigation("/")} className="flex items-center">
             <img className="w-32 h-auto block dark:hidden" src={LOGO_DARK} alt="logo" />
             <img className="w-32 h-auto hidden dark:block" src={LOGO_WHITE} alt="logo" />
            </button>
            <div className="flex gap-4 items-center">
              <div className="cursor-pointer">
                <UserIcon width={"26px"} height={"26px"} />
              </div>
            </div>
          </div>
          {/* Nav tabs row — horizontally scrollable */}
          <div className="flex overflow-x-auto gap-1 pb-3 scrollbar-hide">
            {renderMenuList()}
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:flex lg:items-center lg:justify-between lg:w-full">
          {/* LEFT — Logo */}
          <div className="flex items-center flex-1">
            <button type="button" onClick={() => handleNavigation("/")} className="flex items-center">
             <img className="w-32 h-auto block dark:hidden" src={LOGO_DARK} alt="logo" />
             <img className="w-32 h-auto hidden dark:block" src={LOGO_WHITE} alt="logo" />
            </button>
          </div>

          {/* CENTER — Menu (centered) */}
          <div className="flex gap-3 justify-center items-center flex-1">
            {renderMenuList()}
          </div>

          {/* RIGHT — User icon */}
          <div className="flex justify-end items-center flex-1">
            <UserIcon width="20px" height="20px" />
          </div>
        </div>
      </nav>
    </header>
  );
}
