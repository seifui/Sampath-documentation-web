import { ComponentsPreviewCard } from "@components";
import React from "react";
import {
  BUTTON_COMPONENT_IMAGE,
  TEXT_FIELD_COMPONENT_IMAGE,
  RADIO_BUTTON_COMPONENT_IMAGE,
  BADGE_COMPONENT_IMAGE,
  CHECKBOX_COMPONENT_IMAGE,
  TEXTAREA_COMPONENT_IMAGE,
  AVATAR_COMPONENT_IMAGE,
  ACCORDION_COMPONENT_IMAGE,
  ALERTS_COMPONENT_IMAGE,
  BREADCRUMB_COMPONENT_IMAGE,
  LINK_COMPONENT_IMAGE,
  MESSAGEBOX_COMPONENT_IMAGE,
  NODATACARD_COMPONENT_IMAGE,
  PAGINATION_COMPONENT_IMAGE,
  SELECT_COMPONENT_IMAGE,
  STEPPER_COMPONENT_IMAGE,
  TABS_COMPONENT_IMAGE,
  TOOLTIP_COMPONENT_IMAGE,

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
  {
    heading: "Accordion",
    description:
      "A component used to represent an avatar with an icon or letter.",
    imageUrl: ACCORDION_COMPONENT_IMAGE,
    onClickNavigationPath: "/Components/Accordion",
  },
  {
    heading: "Alert",
    description:
      "A component used to represent an avatar with an icon or letter.",
    imageUrl: ALERTS_COMPONENT_IMAGE,
    onClickNavigationPath: "/Components/Alert",
  },
  {
    heading: "Breadcrumb",
    description:
      "A component used to represent an avatar with an icon or letter.",
    imageUrl: BREADCRUMB_COMPONENT_IMAGE,
    onClickNavigationPath: "/Components/Breadcrumb",
  },
  {
    heading: "Link",
    description:
      "A component used to represent an avatar with an icon or letter.",
    imageUrl: LINK_COMPONENT_IMAGE,
    onClickNavigationPath: "/Components/Link",
  },
  {
    heading: "Message Box",
    description:
      "A component used to represent an avatar with an icon or letter.",
    imageUrl: MESSAGEBOX_COMPONENT_IMAGE,
    onClickNavigationPath: "/Components/Messagebox",
  },
  {
    heading: "No Data Card",
    description:
      "A component used to represent an avatar with an icon or letter.",
    imageUrl: NODATACARD_COMPONENT_IMAGE,
    onClickNavigationPath: "/Components/Nodatacard",
  },
  {
    heading: "Pagination",
    description:
      "A component used to represent an avatar with an icon or letter.",
    imageUrl: PAGINATION_COMPONENT_IMAGE,
    onClickNavigationPath: "/Components/Pagination",
  },
  {
    heading: "Select",
    description:
      "A component used to represent an avatar with an icon or letter.",
    imageUrl: SELECT_COMPONENT_IMAGE,
    onClickNavigationPath: "/Components/Select",
  },
  {
    heading: "Stepper",
    description:
      "A component used to represent an avatar with an icon or letter.",
    imageUrl: STEPPER_COMPONENT_IMAGE,
    onClickNavigationPath: "/Components/Stepper",
  },
  {
    heading: "Tabs",
    description:
      "A component used to represent an avatar with an icon or letter.",
    imageUrl: TABS_COMPONENT_IMAGE,
    onClickNavigationPath: "/Components/Tabs",
  },
  {
    heading: "Tooltip",
    description:
      "A component used to represent an avatar with an icon or letter.",
    imageUrl: TOOLTIP_COMPONENT_IMAGE,
    onClickNavigationPath: "/Components/Tooltip",
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
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-primary dark:text-primary-dark">Components</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 pb-16">
        {renderComponentPreviewCards()}
      </div>
    </section>
  );
}
