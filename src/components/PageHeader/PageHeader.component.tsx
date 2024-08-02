import { TailwindColors } from "@types";
import React from "react";

type PageHeaderProps = {
  heading: string;
  content: string;
  imageUrl?: string;
};

export function PageHeader({ heading, content, imageUrl }: PageHeaderProps) {
  return (
    <section className="flex  items-center content-center bg-gray-100 dark:bg-gray-dark-200 px-3 xl:px-6 w-full py-6">
      <div className="flex flex-col text-gray-700 dark:text-gray-dark-700  gap-4">
        <h1 className="text-2xl font-semibold">{heading}</h1>
        <p className="text-sm">{content}</p>
      </div>
      {imageUrl && (
        <div className="w-1/2 max-w-xs hidden md:block">
          <img src={imageUrl} alt="COMPONENT_HOME_HEADER_IMAGE" />
        </div>
      )}
    </section>
  );
}
