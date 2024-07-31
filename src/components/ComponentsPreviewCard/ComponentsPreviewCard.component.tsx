import { ComponentsPreviewCardProps } from "@types";
import React from "react";

export function ComponentsPreviewCard({
  heading,
  description,
  imageUrl,
  onClickNavigationPath,
}: ComponentsPreviewCardProps) {
  return (
    <div className="w-full  flex flex-col gap-3 cursor-pointer shadow-md rounded-md bg-solid-base dark:bg-gray-dark-200 hover:shadow-lg m-auto xl:w-60">
      {/* //TODO: remove below dev and replace it with an image */}
      <div className=" bg-gray-200 dark:bg-gray-dark-200 w-full h-24"></div>
      <div className="px-4 pb-4">
        <div className="text-gray-700 dark:text-gray-dark-700">
          <h3 className="font-semibold ">{heading}</h3>
          <p className="text-xs">{description}</p>
        </div>
      </div>
    </div>
  );
}
