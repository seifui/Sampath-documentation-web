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
      className="flex flex-col gap-4 cursor-pointer rounded-xl text-gray-700 dark:text-gray-dark-700 mx-auto w-full group hover:shadow-lg transition-all duration-300 bg-white dark:bg-solid-dark-raised overflow-hidden"
    >
      {/* //TODO: remove below dev and replace it with an image */}
      <div className="overflow-hidden rounded-t-xl">
        <img className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" src={imageUrl} alt={heading} />
      </div>
      <div className="px-4 pb-5 pt-1">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg group-hover:text-brand-600 dark:group-hover:text-brand-600 transition-colors">{heading}</h3>
        </div>
      </div>
    </div>
  );
}
