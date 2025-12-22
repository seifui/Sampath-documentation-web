import React from "react";
import { PageHeader } from "@components";

export function SpacingPage() {
  return (
    <div className="w-full">
      <div className="space-y-6 min-h-screen">
        <PageHeader
          heading="Spacing"
          content="Icons are visual symbols used to communicate actions, status, and meaning quickly. They help users scan interfaces, understand functionality, and navigate more efficiently without relying solely on text.
          Our icon system is designed to be simple, consistent, and scalable, ensuring icons feel cohesive across all products and platforms."
        />
      </div>

      <div className="max-w-[820px] mx-auto">
        <section>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                
            </div>
        </section>
      </div>
    </div>
  );
}
