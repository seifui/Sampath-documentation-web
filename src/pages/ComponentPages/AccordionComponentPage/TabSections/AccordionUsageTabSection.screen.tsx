import React from "react";
import { BaseTabSectionScreen } from "./BaseTabSectionScreen.screen";
import {
  ACCORDION_ANATOMY,
  ACCORDION_VARIANTS,
  ACCORDION_DODONT_01,
} from "@assets";
export function AccordionUsageTabSection() {
  const scrollSpySections = ["Anatomy", "Variants", "Do’s & Don’ts"];
  return (
    <BaseTabSectionScreen scrollSpySections={scrollSpySections}>
      <div className="mt-14  text-primary dark:text-primary-dark">
        {/* Anatomy section */}
        <div id="Anatomy">
          <h2 className="text-3xl font-semibold mb-6 ">Anatomy</h2>
          <p>
            The most basic setup of an accordion includes a header label that
            clearly represents the section’s content. A icon, such as a chevron,
            provides a consistent visual indicator of expand and collapse
            states. When activated, the header reveals the associated panel,
            ensuring information is progressively disclosed without overwhelming
            the user. Motion feedback reinforces interactivity, making the
            accordion recognizable and accessible across different contexts.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={ACCORDION_ANATOMY} alt="ACCORDION_ANATOMY" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />
        {/* Shapes section */}
        <div id="Variants">
          <h2 className="text-3xl font-semibold mb-6 ">Variants</h2>
          <p className="mb-3">
            Accordions come in three variants to support different interaction
            needs. The default variant displays panels collapsed, the expanded
            variant opens a panel by default to highlight key content, and the
            multiple variant allows users to expand more than one panel at a
            time.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={ACCORDION_VARIANTS} alt="ACCORDION_VARIANTS" />
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
            <img src={ACCORDION_DODONT_01} alt="ACCORDION_DODONT_01" />
          </div>
        </div>
      </div>
    </BaseTabSectionScreen>
  );
}
