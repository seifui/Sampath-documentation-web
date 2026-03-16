import React from "react";
import { IconBaseProps } from "../IconBaseProps";

export function UserIcon({
  color,
  height = "20px",
  width = "20px",
}: IconBaseProps) {
  return (
    <svg
      className="text-solid-dark-base dark:text-solid-base"
      color={color}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="7"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}










