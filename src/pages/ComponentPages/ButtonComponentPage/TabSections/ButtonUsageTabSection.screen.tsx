import React from "react";
import { BaseTabSectionScreen } from "./BaseTabSectionScreen.screen";
import {
  BUTTON_ANATOMY,
  BUTTON_SHAPES,
  BUTTON_HIERARCHY,
  BUTTON_STATES,
  BUTTON_ICON_USAGE,
  BUTTON_SIZES,
  BUTTON_DODONT_01,
  BUTTON_DODONT_02,
  BUTTON_DODONT_03,
  BUTTON_DODONT_04,
} from "@assets";
// import Anatomy_img from "./button/anatomy.png";

export function ButtonUsageTabSection() {
  const scrollSpySections = [
    "Anatomy",
    "Shape",
    "Usage",
    "Hierarchy",
    "States",
    "Icon Usage",
    "Size",
    "Do’s & Don’ts",
  ];
  return (
    <BaseTabSectionScreen scrollSpySections={scrollSpySections}>
      <div className="mt-14  text-primary dark:text-primary-dark">
        {/* Anatomy section */}
        <div id="Anatomy">
          <h2 className="text-3xl font-bold mb-6 ">Anatomy</h2>
          <p>
            The most basic setup of a button includes only a single label or
            icon. Still, a button can also be customized to include a label with
            a leading icon and a trailing icon. Circle buttons can also support
            an additional label below the button's container.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={BUTTON_ANATOMY} alt="Button Anatomy" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />
        {/* Shape section */}
        <div id="Shape">
          <h2 className="text-3xl font-bold mb-6 ">Shape</h2>
          <p className="mb-3">
            Buttons come in rectangular, circle, square, and pill shapes.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={BUTTON_SHAPES} alt="BUTTON_SHAPES" />
          </div>
          {/* <div className="flex gap-4">
            <div className="w-1/4 p-4">
              <button className="bg-brand-600 hover:bg-brand-700 text-white py-2 px-6 rounded-full flex items-center gap-2 mt-2">Button text</button>
            </div>
            <div className="w-3/4 p-4">
              <h2 className="font-semibold text-lg">Rectangle</h2>
              <p className="mt-2 text-md">Rectangular buttons are typically leveraged at fixed widths, 100% and 50% width on mobile, and a variety of widths on the web. Large rectangle buttons are commonly used CTA buttons that move users forward in a flow.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1/4 p-4">
              <button className="bg-brand-600 hover:bg-brand-700 text-white py-2 px-6 rounded-lg flex items-center gap-2 mt-2">Button text</button>
            </div>
            <div className="w-3/4 p-4">
              <h2 className="font-semibold text-lg">Pill</h2>
              <p className="mt-2 text-md">Pill buttons are more commonly in line with other content and controls.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1/4 p-4">
              <button className="bg-brand-600 hover:bg-brand-700 text-white w-10 h-10 rounded-full mt-2">I</button>
            </div>
            <div className="w-3/4 p-4">
              <h2 className="font-semibold text-lg">Circle</h2>
              <p className="mt-2 text-md">Circular buttons can include a text label or an icon. An optional label below is available as well. All maintain a center position.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1/4 p-4">
              <button className="bg-brand-600 hover:bg-brand-700 text-white w-12 h-12 rounded-lg flex items-center justify-center mt-2">I</button>
            </div>
            <div className="w-3/4 p-4">
              <h2 className="font-semibold text-lg">Square</h2>
              <p className="mt-2 text-md">Square buttons can display a text label, an icon, or both. They maintain equal width and height for a balanced look. An optional label below can be added if needed.</p>
            </div>
          </div> */}
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />
        <div id="Usage">
          <h2 className="text-3xl font-bold mb-6 ">Usage</h2>
          <p className="mb-3">
            Buttons are interactive elements that help users take action, make
            decisions, and move forward in a process. Use buttons to:
          </p>
          <ul className="list-disc mb-3">
            <li>Submit forms</li>
            <li>Trigger events or actions</li>
            <li>Navigate to other pages or views</li>
          </ul>

          <p className="mb-3">
            They should be clearly labeled and placed where users expect to find
            them, ensuring accessibility and ease of use.
          </p>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />
        <div id="Hierarchy">
          <h2 className="text-3xl font-bold mb-6 ">Hierarchy</h2>
          <p className="mb-3">
            Button hierarchy emphasizes which button is more important in the
            context so the user can take action immediately.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={BUTTON_HIERARCHY} alt="BUTTON_HIERARCHY" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />
        <div id="States">
          <h2 className="text-3xl font-bold mb-6 ">States</h2>
          <p className="mb-3">
            Button hierarchy emphasizes which button is more important in the
            context so the user can take action immediately.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={BUTTON_STATES} alt="BUTTON_STATES" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />
        <div id="Icon Usage">
          <h2 className="text-3xl font-bold mb-6 ">Icon Usage</h2>
          <p className="mb-3">
            Icons enhance the clarity and functionality of buttons by visually
            supporting the action they represent.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={BUTTON_ICON_USAGE} alt="BUTTON_USAGE_IMAGE_2" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />
        <div id="Size">
          <h2 className="text-3xl font-bold mb-6 ">Sizes</h2>
          <p className="mb-3">
            The Button is available in various sizes to fit different
            environments and use cases. Each size is designed to maintain visual
            balance and usability while adapting to the context of the
            interface.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
            <img src={BUTTON_SIZES} alt="BUTTON_USAGE_IMAGE_2" />
          </div>
        </div>
        <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />
        <div id="Do’s & Don’ts">
          <h2 className="text-3xl font-bold mb-6 ">Do’s & Don’ts</h2>
          <p className="mb-3">
            Do's and Don'ts are practical guidelines that outline best practices
            to follow and mistakes to avoid, ensuring effective and
            user-friendly button designs.
          </p>
          <div className="p-4 my-6">
            <img src={BUTTON_DODONT_01} alt="BUTTON_DO&DONT_01" />
          </div>
          <div className="p-4 my-6">
            <img src={BUTTON_DODONT_02} alt="BUTTON_DO&DONT_02" />
          </div>
          <div className="p-4 my-6">
            <img src={BUTTON_DODONT_03} alt="BUTTON_DO&DONT_03" />
          </div>
          <div className="p-4 my-6">
            <img src={BUTTON_DODONT_04} alt="BUTTON_DO&DONT_04" />
          </div>
        </div>
      </div>
    </BaseTabSectionScreen>
  );
}
