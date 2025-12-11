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
    { linkName: "Select", linkPath: "Select" },
    { linkName: "Tooltip", linkPath: "Tooltip" },
    { linkName: "Card", linkPath: "Card" },
  
    { linkName: "Table", linkPath: "Table"},
    { linkName: "Header", linkPath: "Header"},
    { linkName: "Side Bar", linkPath: "SideBar"},
    { linkName: "Checkbox Card", linkPath: "CheckboxCard"},
    { linkName: "Checkbox Group", linkPath: "CheckboxGroup"},
    { linkName: "Context Menu", linkPath: "ContextMenu"},
    { linkName: "Drawer", linkPath: "Drawer"},
    { linkName: "Sidebar Sections", linkPath: "SideBar ections"},
    { linkName: "Loader", linkPath: "Loader"},
    { linkName: "Skeleton Circle", linkPath: "SkeletonCircle"},
    { linkName: "Skeleton Text", linkPath: "SkeletonText"},
    { linkName: "Slider", linkPath: "Slider"},
    { linkName: "Tabs", linkPath: "Tabs"},
    { linkName: "Toggle Group", linkPath: "ToggleGroup"},

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
