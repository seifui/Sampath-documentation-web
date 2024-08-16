import { ComponentsPreviewCardProps } from "@types";
import React from "react";

export function ComponentsPreviewCard({
  heading,
  description,
  imageUrl,
  onClickNavigationPath,
}: ComponentsPreviewCardProps) {
  return (
    <div className="  flex flex-col gap-3 cursor-pointer rounded-md text-gray-700 dark:text-gray-dark-700  hover:text-brand-600 dark:hover:text-brand-600 m-auto xl:w-60">
      {/* //TODO: remove below dev and replace it with an image */}
      <div>
        <img className=" w-full " src={imageUrl} alt="" />
      </div>
      <div className="pb-4">
        <div className="">
          <h3 className="font-semibold ">{heading}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
