import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface SideBarItem {
  linkName: string;
  linkPath?: string;
}

type SideBarProps = {
  sideBarItemList: SideBarItem[];
};

export function SideBar({ sideBarItemList }: SideBarProps) {
  const navigate = useNavigate();
  const location = useLocation(); // Detects current page URL

  const handleNavigation = (path: string = "") => {
    if (path !== "") {
      navigate(path);
    } else {
      console.error("Internal Navigating Error");
    }
  };

  const renderSideBarItemList = () =>
      sideBarItemList.map((item, index) => {
      const isActive =
        location.pathname === item.linkPath ||
        location.pathname.endsWith("/" + item.linkPath) ||
        (item.linkPath === "/Components" && location.pathname === "/Components");

      return (
        <li key={index} className="hs-accordion">
          <div onClick={() => handleNavigation(item.linkPath)}>
            <button
              type="button"
              className={`hs-accordion-toggle w-full text-start flex items-center text-sm gap-x-3 border-transparent hover:text-brand-600 
                ${
                  isActive
                    ? "text-brand-600 font-semibold bg-brand-50 dark:bg-brand-dark-50 rounded-xl px-6 py-3 ml-4 mr-2"
                    : "text-primary dark:text-primary-dark dark:hover:text-brand-600 font-medium pl-8 pr-4 py-2.5 mx-2"
                } 
                hover:rounded-lg hover:bg-gray-50 dark:hover:bg-gray-dark-50 transition-all duration-200`}
            >
              {item.linkName}
              
            </button>
          </div>
        </li>
      );
    });

  return (
    <div>
      <div
        id="hs-offcanvas-example"
        className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed lg:relative top-0 start-0 bottom-0 z-[60] bg-solid-base w-72 md:w-64 overflow-y-auto lg:block lg:translate-x-0 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-solid-dark-base dark:border-solid-dark-base border-r border-gray-200 dark:border-gray-dark-200"
        role="dialog"
        aria-label="Sidebar"
      >
        <nav className="hs-accordion-group w-full flex flex-col flex-wrap py-6" data-hs-accordion-always-open>
          <ul className="space-y-1">{renderSideBarItemList()}</ul>
        </nav>
      </div>
    </div>
  );
}
