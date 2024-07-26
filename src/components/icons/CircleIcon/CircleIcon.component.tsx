import React from "react";
import { IconBaseProps } from "../IconBaseProps";

export function CircleIcon({
  color = "#EA580C",
  height = "4",
  width = "4",
}: IconBaseProps) {
  return (
    <svg
      color={color}
      width={width}
      height={height}
      viewBox="0 0 4 4"
      fill="current"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="2" cy="2" r="2" fill="currentColor" fill-opacity="0.5" />
    </svg>
  );
}
