import React from "react";
import { BaseTabSectionScreen } from "./BaseTabSectionScreen.screen";
import {
  BADGE_ANATOMY,
  RADIOBUTTON_SIZES,
  RADIOBUTTON_VARIANTS,
  RADIOBUTTON_STATES,
  RADIOBUTTON_DODONT_01,
  RADIOBUTTON_DODONT_02
} from "@assets";

export function BadgeUsageTabSection() {
  const scrollSpySections = ["Anatomy", "Sizes", "States", "Property", "Icon Usage","Do’s & Don’ts"];
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
            <img src={BADGE_ANATOMY} alt="BUTTON_USAGE_IMAGE_2" />
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
            <img src={RADIOBUTTON_SIZES} alt="BUTTON_USAGE_IMAGE_2" />
          </div> 
        </div>
        <hr className="my-8 bg-gray-200 dark:bg-gray-dark-200" />
        <div id="Variants"> 
          <h2 className="text-3xl font-bold mb-6 ">Variants</h2>
          <p className="mb-3">
            Radio buttons come in three variants no text, one row, and multi-row designed to accommodate different interface needs. The no-text variant is minimal, displaying only the radio button without a label. The one-row variant pairs the radio button with a single-line label for clear and concise selections. The multi-row variant allows for longer descriptions, making it ideal for options that require additional context or explanation.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6">
            <img src={RADIOBUTTON_VARIANTS} alt="BUTTON_STATES" />
          </div>
        </div>
        <hr className="my-8 bg-gray-200 dark:bg-gray-dark-200" />
        <div id="Property"> 
          <h2 className="text-3xl font-bold mb-6 ">States</h2>
          <p className="mb-3">
            The checkbox has three key states—default, focused, and disabled—each serving a specific purpose to ensure usability and accessibility. The default state allows users to select or deselect an option, the focused state provides visual feedback to indicate interactivity, and the disabled state prevents interaction while signaling unavailability.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6">
            <img src={RADIOBUTTON_STATES} alt="RADIOBUTTON_STATES" />
          </div>
        </div>
        <hr className="my-8 bg-gray-200 dark:bg-gray-dark-200" />

        <div id="Do’s & Don’ts"> 
          <h2 className="text-3xl font-bold mb-6 ">Do’s & Don’ts</h2>
          <p className="mb-3">
             Do's and Don'ts are practical guidelines that outline best practices to follow and common mistakes to avoid, ensuring checkboxes are intuitive, accessible, and enhance user interaction.
          </p>
          <div className="my-6">
            <img src={RADIOBUTTON_DODONT_01} alt="ICON_DO_&_DONT" />
          </div>
          <div className="my-6">
            <img src={RADIOBUTTON_DODONT_02} alt="ICON_DO_&_DONT" />
          </div>
        </div>
      </div>
    </BaseTabSectionScreen>
  );
}
