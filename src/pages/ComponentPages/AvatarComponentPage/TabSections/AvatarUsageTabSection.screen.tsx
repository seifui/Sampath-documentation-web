import React from "react";
import { BaseTabSectionScreen } from "./BaseTabSectionScreen.screen";
import {
  AVATAR_ANATOMY,
  AVATAR_SHAPES,
  AVATAR_SIZES,
  AVATAR_TYPES,
  AVATAR_VARIANTS,
  AVATAR_DODONT_01,
} from "@assets";

export function AvatarUsageTabSection() {
  const scrollSpySections = [
    "Anatomy",
    "Shapes",
    "Sizes",
    "Types",
    "Variants",
    "Do’s & Don’ts",
  ];
  return (
    <BaseTabSectionScreen scrollSpySections={scrollSpySections}>
      <div className="mt-14  text-primary dark:text-primary-dark">
        {/* Anatomy section */}
        <div id="Anatomy">
          <h2 className="text-3xl font-semibold mb-6 ">Anatomy</h2>
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
            <img src={AVATAR_ANATOMY} alt="AVATAR_ANATOMY" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />
        {/* Shapes section */}
        <div id="Shapes">
          <h2 className="text-3xl font-semibold mb-6 ">Shapes</h2>
          <p className="mb-3">Avatar come in rectangular & circle shapes.</p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={AVATAR_SHAPES} alt="AVATAR_SHAPES" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />
        {/* Sizes section */}
        <div id="Sizes">
          <h2 className="text-3xl font-semibold mb-6 ">Sizes</h2>
          <p className="mb-3">
            The Avatar is available in five sizes(XXS, XS, SM, MD, and LG) to
            adapt to different design needs and interface contexts. Each size is
            thoughtfully designed to maintain clarity, visual balance, and
            usability across various touchpoints.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={AVATAR_SIZES} alt="AVATAR_SIZES" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />
        {/* Types section */}
        <div id="Types">
          <h2 className="text-3xl font-semibold mb-6 ">Types</h2>
          <p className="mb-3">
            Avatars are available in two types (icon and text) to suit different
            design needs. The Icon avatar visually represents a user or brand,
            while the Text avatar provides a typographic alternative for better
            adaptability and accessibility.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={AVATAR_TYPES} alt="AVATAR_TYPES" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />
        {/* Variants section */}
        <div id="Variants">
          <h2 className="text-3xl font-semibold mb-6 ">Variants</h2>
          <p className="mb-3">
            Avatar variants offer different visual styles to suit various use
            cases, ensuring flexibility and consistency across the interface
            while maintaining brand identity and user recognition.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={AVATAR_VARIANTS} alt="AVATAR_VARIANTS" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />
        {/* Do's and Don'ts section */}
        <div id="Do’s & Don’ts">
          <h2 className="text-3xl font-semibold mb-6 ">Do’s & Don’ts</h2>
          <p className="mb-3">
            Do's and Don'ts for text areas provide practical guidelines to
            ensure they are intuitive, accessible, and user-friendly. These best
            practices help create efficient user experiences by promoting
            clarity, usability, and error-free input interactions.
          </p>
          <div className="my-6">
            <img src={AVATAR_DODONT_01} alt="AVATAR_DO_&_DONT" />
          </div>
        </div>
      </div>
    </BaseTabSectionScreen>
  );
}
