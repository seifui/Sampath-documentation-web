import { ComponentsPreviewCard, PageHeader } from "@components";
import React from "react";
import {
  COMPONENT_HOME_HEADER_IMAGE,
  BUTTON_COMPONENT_IMAGE,
  TEXT_FIELD_COMPONENT_IMAGE,
  RADIO_BUTTON_COMPONENT_IMAGE,
  BADGE_COMPONENT_IMAGE,
  CHECKBOX_COMPONENT_IMAGE,
  TEXTAREA_COMPONENT_IMAGE,
  AVATAR_COMPONENT_IMAGE,

} from "@assets";
import { ComponentsPreviewCardProps } from "@types";

const sampleComponentCardsList: ComponentsPreviewCardProps[] = [
  {
    heading: "Button",
    description:
      "A component used to trigger an action or event when clicked or tapped.",
    imageUrl: BUTTON_COMPONENT_IMAGE,
    onClickNavigationPath: "Components/Button",
  },
  {
    heading: "Text Field",
    description:
      "A component used to capture user input in a single-line text field.",
    imageUrl: TEXT_FIELD_COMPONENT_IMAGE,
    onClickNavigationPath: "Components/TextField",
  },
  {
    heading: "Radio Button",
    description:
      "A selectable component used to choose one option from a group of choices.",
    imageUrl: RADIO_BUTTON_COMPONENT_IMAGE,
    onClickNavigationPath: "Components/RadioButton",
  },
  {
    heading: "Badge",
    description:
      "A small, rounded component used to display labels, categories, or tags.",
    imageUrl: BADGE_COMPONENT_IMAGE,
    onClickNavigationPath: "Components/Badge",
  },
  {
    heading: "CheckBox",
    description:
      "A component used to select one or multiple options from a set.",
    imageUrl: CHECKBOX_COMPONENT_IMAGE,
    onClickNavigationPath: "/Components/Checkbox",
  },
  {
    heading: "Textarea",
    description:
      "A component used to select one or multiple options from a set.",
      imageUrl: TEXTAREA_COMPONENT_IMAGE,
      onClickNavigationPath: "/Components/Textarea",
  },
  {
    heading: "Avatar",
    description:
      "A component used to represent an avatar with an icon or letter.",
    imageUrl: AVATAR_COMPONENT_IMAGE,
    onClickNavigationPath: "/Components/Avatar",
  },

];

const renderComponentPreviewCards = () =>
  sampleComponentCardsList.map((sampleComponentCards, index) => (
    <ComponentsPreviewCard
      key={index}
      heading={sampleComponentCards.heading}
      description={sampleComponentCards.description}
      imageUrl={sampleComponentCards.imageUrl}
      onClickNavigationPath={sampleComponentCards.onClickNavigationPath}
    />
  ));

export function ComponentsLandingPage() {
  return (
    <section className="w-full">
      <PageHeader
        heading="Components" content="Components are the reusable building blocks of our design system. Each component meets a specific interaction or UI need, and has been specifically created to work together to create patterns and intuitive user experiences."
        imageUrl={COMPONENT_HOME_HEADER_IMAGE}
        
      />
      <div className="mx-6 md:mx-10">
        <hr className=" bg-gray-200 dark:bg-gray-dark-200" />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-8  my-8 px-6 md:px-10  ">
        {renderComponentPreviewCards()}
      </div>
    </section>
  );
}
