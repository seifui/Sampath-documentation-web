import React from "react";
import { IconBaseProps } from "../IconBaseProps";

type ChevronIconProps = IconBaseProps & {
  direction: "left" | "down" | "right" | "up";
};

export function Chevron({
  direction,
  height = "20",
  width = "20",
}: ChevronIconProps) {
  if (direction == "down") {
    return (
      <svg
        color="red"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 9L12 15L18 9"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else {
    //Note:: below fragment is returned as a work around for type checking error
    return <></>;
  }
}
