import React, { ComponentType } from "react";
import { Chevron, HomeIcon, CircleIcon } from "../../../../components";
import { TailwindColors } from "../../../../types";

//TODO:: Change below bg color type to a enum based type
type SideBarItemProps = {
  LeftIcon: ComponentType<any>;
  subItems?: String[];
  itemHoverBackgroundColor?: TailwindColors;
  itemHeading: String;
};

export function SideBarItem({
  LeftIcon,
  subItems = undefined,
  itemHoverBackgroundColor = "brand-50",
  itemHeading,
}: SideBarItemProps) {
  return (
    <div className={`flex flex-col  content-center  `}>
      <div
        className={`flex gap-3 justify-between grow-1 hover:bg-${itemHoverBackgroundColor} px-4 py-3  rounded-lg `}
      >
        <div className={`flex gap-3 `}>
          <div className="self-center">
            <LeftIcon />
          </div>
          {itemHeading}
        </div>

        {subItems && subItems.length > 0 && (
          <div className="self-center">
            <Chevron direction="down" />
          </div>
        )}
      </div>
      {subItems && subItems.length > 0 && (
        <div>
          {subItems.map((subItem, index) => (
            <SideBarItem
              key={index}
              LeftIcon={() => <CircleIcon color="brand-500" />} // Example of using HomeIcon as LeftIcon
              itemHeading={subItem}
            />
          ))}
        </div>
      )}
    </div>
  );
}
