import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchBarButton } from "../SearchBarButton";

interface SideBarItem {
  linkName: string;
  linkPath?: string;
}

type SideBarProps = {
  sideBarItemList: SideBarItem[];
};

export function SideBar({ sideBarItemList }: SideBarProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleNavigation = (path: string = "", index: number) => {
    if (path !== "") {
      navigate(path);
      setActiveIndex(index); // Update the active index when a button is clicked
    } else {
      alert("Internal Navigating Error ");
    }
  };

  const renderSideBarItemList = () =>
    sideBarItemList.map((sideBarItem, index) => {
      const isActive = index === activeIndex;

      return (
        <li key={index} className="hs-accordion" id="users-accordion">
          <div onClick={() => handleNavigation(sideBarItem.linkPath, index)}>
            <button
              type="button"
              className={`hs-accordion-toggle w-full text-start flex items-center text-xs gap-x-3.5 px-2.5 text-sm focus:outline-none border-l border-transparent dark:bg-neutral-800 dark:text-neutral-400 ${
                isActive
                  ? "text-brand-600 font-semibold border-s-brand-600"
                  : "text-gray-700 dark:hover:text-neutral-300"
              } hover:border-s-brand-600 `}
            >
              {sideBarItem.linkName}
            </button>
          </div>
        </li>
      );
    });

  return (
    <div>
      <div
        id="hs-offcanvas-example"
        className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed lg:relative top-0 start-0 bottom-0 z-[60] bg-white w-44 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-800 dark:border-neutral-700 pt-6 pl-6 lg:p-0"
        role="dialog"
        aria-label="Sidebar"
      >
        <div className="mr-3 mb-4 sticky bg-white top-0 hidden lg:block">
          <SearchBarButton />
        </div>
        <nav
          className="hs-accordion-group w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">{renderSideBarItemList()}</ul>
        </nav>
      </div>

      <script src="../scripts/js/open-modals-on-init.js"></script>
    </div>
  );
}
