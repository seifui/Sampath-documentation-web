import React from "react";
import { SideBar } from "@components";
import { Outlet } from "react-router-dom";

export function PatternBasePage() {
  const sideBarItemList = [
    { linkName: "All", linkPath: "/Pattern" },
    { linkName: "Validation messages", linkPath: "Validation" },
    { linkName: "Empty state pattern", linkPath: "Emptystate" },
    { linkName: "Error pattern", linkPath: "Errorpattern" },
    { linkName: "Error screen", linkPath: "Errorscreen" },
    { linkName: "Help articles", linkPath: "Article" },
    { linkName: "Notifications", linkPath: "Notification" },
    { linkName: "Progress screen", linkPath: "Progress" },
    { linkName: "Sucess screen", linkPath: "Sucess" },
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
