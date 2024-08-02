import { ComponentsPreviewCard, PageHeader } from "@components";
import React from "react";
import { COMPONENT_HOME_HEADER_IMAGE } from "@assets";
import { ComponentsPreviewCardProps } from "@types";

const sampleComponentCardsList: ComponentsPreviewCardProps[] = [
  {
    heading: "Button",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, impedit.",
    imageUrl: "",
    onClickNavigationPath: "",
  },
  {
    heading: "Button",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, impedit.",
    imageUrl: "",
    onClickNavigationPath: "",
  },
  {
    heading: "Button",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, impedit.",
    imageUrl: "",
    onClickNavigationPath: "",
  },
  {
    heading: "Button",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, impedit.",
    imageUrl: "",
    onClickNavigationPath: "",
  },
  {
    heading: "Button",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, impedit.",
    imageUrl: "",
    onClickNavigationPath: "",
  },
  {
    heading: "Button",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, impedit.",
    imageUrl: "",
    onClickNavigationPath: "",
  },
  {
    heading: "Button",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, impedit.",
    imageUrl: "",
    onClickNavigationPath: "",
  },
  {
    heading: "Button",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, impedit.",
    imageUrl: "",
    onClickNavigationPath: "",
  },
  {
    heading: "Button",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, impedit.",
    imageUrl: "",
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
