import React from "react";
import { SideBarItem } from "../SideBarItem";
import { HomeIcon } from "../../../../components";
import { TailwindColors } from "../../../../types";

export function SideBar() {
  return (
    <div className="w-[231px]">
      <SideBarItem
        LeftIcon={HomeIcon}
        subItems={["Sub Item 1", "Sub Item 2"]}
        itemHeading={"Sample"}
      />
    </div>
  );
}
