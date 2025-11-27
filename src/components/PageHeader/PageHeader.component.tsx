import { TailwindColors } from "@types";
import React from "react";

type PageHeaderProps = {
  heading: string;
  content: string;
  imageUrl?: string | null;
};

export function PageHeader({
  heading,
  content,
  imageUrl = null,
}: PageHeaderProps) {
  return (
    <section
      className={`flex  items-center content-center px-6 md:px-16 w-full pt-8 pb-8 
      }`}
    >
      <div className="flex flex-col text-gray-700 dark:text-gray-dark-700 gap-4">
        <h1 className="text-3xl sm:text-5xl font-bold mt-10">{heading}</h1>
        <p className="text-base">{content}</p>
      </div>
      {/* {imageUrl && (
        <div className="w-1/2 max-w-xs hidden md:block">
          <img src={imageUrl} alt="COMPONENT_HOME_HEADER_IMAGE" />
        </div>
      )} */}
    </section>
  );
}
