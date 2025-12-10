import React from "react";
import { SideBar } from "@components";
import { Outlet } from "react-router-dom";

export function ComponentBasePage() {
  const sideBarItemList = [
    { linkName: "All", linkPath: "/Components" },
    { linkName: "Button", linkPath: "Button" },
    { linkName: "Text Field", linkPath: "TextField" },
    { linkName: "Radio Button", linkPath: "RadioButton" },
    { linkName: "Badge", linkPath: "Badge" },
    { linkName: "Checkbox", linkPath: "Checkbox" },
    { linkName: "Switch", linkPath: "Switch" },
    { linkName: "Textarea", linkPath: "Textarea" },
    { linkName: "Avatar", linkPath: "Avatar" },
    { linkName: "Link", linkPath: "Link" },
    { linkName: "Accordion", linkPath: "Accordion" },
    { linkName: "No Data Card", linkPath: "NoDataCard" },
    { linkName: "Pagination", linkPath: "Pagination" },
    { linkName: "Tabs", linkPath: "Tabs" },
    { linkName: "Stepper", linkPath: "Stepper" },
    { linkName: "Message Box", linkPath: "Message Box" },
    { linkName: "Breadcrumb", linkPath: "Breadcrumb" },
    { linkName: "Alerts", linkPath: "Alerts" },
    { linkName: "Tooltip", linkPath: "Tooltip" },
    { linkName: "Table", linkPath: "Table" },
    { linkName: "Header", linkPath: "Header" },
    { linkName: "Card", linkPath: "Card" },
    { linkName: "Side Bar", linkPath: "SideBar" },
    

  ];

  return (
    <div className="w-full max-w-[1920px] mx-auto">
      <div className="flex relative min-h-screen">
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
