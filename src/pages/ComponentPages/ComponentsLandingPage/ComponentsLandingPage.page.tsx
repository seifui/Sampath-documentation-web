import { ComponentsPreviewCard, PageHeader } from "@components";
import React from "react";
import {
  COMPONENT_HOME_HEADER_IMAGE,
  ATLASSIN_BUTTON_SVG,
  ATLASSIN_CALENDAR_SVG,
  ATLASSIN_CHECKBOX_SVG,
  ATLASSIN_DRAWER,
} from "@assets";
import { ComponentsPreviewCardProps } from "@types";

const sampleComponentCardsList: ComponentsPreviewCardProps[] = [
  {
    heading: "Button",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, impedit.",
    imageUrl: ATLASSIN_BUTTON_SVG,
    onClickNavigationPath: "",
  },
  {
    heading: "Calendar",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, impedit.",
    imageUrl: ATLASSIN_CALENDAR_SVG,
    onClickNavigationPath: "",
  },
  {
    heading: "CheckBox",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, impedit.",
    imageUrl: ATLASSIN_CHECKBOX_SVG,
    onClickNavigationPath: "",
  },
  {
    heading: "Drawer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, impedit.",
    imageUrl: ATLASSIN_DRAWER,
    onClickNavigationPath: "",
  },
  {
    heading: "CheckBox",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, impedit.",
    imageUrl: ATLASSIN_CHECKBOX_SVG,
    onClickNavigationPath: "",
  },
  {
    heading: "Drawer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, impedit.",
    imageUrl: ATLASSIN_DRAWER,
    onClickNavigationPath: "",
  },
  {
    heading: "Button",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, impedit.",
    imageUrl: ATLASSIN_BUTTON_SVG,
    onClickNavigationPath: "",
  },
  {
    heading: "Calendar",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, impedit.",
    imageUrl: ATLASSIN_CALENDAR_SVG,
    onClickNavigationPath: "",
  },
  {
    heading: "Button",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, impedit.",
    imageUrl: ATLASSIN_BUTTON_SVG,
    onClickNavigationPath: "",
  },
  {
    heading: "Calendar",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, impedit.",
    imageUrl: ATLASSIN_CALENDAR_SVG,
    onClickNavigationPath: "",
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
        heading="Components"
        content="Components are the reusable building blocks of our design system. Each component meets a specific interaction or UI need, and has been specifically created to work together to create patterns and intuitive user experiences."
        imageUrl={COMPONENT_HOME_HEADER_IMAGE}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 gap-y-8  my-8 mx-3">
        {renderComponentPreviewCards()}
      </div>
    </section>
  );
}
