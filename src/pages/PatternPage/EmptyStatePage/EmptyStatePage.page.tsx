import React from "react";
import { PageHeader } from "@components";
import { EMPTY_STATE_PATTERN } from "@assets";

export function EmptyStatePage() {
  return (
    <div className="w-full">
      <div className="space-y-6 min-h-screen">
        <PageHeader
          heading="Empty State Pattern"
          content="Empty states appear when there is no data to display. They help users understand the situation and guide them toward the next action."
        />
        <div className="max-w-[820px] mx-auto">
          {/* Description */}
          <section>
            <h2 className="text-3xl font-semibold mb-4">Example</h2>
            <p className="text-neutral-600">
              Empty states communicate the absence of content in a clear and
              helpful way. They reduce confusion and provide guidance when no
              data is available.
            </p>
            <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
              <img src={EMPTY_STATE_PATTERN} alt="Empty state pattern image" />
            </div>
          </section>
          
          {/* Guidelines */}
          <section className="mt-10">
            <h2 className="text-3xl font-semibold mb-4">Usage Guidelines</h2>
            <ul className="list-disc list-inside space-y-2 text-neutral-600">
              <li>Use short, clear messaging</li>
              <li>Avoid technical or error-heavy language</li>
              <li>Provide actions only when relevant</li>
              <li>Keep visuals simple and supportive</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
