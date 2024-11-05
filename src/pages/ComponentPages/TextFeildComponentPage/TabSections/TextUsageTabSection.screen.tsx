import React from "react";
import { BaseTabSectionScreen } from "./BaseTabSectionScreen.screen";
import {
  TEXT_FEILD_IMAGE_1,
  TEXT_FEILD_IMAGE_2,
  TEXT_FEILD_IMAGE_3,
  TEXT_FEILD_IMAGE_4,
  TEXT_FEILD_IMAGE_5,
} from "@assets";

export function TextUsageTabSection() {
  const scrollSpySections = ["Principles", "Anatomy", "Leading", "Behavior"];
  return (
    <BaseTabSectionScreen scrollSpySections={scrollSpySections}>
      <div className="mt-14  text-gray-700 dark:text-gray-dark-700">
        <div id="Principles">
          <h2 className="text-3xl font-bold mb-6 ">Principles</h2>
          <div className="p-2 bg-gray-200 dark:bg-gray-dark-200">
            <img
              className=""
              src={TEXT_FEILD_IMAGE_1}
              alt="BUTTON_USAGE_IMAGE_1"
            />
          </div>
          <h3 className="text-xl font-semibold mt-6 mb-2">Common alteratve names</h3>
          <p>
            Input, Input feild, Form control
          </p>
        </div>
        <hr className="my-8 bg-gray-200 dark:bg-gray-dark-200" />
        {/* Anatomy section */}
        <div id="Anatomy">
          <h2 className="text-3xl font-bold mb-6 ">Anatomy</h2>
          <p>
          A text field, like most form controls, contains 3 main elements – a form label, Input control, and form hint.
          </p>
          <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6">
            <img src={TEXT_FEILD_IMAGE_2} alt="BUTTON_USAGE_IMAGE_2" />
          </div>
        </div>
        <hr className="my-8 bg-gray-200 dark:bg-gray-dark-200" />
        {/* Shape section */}
     
        <div id="Leading">
          <h2 className="text-3xl font-bold mb-6 ">Leading enchancer(optional)</h2>
          <div className="grid grid-cols-3">
            <div>
              <img src={TEXT_FEILD_IMAGE_3} alt="TEXT_FEILD_IMAGE_3" />
              <h4 className="text-l font-bold mb-2 ml-3">Artwork</h4>
            </div>
            <div>
              <img src={TEXT_FEILD_IMAGE_4} alt="TEXT_FEILD_IMAGE_4" />
              <h4 className="text-l font-bold mb-2 ml-3">Label</h4>
            </div>
            <div>
              <img src={TEXT_FEILD_IMAGE_5} alt="TEXT_FEILD_IMAGE_5" />
              <h4 className="text-l font-bold mb-2 ml-3">Artwork + Label</h4>
            </div>
          </div>
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
            <img src={TEXT_FEILD_IMAGE_1} alt="BUTTON_USAGE_IMAGE_2" />
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
