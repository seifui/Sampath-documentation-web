import { TailwindColors } from "@types";
import React from "react";

type PageHeaderProps = {
  heading: string;
  content: string;
  imageUrl?: string | null;
  centered?: boolean;
  noPadding?: boolean;
};

export function PageHeader({
  heading,
  content,
  imageUrl = null,
  centered = false,
  noPadding = false,
}: PageHeaderProps) {
  return (
    <section className={`flex items-center content-center w-full py-12 ${noPadding ? '' : 'px-4 sm:px-6 lg:px-8'}`}>
      <div className={`${noPadding ? 'w-full' : 'max-w-[820px] w-full'} mx-auto`}>
        <div className={`flex flex-col text-gray-700 dark:text-gray-dark-700 gap-5 ${centered ? 'text-center items-center' : ''}`}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">{heading}</h1>
          <p className={`text-base text-gray-700 dark:text-gray-dark-700 leading-relaxed max-w-3xl ${centered ? 'mx-auto' : ''}`}>{content}</p>
        </div>
      </div>
      {/* {imageUrl && (
        <div className="w-1/2 max-w-xs hidden md:block">
          <img src={imageUrl} alt="COMPONENT_HOME_HEADER_IMAGE" />
        </div>
      )} */}
    </section>
  );
}
