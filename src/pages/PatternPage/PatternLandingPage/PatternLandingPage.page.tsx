import { PatternCards } from "../PatternCards/PatternCards";
import { ComponentsPreviewCard } from "@components";
import React from "react";

export function PatternLandingPage() {
  return (
    <section className="w-full">
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-primary dark:text-primary-dark">
          Patterns
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 pb-16">
        {PatternCards.map((item) => (
          <ComponentsPreviewCard key={item.heading} {...item} />
        ))}
      </div>
    </section>
  );
}
