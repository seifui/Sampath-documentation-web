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
      className="flex flex-col gap-2 cursor-pointer rounded-xl text-primary dark:text-primary-dark mx-auto w-full bg-white dark:bg-solid-dark-raised overflow-hidden"
    >
      {/* //TODO: remove below dev and replace it with an image */}
      <div className="overflow-hidden rounded-xl">
        <img className="w-full h-60 object-cover" src={imageUrl} alt={heading} />
      </div>
      <div className="px-4 pb-5 pt-0">
        <div className="space-y-2">
          <h3 className="font-semibold text-base text-left pl-0 -ml-4 text-secondary">{heading}</h3>
        </div>
      </div>
    </div>
  );
}
