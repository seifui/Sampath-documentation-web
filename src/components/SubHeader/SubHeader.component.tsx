import React from "react";
import { HamburgerMenuIcon } from "../icons";
interface SubHeaderProps {
  activePage: string;
}

export function SubHeader({ activePage }: SubHeaderProps) {
  return (
    <div className="flex items-center gap-4 h-10">
      <button
        type="button"
        className=" justify-center items-center gap-x-2 text-start"
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="hs-offcanvas-example"
        aria-label="Toggle navigation"
        data-hs-overlay="#hs-offcanvas-example"
      >
        <HamburgerMenuIcon />
      </button>
      <span className="text-sm text-gray-500 dark:text-gray-dark-700">Components / {activePage}</span>
    </div>
  );
}
