import React from "react";
import { BaseTabSectionScreen } from "./BaseTabSectionScreen.screen";
import {
  PROGRESS_STEP_ANATOMY,
  PROGRESS_STEP_VARIANTS,
  PROGRESS_STEP_TYPES,
  RADIOBUTTON_DODONT_01,
  RADIOBUTTON_DODONT_02,

} from "@assets";

export function ProgressStepsUsageTabSection() {
  const scrollSpySections = [
    "Anatomy",
    "Variants",
    "Types",
    "Do’s & Don’ts",
  ];
  return (
    <BaseTabSectionScreen scrollSpySections={scrollSpySections}>
      <div className="mt-14  text-primary dark:text-primary-dark">
        {/* Anatomy section */}
        <div id="Anatomy">
          <h2 className="text-3xl font-semibold mb-6 ">Anatomy</h2>
          <p>
            A progress steps consists of step indicators (icons or numbers), connectors that link each step, labels describing each stage, and visual states for completed, current, and pending steps. Together, these elements help users understand their position in a multi-step workflow and what comes next.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={PROGRESS_STEP_ANATOMY} alt="BUTTON_USAGE_IMAGE_2" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />
        <div id="Variants">
          <h2 className="text-3xl font-semibold mb-6 ">Variants</h2>
          <p className="mb-3">
            Steppers are available in three variants (Default, Horizontal, and Vertical) designed to support 
            different layouts and user flows. The Default variant presents steps in a compact, linear 
            format suitable for most multi-step processes. The Horizontal variant displays steps across a single row, making progress easy to scan at the top of a page or within wide layouts. The Vertical variant stacks steps in a column, providing more room for labels and descriptions and working well for long forms or narrow screens.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={PROGRESS_STEP_VARIANTS} alt="BUTTON_STATES" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />
        <div id="Types">
          <h2 className="text-3xl font-semibold mb-6 ">Types</h2>
          <p className="mb-3">
          Progress steps consist of a step container, step indicators, connectors, and step labels. Each step represents a stage in the process, progressing from Step 01 through Step 06, with visual states that indicate completed, active, and upcoming steps to help users understand their current position and overall progress.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={PROGRESS_STEP_TYPES} alt="PROGRESS_STEP_TYPES" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />

        <div id="Do’s & Don’ts">
          <h2 className="text-3xl font-semibold mb-6 ">Do’s & Don’ts</h2>
          <p className="mb-3">
            Do’s and Don’ts provide clear guidelines to ensure radio buttons are
            intuitive, accessible, and easy to use—highlighting best practices
            to follow and common mistakes to avoid for a better user experience.
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
