import React from "react";
import { BaseTabSectionScreen } from "./BaseTabSectionScreen.screen";
import {
  RADIOBUTTON_ANATOMY,
  RADIOBUTTON_SIZES,
  RADIOBUTTON_VARIANTS,
  RADIOBUTTON_STATES,
  RADIOBUTTON_DODONT_01,
  RADIOBUTTON_DODONT_02
} from "@assets";

export function RadioButtonUsageTabSection() {
  const scrollSpySections = ["Anatomy", "Sizes", "States", "Property", "Icon Usage","Do’s & Don’ts"];
  return (
    <BaseTabSectionScreen scrollSpySections={scrollSpySections}>
      <div className="mt-14  text-gray-700 dark:text-gray-dark-700">
        {/* Anatomy section */}
        <div id="Anatomy">
          <h2 className="text-3xl font-bold mb-6 ">Anatomy</h2>
          <p>
            Radio buttons are a selection control that allows users to choose a single option from a set of mutually exclusive choices. Unlike checkboxes, they enforce a one-choice-only selection, ensuring that only one option can be selected at any given time.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6">
            <img src={RADIOBUTTON_ANATOMY} alt="BUTTON_USAGE_IMAGE_2" />
          </div> 
        </div>
        <hr className="my-8 bg-gray-200 dark:bg-gray-dark-200" />
        {/* Size section */}
        <div id="Sizes">
          <h2 className="text-3xl font-bold mb-6 ">Sizes</h2>
          <p className="mb-3">
           The radio button comes in two sizes—small (sm) and medium (md)—to accommodate different interface needs and visual hierarchies. The small size is ideal for compact layouts or dense UI elements, ensuring a minimal footprint without compromising usability. The medium size provides a more prominent selection area, improving accessibility and ease of interaction, making it suitable for standard form inputs and settings.
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
            The radio button includes four key states default, hover, focused, and disabled each designed to support clarity, usability, and accessibility. The default state shows the unselected option, the hover state provides visual feedback before interaction, the focused state highlights keyboard or assistive-tech navigation, and the disabled state prevents selection while clearly indicating unavailability.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6">
            <img src={RADIOBUTTON_STATES} alt="RADIOBUTTON_STATES" />
          </div>
        </div>
        <hr className="my-8 bg-gray-200 dark:bg-gray-dark-200" />

        <div id="Do’s & Don’ts"> 
          <h2 className="text-3xl font-bold mb-6 ">Do’s & Don’ts</h2>
          <p className="mb-3">
            Do’s and Don’ts provide clear guidelines to ensure radio buttons are intuitive, accessible, and easy to use—highlighting best practices to follow and common mistakes to avoid for a better user experience.
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
