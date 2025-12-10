import React from "react";
import { HamburgerMenuIcon } from "../icons";
interface SubHeaderProps {
  activePage: string;
}

export function SubHeader({ activePage }: SubHeaderProps) {
  return (
    <div className="flex items-center gap-4 h-12 py-2">
      <button
        type="button"
        className="flex justify-center items-center gap-x-2 text-start p-1 hover:bg-gray-100 dark:hover:bg-gray-dark-50 rounded transition-colors"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="hs-offcanvas-example"
        aria-label="Toggle navigation"
        data-hs-overlay="#hs-offcanvas-example"
      >
        <HamburgerMenuIcon />
      </button>
      <span className="text-sm font-medium text-gray-600 dark:text-gray-dark-600">Components / {activePage}</span>
    </div>
  );
}
