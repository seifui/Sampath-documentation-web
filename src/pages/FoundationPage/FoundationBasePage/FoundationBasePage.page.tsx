import React from "react";
import { SideBar } from "@components";
import { Outlet } from "react-router-dom";

export function FoundationBasePage() {
  const sideBarItemList = [
    { linkName: "All", linkPath: "/Foundation" },
    { linkName: "Color", linkPath: "Color" },
    { linkName: "Typography", linkPath: "Typography" },
    { linkName: "Focus", linkPath: "Focus" },
    { linkName: "Icon", linkPath: "Icon" },
    { linkName: "Illustration", linkPath: "Illustration" },
    { linkName: "Padding", linkPath: "Padding" },
    { linkName: "Radius", linkPath: "Radius" },
    { linkName: "Size", linkPath: "Size" },
    { linkName: "Spacing", linkPath: "Spacing" },
  ];

  return (
    <div className="w-full max-w-[1920px] mx-auto">
      <div className="min-h-screen flex">
        <div className="h-screen sticky top-0 z-[80]">
          <SideBar sideBarItemList={sideBarItemList} />
        </div>
        <div className="flex-1 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
