import React from "react";
import { HamburgerMenuIcon } from "../icons";
interface SubHeaderProps {
  breadcrumb: string;
}

export function SubHeader({ breadcrumb }: SubHeaderProps) {
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
      <span className="text-sm font-medium text-primary dark:text-primary-dark">{breadcrumb}</span>
    </div>
  );
}
