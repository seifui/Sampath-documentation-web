import React from "react";
import { BaseTabSectionScreen } from "./BaseTabSectionScreen.screen";
import { LINK_ANATOMY, LINK_SIZES, LINK_ICON, LINK_DODONT_01 } from "@assets";

export function LinkUsageTabSection() {
  const scrollSpySections = ["Anatomy", "Sizes", "Icons", "Do’s & Don’ts"];
  return (
    <BaseTabSectionScreen scrollSpySections={scrollSpySections}>
      <div className="mt-14  text-primary dark:text-primary-dark">
        {/* Anatomy section */}
        <div id="Anatomy">
          <h2 className="text-3xl font-semibold mb-6 ">Anatomy</h2>
          <p>
            The most basic setup of a link includes an underlined text label
            that clearly represents the navigation target. A link can be
            enhanced with a leading icon and a trailing icon to provide
            additional visual context or indicate actions such as navigation or
            external destinations. The underline serves as a consistent visual
            indicator of interactivity, ensuring the link remains recognizable
            and accessible across different states.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={LINK_ANATOMY} alt="LINK_ANATOMY" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />

        {/* Sizes section */}
        <div id="Sizes">
          <h2 className="text-3xl font-semibold mb-6 ">Sizes</h2>
          <p className="mb-3">
            Link comes in three sizes sm, md & lg to accommodate different
            design needs and screen sizes.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={LINK_SIZES} alt="LINK_SIZES" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />
        {/* Icons section */}
        <div id="Icons">
          <h2 className="text-3xl font-semibold mb-6 ">Icons</h2>
          <p className="mb-3">
            Links can include a leading icon, a trailing icon, or no icon at
            all. Icons add visual context or indicate direction, while text-only
            links keep the design clean and minimal.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={LINK_ICON} alt="LINK_ICONS" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />
        {/* Do's and Don'ts section */}
        <div id="Do’s & Don’ts">
          <h2 className="text-3xl font-semibold mb-6 ">Do’s & Don’ts</h2>
          <p className="mb-3">
            Do's and Don'ts are practical guidelines that outline best practices
            to follow and common mistakes to avoid, ensuring checkboxes are
            intuitive, accessible, and enhance user interaction.
          </p>
          <div className="my-6">
            <img src={LINK_DODONT_01} alt="LINK_DO_&_DONT" />
          </div>
        </div>
      </div>
    </BaseTabSectionScreen>
  );
}
