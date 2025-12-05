import { ComponentsPreviewCardProps } from "@types";
import React from "react";

export function ComponentsPreviewCard({
  heading,
  description,
  imageUrl,
  onClickNavigationPath,
}: ComponentsPreviewCardProps) {
  return (
    <div
      onClick={() => onClickNavigationPath && window.location.assign(onClickNavigationPath)}
      className="flex flex-col gap-3 cursor-pointer rounded-xl text-gray-700 dark:text-gray-dark-700 mx-auto xl:w-60"
    >
      {/* //TODO: remove below dev and replace it with an image */}
      <div>
        <img className="w-full rounded-xl" src={imageUrl} alt="" />
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
