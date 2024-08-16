import React from "react";
import { BaseTabSectionScreen } from "./BaseTabSectionScreen.screen";
import {
  BUTTON_USAGE_IMAGE_1,
  BUTTON_USAGE_IMAGE_2,
  BUTTON_USAGE_IMAGE_3,
  BUTTON_USAGE_IMAGE_4,
} from "@assets";

export function ButtonUsageTabSection() {
  const scrollSpySections = ["Principles", "Anatomy", "Usage", "Behavior"];
  return (
    <BaseTabSectionScreen scrollSpySections={scrollSpySections}>
      <div className="mt-14  text-gray-700 dark:text-gray-dark-700">
        <div id="Principles">
          <h2 className="text-3xl font-bold mb-6 ">Principles</h2>
          <div className="p-2 bg-gray-200 dark:bg-gray-dark-200">
            <img
              className=""
              src={BUTTON_USAGE_IMAGE_1}
              alt="BUTTON_USAGE_IMAGE_1"
            />
          </div>
          <h3 className="text-xl font-semibold mt-6 mb-2">Actionable</h3>
          <p>
            button label indicates what happens when the user taps the button,
            even if it's just to acknowledge something.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">Contextual</h3>
          <p>
            Buttons work with other elements on a screen to surface the most
            important actions the user wants to take in that context.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">Incisive</h3>
          <p>
            Buttons capture user intent concisely, distilling the action a user
            wants to take into an inclusive word or phrase.
          </p>
        </div>
        <hr className="my-8 bg-gray-200 dark:bg-gray-dark-200" />
        {/* Anatomy section */}
        <div id="Anatomy">
          <h2 className="text-3xl font-bold mb-6 ">Anatomy</h2>
          <p>
            The most basic setup of a button includes only a single label or
            icon. Still, a button can also be customized to include a label with
            a leading icon and a trailing icon. Circle buttons can also support
            an additional label below the button's container.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6">
            <img src={BUTTON_USAGE_IMAGE_2} alt="BUTTON_USAGE_IMAGE_2" />
          </div>
          <h3 className="text-xl font-semibold mt-6 mb-2">Shape</h3>
        </div>
        <hr className="my-8 bg-gray-200 dark:bg-gray-dark-200" />
        {/* Shape section */}
        <div id="Usage">
          <h2 className="text-3xl font-bold mb-6 ">Usage</h2>
          <p className="mb-3">
            The most basic setup of a button includes only a single label or
            icon. Still, a button can also be customized to include a label with
            a leading icon and a trailing icon. Circle buttons can also support
            an additional label below the button's container.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6">
            <img src={BUTTON_USAGE_IMAGE_3} alt="BUTTON_USAGE_IMAGE_2" />
          </div>
          <ul className="list-disc mb-3">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>

          <p className="mb-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            atque non autem eaque odit nemo explicabo optio quis, ex repudiandae
            iusto iure debitis, vitae, a minus corrupti illum ea at ipsum unde
            veritatis illo? Laboriosam fugit aut sequi ratione esse?
          </p>
        </div>
        <hr className="my-8 bg-gray-200 dark:bg-gray-dark-200" />
        <div id="Behavior">
          <h2 className="text-3xl font-bold mb-6 ">Behavior</h2>
          <p className="mb-3">
            The most basic setup of a button includes only a single label or
            icon. Still, a button can also be customized to include a label with
            a leading icon and a trailing icon. Circle buttons can also support
            an additional label below the button's container.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6">
            <img src={BUTTON_USAGE_IMAGE_4} alt="BUTTON_USAGE_IMAGE_2" />
          </div>
          <ul className="list-disc mb-3">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>

          <p className="mb-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            atque non autem eaque odit nemo explicabo optio quis, ex repudiandae
            iusto iure debitis, vitae, a minus corrupti illum ea at ipsum unde
            veritatis illo? Laboriosam fugit aut sequi ratione esse?
          </p>
        </div>
      </div>
    </BaseTabSectionScreen>
  );
}
