import React, { ComponentType } from "react";
import { ChevronIcon, HomeIcon, CircleIcon } from "../../../../components";
import { TailwindColors } from "../../../../types";

//TODO:: Change below bg color type to a enum based type
type SideBarItemProps = {
  LeftIcon: ComponentType<any>;
  subItems?: String[];
  itemHoverBackgroundColor?: TailwindColors;
  itemHeading: String;
  disableChevron?: boolean;
};

export function SideBarItem({
  LeftIcon,
  subItems = undefined,
  itemHoverBackgroundColor = "brand-50",
  itemHeading,
  disableChevron = false,
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

        {subItems && subItems.length > 0 && disableChevron == false && (
          <div className="self-center">
            <ChevronIcon direction="down" />
          </div>
        )}
      </div>
      {subItems && subItems.length > 0 && (
        <div>
          {subItems.map((subItem, index) => (
            <SideBarItem
              key={index}
              LeftIcon={() => <CircleIcon color="#ea580c" />} // Example of using HomeIcon as LeftIcon
              itemHeading={subItem}
            />
          ))}
        </div>
      )}
    </div>
  );
}
