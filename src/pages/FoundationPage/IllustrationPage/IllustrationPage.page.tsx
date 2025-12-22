import React from "react";
import { PageHeader } from "@components";
import { ILLUSTRATION_PACK } from "@assets";

export function IllustrationPage() {
  return (
    <div className="w-full">
      <div className="space-y-6 min-h-screen">
        <PageHeader
          heading="Illustration"
          content="Icons are visual symbols used to communicate actions, status, and meaning quickly. They help users scan interfaces, understand functionality, and navigate more efficiently without relying solely on text.
          Our icon system is designed to be simple, consistent, and scalable, ensuring icons feel cohesive across all products and platforms."
        />
        <div className="max-w-[820px] mx-auto">
          <section>
            <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
              <img src={ILLUSTRATION_PACK} alt="Button Anatomy" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
