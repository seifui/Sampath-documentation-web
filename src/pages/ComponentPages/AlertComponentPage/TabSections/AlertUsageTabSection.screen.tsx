import React from "react";
import { BaseTabSectionScreen } from "./BaseTabSectionScreen.screen";
import {
  ALERT_ANATOMY,
  ALERT_VARIANTS,
  ALERT_TYPES,
  ALERT_DODONT_01,
} from "@assets";
export function AlertUsageTabSection() {
  const scrollSpySections = ["Anatomy", "Variants", "Types", "Do’s & Don’ts"];
  return (
    <BaseTabSectionScreen scrollSpySections={scrollSpySections}>
      <div className="mt-14  text-primary dark:text-primary-dark">

        {/* Anatomy section */}
        <div id="Anatomy">
          <h2 className="text-3xl font-semibold mb-6 ">Anatomy</h2>
          <p>
          The most basic setup of an alert includes a clear title that communicates the nature of the message at a glance. An accompanying icon reinforces the alert type, providing an immediate visual cue for information, success, warning, or error states. The message text delivers concise and actionable details, helping users understand the context without unnecessary complexity. Optional actions, such as dismiss or retry, allow users to respond when required. Visual emphasis through color and spacing ensures the alert stands out while remaining consistent with the overall interface and accessible across different contexts.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={ALERT_ANATOMY} alt="ALERT_ANATOMY" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />

        {/* Variants section */}
        <div id="Variants">
          <h2 className="text-3xl font-semibold mb-6 ">Variants</h2>
          <p className="mb-3">
            Alerts are available in five variants to represent different message intents: neutral for general information, brand for product-related highlights, success for positive outcomes, warning for potential issues, and error for critical problems.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={ALERT_VARIANTS} alt="ALERT_VARIANTS" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />

        {/* Types section */}
        <div id="Types">
          <h2 className="text-3xl font-semibold mb-6 ">Types</h2>
          <p className="mb-3">
              Alerts are available in three types to support different content structures, allowing messages to be displayed as a heading only, text only, or a combination of heading and text for flexible communication.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={ALERT_TYPES} alt="ALERT_TYPES" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />

        {/* Do's and Don'ts section */}
        <div id="Do’s & Don’ts">
          <h2 className="text-3xl font-semibold mb-6 ">Do’s & Don’ts</h2>
          <p className="mb-3">
            Do’s and Don’ts are practical guidelines that outline best practices
            and common pitfalls when using accordions, helping ensure they are
            intuitive, accessible, and improve content discoverability without
            overwhelming users.
          </p>
          <div className="my-6">
            <img src={ALERT_DODONT_01} alt="ALERT_DODONT_01" />
          </div>
        </div>
      </div>
    </BaseTabSectionScreen>
  );
}
