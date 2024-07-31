import React from "react";
import { HamburgerMenuIcon } from "../icons";

export function SubHeader() {
  return (
    <div className="flex items-center gap-4 h-10">
      <button
        type="button"
        className=" justify-center items-center gap-x-2 text-start "
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="hs-offcanvas-example"
        aria-label="Toggle navigation"
        data-hs-overlay="#hs-offcanvas-example"
      >
        <HamburgerMenuIcon />
      </button>
      <span className="text-xs text-gray-500">Sample &gt; Breadcrum</span>
    </div>
  );
}
