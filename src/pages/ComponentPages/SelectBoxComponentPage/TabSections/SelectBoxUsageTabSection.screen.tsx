import React from "react";
import { BaseTabSectionScreen } from "./BaseTabSectionScreen.screen";
import {
    SELECTBOX_ANATOMY,
    SELECTBOX_STATE,
    SELECTBOX_SIZE,
    SELECTBOX_PROPERTY,
    SELECTBOX_DODONT_01,
    SELECTBOX_DODONT_02,
    SELECTBOX_DODONT_03,
} from "@assets";

export function SelectBoxUsageTabSection() {
  const scrollSpySections = [
    "Anatomy",
    "Sizes",
    "Property",
    "States",
    "Do’s & Don’ts",
  ];
  return (
    <BaseTabSectionScreen scrollSpySections={scrollSpySections}>
      <div className="mt-14  text-primary dark:text-primary-dark">
        {/* Anatomy section */}
        <div id="Anatomy">
          <h2 className="text-3xl font-semibold mb-6 ">Anatomy</h2>
          <p>
            A select box is a component that allows users to choose one or more options from a dropdown list. It typically includes a container and a trigger area that displays the selected value or placeholder. Additional elements such as a label, helper text, and icons can be included to guide users and enhance usability. It also supports different states like focused, disabled, and error, and may offer features like multi-selection and search to improve the selection experience.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={SELECTBOX_ANATOMY} alt="SELECTBOX_ANATOMY_IMAGE" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />
        {/* Size section */}
        <div id="Sizes">
          <h2 className="text-3xl font-semibold mb-6 ">Sizes</h2>
          <p className="mb-3">
          The select box comes in multiple sizes sm, md, lg, and xl  to support different layouts and ensure a consistent experience across various screen sizes.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={SELECTBOX_SIZE} alt="SELECTBOX_SIZE_IMAGE" />
            
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />
        <div id="Property">
          <h2 className="text-3xl font-semibold mb-6 ">Property</h2>
          <p className="mb-3">
          The select box includes six key properties—default, placeholder, filled, multi-select, searchable, and hint. Each designed to enhance flexibility, improve usability, and support different user interaction needs.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={SELECTBOX_PROPERTY} alt="SELECTBOX_PROPERTY_IMAGE" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />
        <div id="States">
          <h2 className="text-3xl font-semibold mb-6 ">States</h2>
          <p className="mb-3">
             The select box has three key states—default, focused, and disabled. Each designed to guide user interaction and ensure a clear and accessible selection experience.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={SELECTBOX_STATE} alt="SELECTBOX_STATE_IMAGE" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />

        <div id="Do’s & Don’ts">
          <h2 className="text-3xl font-semibold mb-6 ">Do’s & Don’ts</h2>
          <p className="mb-3">
          Do’s and Don’ts are practical guidelines that highlight best practices to follow and common mistakes to avoid when using select boxes, ensuring they remain clear, accessible, and easy for users to interact with.
          </p>
          <div className="my-6">
            <img src={SELECTBOX_DODONT_01} alt="SELECTBOX_DO_&_DONT_01_IMAGE" />
          </div>
          <div className="my-6">
            <img src={SELECTBOX_DODONT_02} alt="SELECTBOX_DO_&_DONT_02_IMAGE" />
          </div>
          <div className="my-6">
            <img src={SELECTBOX_DODONT_03} alt="SELECTBOX_DO_&_DONT_03_IMAGE" />
          </div>
        </div>
      </div>
    </BaseTabSectionScreen>
  );
}
