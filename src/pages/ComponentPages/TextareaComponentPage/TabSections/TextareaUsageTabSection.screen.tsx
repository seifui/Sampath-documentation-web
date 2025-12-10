import React from "react";
import { BaseTabSectionScreen } from "./BaseTabSectionScreen.screen";
import {
  TEXTAREA_ANATOMY,
  TEXTAREA_STATES,
  TEXTAREA_DODONT_01,
  TEXTAREA_DODONT_02,
  TEXTAREA_DODONT_03,
} from "@assets";

export function TextareaUsageTabSection() {
  const scrollSpySections = ["Anatomy", "States", "Do’s & Don’ts"];
  return (
    <BaseTabSectionScreen scrollSpySections={scrollSpySections}>
      <div className="mt-14  text-primary dark:text-primary-dark">
        {/* Anatomy section */}
        <div id="Anatomy">
          <h2 className="text-3xl font-bold mb-6 ">Anatomy</h2>
          <p>
            The most basic structure of a text area consists of a container and
            an input field where users can enter multiline text. Additional
            elements can enhance functionality and user experience, such as a
            label to describe the input purpose and placeholder text to guide
            users when the field is empty. Helper text can be added below the
            text area to provide further instructions or context. Text areas can
            also display validation messages, such as error states, to inform
            users when input requirements are not met, ensuring better input
            accuracy and guidance.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={TEXTAREA_ANATOMY} alt="TEXTAREA_ANATOMY" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />
        {/* States section */}
        <div id="States">
          <h2 className="text-3xl font-bold mb-6 ">States</h2>
          <p className="mb-3">
            A text area has five key states—default, placeholder, filled, focus,
            and disabled—each designed to guide user interaction and ensure
            accessibility.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={TEXTAREA_STATES} alt="TEXTAREA_STATES" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />
        {/* Do's and Don'ts section */}
        <div id="Do’s & Don’ts">
          <h2 className="text-3xl font-bold mb-6 ">Do’s & Don’ts</h2>
          <p className="mb-3">
            Do's and Don'ts for text areas provide practical guidelines to
            ensure they are intuitive, accessible, and user-friendly. These best
            practices help create efficient user experiences by promoting
            clarity, usability, and error-free input interactions.
          </p>
          <div className="my-6">
            <img src={TEXTAREA_DODONT_01} alt="TEXTAREA_DO_&_DONT" />
          </div>
          <div className="my-6">
            <img src={TEXTAREA_DODONT_02} alt="TEXTAREA_DO_&_DONT" />
          </div>
          <div className="my-6">
            <img src={TEXTAREA_DODONT_03} alt="TEXTAREA_DO_&_DONT" />
          </div>
        </div>
      </div>
    </BaseTabSectionScreen>
  );
}
