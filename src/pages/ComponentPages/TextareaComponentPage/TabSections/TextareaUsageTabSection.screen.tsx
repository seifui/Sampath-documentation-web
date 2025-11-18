import React from "react";
import { BaseTabSectionScreen } from "./BaseTabSectionScreen.screen";
import {
  SWITCH_ANATOMY,
  SWITCH_SIZES,
  SWITCH_VARIANTS,
  SWITCH_STATES,
  SWITCH_DODONT_01

} from "@assets";

export function TextareaUsageTabSection() {
  const scrollSpySections = ["Anatomy", "Sizes", "Variants", "States", "Do’s & Don’ts"];
  return (
    <BaseTabSectionScreen scrollSpySections={scrollSpySections}>
      <div className="mt-14  text-gray-700 dark:text-gray-dark-700">
        {/* Anatomy section */}
        <div id="Anatomy">
          <h2 className="text-3xl font-bold mb-6 ">Anatomy</h2>
          <p>
              The most basic structure of a text area consists of a container and an input field where users can enter multiline text. Additional elements can enhance functionality and user experience, such as a label to describe the input purpose and placeholder text to guide users when the field is empty. Helper text can be added below the text area to provide further instructions or context. Text areas can also display validation messages, such as error states, to inform users when input requirements are not met, ensuring better input accuracy and guidance.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6">
            <img src={SWITCH_ANATOMY} alt="SWITCH_ANATOMY" />
          </div> 
        </div>
        <hr className="my-8 bg-gray-200 dark:bg-gray-dark-200" />
        {/* Size section */}
        <div id="Sizes">
          <h2 className="text-3xl font-bold mb-6 ">Sizes</h2>
          <p className="mb-3">
             The switch comes in two sizes—sm and md—each designed to accommodate different interface needs and preferences. The sm size is compact and ideal for space-constrained layouts, while the md size offers better visibility and accessibility for broader usability.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6">
            <img src={SWITCH_SIZES} alt="SWITCH_SIZES" />
          </div> 
        </div>
        <hr className="my-8 bg-gray-200 dark:bg-gray-dark-200" />
        <div id="Variants"> 
          <h2 className="text-3xl font-bold mb-6 ">Variants</h2>
          <p className="mb-3">
            Switches come in two variants—single row and multi-row—designed to suit different interface layouts. The single-row variant arranges switches horizontally for a streamlined look in compact spaces, while the multi-row variant stacks switches vertically to enhance readability and accessibility.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6">
            <img src={SWITCH_VARIANTS} alt="SWITCH_VARIANTS" />
          </div>
        </div>
        <hr className="my-8 bg-gray-200 dark:bg-gray-dark-200" />
        <div id="States"> 
          <h2 className="text-3xl font-bold mb-6 ">States</h2>
          <p className="mb-3">
             The switch has four key states—default, hover, focused, and disabled—each serving a specific purpose to enhance usability and accessibility. The default state allows users to toggle the switch on or off, the hover state provides a visual cue to indicate interactivity, the focused state highlights the switch for keyboard navigation and accessibility, and the disabled state prevents interaction while signaling unavailability.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6">
            <img src={SWITCH_STATES} alt="SWITCH_STATES" />
          </div>
        </div>
        <hr className="my-8 bg-gray-200 dark:bg-gray-dark-200" />
        <div id="Do’s & Don’ts"> 
          <h2 className="text-3xl font-bold mb-6 ">Do’s & Don’ts</h2>
          <p className="mb-3">
             Do's and Don'ts are practical guidelines that outline best practices to follow and common mistakes to avoid, ensuring switches are user-friendly, accessible, and seamlessly integrate into the interface for an intuitive experience.
          </p>
          <div className="my-6">
            <img src={SWITCH_DODONT_01} alt="SWITCH_DO_&_DONT" />
          </div>
        </div>
      </div>
    </BaseTabSectionScreen>
  );
}
