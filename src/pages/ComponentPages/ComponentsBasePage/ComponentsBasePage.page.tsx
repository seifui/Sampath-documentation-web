import React from "react";
import { SideBar } from "@components";
import { Outlet } from "react-router-dom";

export function ComponentBasePage() {
  const sideBarItemList = [
    { linkName: "Button", linkPath: "Button" },
    { linkName: "Text Field", linkPath: "TextField" },
    { linkName: "Radio Button", linkPath: "RadioButton" },
    { linkName: "Badge", linkPath: "Badge" },
    { linkName: "Checkbox", linkPath: "Checkbox" },

  ];

  return (
    <div className="flex relative">
      <div className="h-screen sticky top-0 z-[80]">
        <SideBar sideBarItemList={sideBarItemList} />
      </div>
      <Outlet />
    </div>
  );
}
