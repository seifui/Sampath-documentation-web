import React from "react";
import { BaseTabSectionScreen } from "./BaseTabSectionScreen.screen";
import {
 CHECKBOX_ANATOMY,
 CHECKBOX_SIZES,
 CHECKBOX_VARIANTS,
 CHECKBOX_STATES,
 CHECKBOX_DODONT_01,
 CHECKBOX_DODONT_02,
} from "@assets";

export function CheckboxUsageTabSection() {
  const scrollSpySections = ["Anatomy", "Sizes", "States", "Variants", "Do’s & Don’ts"];
  return (
    <BaseTabSectionScreen scrollSpySections={scrollSpySections}>
      <div className="mt-14  text-gray-700 dark:text-gray-dark-700">
        {/* Anatomy section */}
        <div id="Anatomy">
          <h2 className="text-3xl font-bold mb-6 ">Anatomy</h2>
          <p>
           The checkbox is a selection control that enables users to make binary choices, allowing them to select or deselect one or multiple options independently. Unlike radio buttons, checkboxes do not enforce a single-selection rule  - each option can be toggled on or off without affecting others in the group. This control is ideal for scenarios where users may need to activate several options simultaneously or indicate multiple preferences at once
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-auto">
            <img src={CHECKBOX_ANATOMY} alt="Checkbox Anatomy Image" />
          </div>
        </div>
        <hr className="my-8 bg-gray-200 dark:bg-gray-dark-200" />
        {/* Size section */}
        <div id="Sizes">
          <h2 className="text-3xl font-bold mb-6 ">Sizes</h2>
          <p className="mb-3">
            The checkbox is available in two sizes sm and md to support a wide range of interface layouts and accessibility needs. Each size is thoughtfully crafted to maintain clear visibility, comfortable interaction, and consistent alignment within various UI components. These size options ensure that checkboxes remain adaptable and visually balanced across different design contexts.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6">
            <img src={CHECKBOX_SIZES} alt="CHECKBOX_SIZES" />
          </div> 
        </div>
        <hr className="my-8 bg-gray-200 dark:bg-gray-dark-200" />
        {/* States section */}
        <div id="States">
          <h2 className="text-3xl font-bold mb-6 ">States</h2>
          <p className="mb-3">
            The checkbox has three key states—default, focused, and disabled—each serving a specific purpose to ensure usability and accessibility. The default state allows users to select or deselect an option, the focused state provides visual feedback to indicate interactivity, and the disabled state prevents interaction while signaling unavailability.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6">
            <img src={CHECKBOX_STATES} alt="CHECKBOX_STATES" />
          </div> 
        </div>
        <hr className="my-8 bg-gray-200 dark:bg-gray-dark-200" />
        {/* Variants section */}
        <div id="Variants">
          <h2 className="text-3xl font-bold mb-6 ">Variants</h2>
          <p className="mb-3">
            Checkboxes come in two variants—single row and multi-row—designed to accommodate different layout needs. The single-row variant aligns options horizontally for compact spaces, while the multi-row variant stacks options vertically for better readability and ease of selection. 
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6">
            <img src={CHECKBOX_VARIANTS} alt="CHECKBOX_VARIANTS" />
          </div>
        </div>
        <hr className="my-8 bg-gray-200 dark:bg-gray-dark-200" />
        {/* Do’s & Don’ts section */}
        <div id="Do’s & Don’ts">
          <h2 className="text-3xl font-bold mb-6 ">Do’s & Don’ts</h2>
          <p className="mb-3">
            Do's and Don'ts are practical guidelines that outline best practices to follow and common mistakes to avoid, ensuring checkboxes are intuitive, accessible, and enhance user interaction.
          </p>
          <div className="p-4 my-6">
            <img src={CHECKBOX_DODONT_01} alt="CHECKBOX_DO&DONT_01" />
          </div>
          <div className="p-4 my-6">
            <img src={CHECKBOX_DODONT_02} alt="CHECKBOX_DO&DONT_02" />
          </div>
        </div>
      </div> 
    </BaseTabSectionScreen>
  );
}
