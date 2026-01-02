import React from "react";
import { BaseTabSectionScreen } from "@components";
import {
  TEXT_FEILD_ANATOMY,
  TEXT_FEILD_SIZE_SM,
  TEXT_FEILD_SIZE_MD,
  TEXT_FEILD_SIZE_LG,
  TEXT_FEILD_SIZE_XL,
  TEXT_FEILD_STATES,
  TEXT_FEILD_PROPERTY,
  TEXT_FEILD_ICON_USAGE,
  TEXT_FEILD_DODONT_01,
  TEXT_FEILD_DODONT_02,
} from "@assets";

export function TextUsageTabSection() {
  const scrollSpySections = [
    "Anatomy",
    "Sizes",
    "States",
    "Property",
    "Icon Usage",
    "Do’s & Don’ts",
  ];
  return (
    <BaseTabSectionScreen scrollSpySections={scrollSpySections}>
      <div className="mt-14  text-primary dark:text-primary-dark">
        {/* Anatomy section */}
        <div id="Anatomy">
          <h2 className="text-3xl font-semibold mb-6 ">Anatomy</h2>
          <p>
            The most basic setup of a text field consists of a container and an
            input area where users can enter text. However, a text field can
            also be customized to include additional elements such as a label, a
            placeholder, and helper text to guide users. It can support leading
            and trailing icons for added functionality, such as a search icon.
            Furthermore, text fields can display validation messages, such as
            error or success states, and may include a character counter to
            provide feedback on input length.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={TEXT_FEILD_ANATOMY} alt="BUTTON_USAGE_IMAGE_2" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />
        {/* Size section */}
        <div id="Sizes">
          <h2 className="text-3xl font-semibold mb-6 ">Sizes</h2>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
                <img src={TEXT_FEILD_SIZE_SM} alt="TEXT_FEILD_IMAGE_3" />
              </div>
              <h4 className="text-l font-semibold mb-2 ml-3">SM</h4>
            </div>
            <div>
              <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
                <img src={TEXT_FEILD_SIZE_MD} alt="TEXT_FEILD_IMAGE_4" />
              </div>
              <h4 className="text-l font-semibold mb-2 ml-3">MD</h4>
            </div>
            <div>
              <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
                <img src={TEXT_FEILD_SIZE_LG} alt="TEXT_FEILD_IMAGE_5" />
              </div>
              <h4 className="text-l font-semibold mb-2 ml-3">LG</h4>
            </div>
            <div>
              <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
                <img src={TEXT_FEILD_SIZE_XL} alt="TEXT_FEILD_IMAGE_5" />
              </div>
              <h4 className="text-l font-semibold mb-2 ml-3">XL</h4>
            </div>
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />
        <div id="States">
          <h2 className="text-3xl font-semibold mb-6 ">States</h2>
          <p className="mb-3">
            Input feild has three key states default, focused, and disabled—each
            serving a specific purpose to enhance user experience and
            accessibility. 
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={TEXT_FEILD_STATES} alt="BUTTON_STATES" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />
        <div id="Property">
          <h2 className="text-3xl font-semibold mb-6 ">Property</h2>
          <p className="mb-3">
            Input feild has three key properties—placeholder, filled, and
            hint—each serving a specific purpose to improve usability and guide
            users effectively.  
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={TEXT_FEILD_PROPERTY} alt="TEXT_FEILD_PROPERTY" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />
        <div id="Icon Usage">
          <h2 className="text-3xl font-semibold mb-6 ">Icon Usage</h2>
          <p className="mb-3">
            The input field supports two icon placements—leading and trailing—to
            enhance functionality and usability.  
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={TEXT_FEILD_ICON_USAGE} alt="ICON_USAGE" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />
        <div id="Do’s & Don’ts">
          <h2 className="text-3xl font-semibold mb-6 ">Do’s & Don’ts</h2>
          <p className="mb-3">
            Do's and Don'ts are practical guidelines that outline best practices
            to follow and common mistakes to avoid, ensuring input fields are
            intuitive, accessible, and user-friendly  
          </p>
          <div className=" my-6">
            <img src={TEXT_FEILD_DODONT_01} alt="ICON_DO_&_DONT" />
          </div>
          <div className="p-4 my-6">
            <img src={TEXT_FEILD_DODONT_02} alt="ICON_DO_&_DONT" />
          </div>
        </div>
      </div>
    </BaseTabSectionScreen>
  );
}
