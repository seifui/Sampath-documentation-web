import React from "react";
import { PageHeader } from "@components";

export function RadiusPage() {
  return (
    <div className="w-full">
      <div className="space-y-6 min-h-screen">
        <PageHeader
          heading="Radius"
          content="Radius defines how rounded UI elements appear across the system. A consistent radius scale creates visual harmony and helps users understand hierarchy and interactivity across components."
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
