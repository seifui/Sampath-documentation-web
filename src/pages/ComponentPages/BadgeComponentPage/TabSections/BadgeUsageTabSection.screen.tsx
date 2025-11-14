import React from "react";
import { BaseTabSectionScreen } from "./BaseTabSectionScreen.screen";
import {
  BADGE_ANATOMY,
  BADGE_SHAPES,
  BADGE_SIZES,
  BADGE_VARIANTS,
  BADGE_TYPES,
  BADGE_ICON_USAGE,
  BADGE_DODONT_01,
  BADGE_DODONT_02

} from "@assets";

export function BadgeUsageTabSection() {
  const scrollSpySections = ["Anatomy", "Shapes", "Sizes", "Variants", "States", "Types", "Icon Usage","Do’s & Don’ts"];
  return (
    <BaseTabSectionScreen scrollSpySections={scrollSpySections}>
      <div className="mt-14  text-gray-700 dark:text-gray-dark-700">
        {/* Anatomy section */}
        <div id="Anatomy">
          <h2 className="text-3xl font-bold mb-6 ">Anatomy</h2>
          <p>
            A badge is a UI component used to convey status updates, notifications, or alerts in a concise manner. It helps users quickly identify new messages, updates, or changes within an application. Positioned alongside key elements, badges enhance visibility by drawing attention to important information, making them an effective tool for improving user engagement and awareness.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6">
            <img src={BADGE_ANATOMY} alt="BADGE_ANATOMY" />
          </div> 
        </div>
        {/* Shape section */}
        <hr className="my-8 bg-gray-200 dark:bg-gray-dark-200" />
        <div id="Shapes">
          <h2 className="text-3xl font-bold mb-6 ">Shapes</h2>
          <p className="mb-3">
            Badges come in rounded, rectangular, circle shapes.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6">
            <img src={BADGE_SHAPES} alt="BADGE_SHAPES" />
          </div> 
        </div>
        <hr className="my-8 bg-gray-200 dark:bg-gray-dark-200" />
        {/* Size section */}
        <div id="Sizes">
          <h2 className="text-3xl font-bold mb-6 ">Sizes</h2>
          <p className="mb-3">
            The Badge is available in multiple sizes to accommodate different design needs and contexts. Each size is carefully designed to ensure readability, visual harmony, and usability while seamlessly integrating into various interface elements.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6">
            <img src={BADGE_SIZES} alt="BADGE_SIZES" />
          </div> 
        </div>
        <hr className="my-8 bg-gray-200 dark:bg-gray-dark-200" />
        {/* Variant section */}
        <div id="Variants"> 
          <h2 className="text-3xl font-bold mb-6 ">Variants</h2>
          <p className="mb-3">
            Radio buttons come in three variants no text, one row, and multi-row designed to accommodate different interface needs. The no-text variant is minimal, displaying only the radio button without a label. The one-row variant pairs the radio button with a single-line label for clear and concise selections. The multi-row variant allows for longer descriptions, making it ideal for options that require additional context or explanation.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6">
            <img src={BADGE_VARIANTS} alt="BADGE_VARIANTS" />
          </div>
        </div>
        <hr className="my-8 bg-gray-200 dark:bg-gray-dark-200" />       
        {/* Types section */}
        <div id="Types"> 
          <h2 className="text-3xl font-bold mb-6 ">Types</h2>
          <p className="mb-3">
            Badges are available in four types to suit different design needs, offering variations in fill and border styles for better visual adaptability.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6">
            <img src={BADGE_TYPES} alt="BADGE_TYPES" />
          </div>
        </div>
        <hr className="my-8 bg-gray-200 dark:bg-gray-dark-200" />
        {/* Icon Usage section */}
        <div id="Icon Usage"> 
          <h2 className="text-3xl font-bold mb-6 ">Icon Usage</h2>
          <p className="mb-3">
            Icons can be used in badges to enhance recognition and improve visual communication, making information more intuitive and accessible.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6">
            <img src={BADGE_ICON_USAGE} alt="BADGE_ICON_USAGE" />
          </div>
        </div>
        <hr className="my-8 bg-gray-200 dark:bg-gray-dark-200" />
        {/* Do’s & Don’ts section */}
        <div id="Do’s & Don’ts"> 
          <h2 className="text-3xl font-bold mb-6 ">Do’s & Don’ts</h2>
          <p className="mb-3">
            Do’s and Don’ts offer quick guidelines to follow and avoid, helping you create clear and user-friendly badges
          </p>
          <div className="my-6">
            <img src={BADGE_DODONT_01} alt="BADGE_DO_&_DONT_01" />
          </div>
          <div className="my-6">
            <img src={BADGE_DODONT_02} alt="BADGE_DO_&_DONT_02" />
          </div>
        </div>
      </div>
    </BaseTabSectionScreen>
  );
}
