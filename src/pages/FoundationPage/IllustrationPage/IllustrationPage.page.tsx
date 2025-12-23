import React from "react";
import { PageHeader } from "@components";
import { ILLUSTRATION_PACK } from "@assets";

export function IllustrationPage() {
  return (
    <div className="w-full">
      <div className="space-y-6 min-h-screen">
        <PageHeader
          heading="Illustration"
          content="Illustrations are used to support content, explain ideas, and add clarity to the user interface. They help guide users, reduce complexity, and enhance visual communication while maintaining consistency with the Sampath brand."
        />
        <div className="max-w-[820px] mx-auto">
          <section>
            <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
              <img src={ILLUSTRATION_PACK} alt="illustration pack image" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
