import React from "react";
import { SideBar } from "@components";
import { Outlet } from "react-router-dom";

export function ComponentBasePage() {
  const sideBarItemList = [
    { linkName: "Button", linkPath: "button" },
    { linkName: "Text", linkPath: "text" },
    { linkName: "Card", linkPath: "DRTest" },
    { linkName: "Modal", linkPath: "modal" },
    { linkName: "Tooltip", linkPath: "tooltip" },
    { linkName: "Accordion", linkPath: "accordion" },
    { linkName: "Avatar", linkPath: "avatar" },
    { linkName: "Badge", linkPath: "badge" },
    { linkName: "Breadcrumb", linkPath: "breadcrumb" },
    { linkName: "Dropdown", linkPath: "dropdown" },
    { linkName: "Form", linkPath: "form" },
    { linkName: "Icon", linkPath: "icon" },
    { linkName: "List", linkPath: "list" },
    { linkName: "Navigation", linkPath: "navigation" },
    { linkName: "Pagination", linkPath: "pagination" },
    { linkName: "Progress", linkPath: "progress" },
    { linkName: "Spinner", linkPath: "spinner" },
    { linkName: "Table", linkPath: "table" },
    { linkName: "Tabs", linkPath: "tabs" },
    { linkName: "Toast", linkPath: "toast" },
  ];

  return (
    <div className="flex">
      <div className="h-screen  lg:border-e pt-4 dark:border-e-gray-dark-200">
        <SideBar sideBarItemList={sideBarItemList} />
      </div>
      <Outlet />
    </div>
  );
}
