import React from "react";
import { IconBaseProps } from "../IconBaseProps";

export function HamburgerMenuIcon({
  color = "#000D21CC",
  height = "20px",
  width = "20px",
}: IconBaseProps) {
  return (
    <svg
      color={color}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12H21M3 6H21M3 18H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
