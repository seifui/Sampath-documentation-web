import { ComponentsPreviewCardProps } from "@types";
import React from "react";

export function ComponentsPreviewCard({
  heading,
  description,
  imageUrl,
  onClickNavigationPath,
}: ComponentsPreviewCardProps) {
  return (
    <div className=" w-full  flex flex-col gap-3 cursor-pointer rounded-md text-gray-700 dark:text-gray-dark-700  hover:text-brand-600 dark:hover:text-brand-600 m-auto xl:w-60">
      {/* //TODO: remove below dev and replace it with an image */}
      <div className=" bg-gray-200 dark:bg-gray-dark-200 w-full h-24"></div>
      <div className="pb-4">
        <div className="">
          <h3 className="font-semibold ">{heading}</h3>
          <p className="text-xs">{description}</p>
        </div>
      </div>
    </div>
  );
}
