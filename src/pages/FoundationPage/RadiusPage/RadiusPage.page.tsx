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

        <div className="max-w-[820px] mx-auto">
          <section>
            <h2 className="text-3xl font-semibold mb-4">Radius Scale</h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              The radius scale provides predefined corner rounding values used
              across buttons, inputs, cards, and containers. Always use these
              tokens instead of custom values to ensure consistency.
            </p>
          </section>

          {/* Table */}
          <section className="mt-10">
            {/* Header */}
            <div className="grid grid-cols-3 px-6 py-4 text-sm font-medium border-b">
              <span>Name</span>
              <span>Value</span>
              <span>Preview</span>
            </div>

            <RadiusRow name="radius-none" value="0px" radius="rounded-none" />
            <RadiusRow name="radius-x-small" value="2px" radius="rounded-xs" />
            <RadiusRow name="radius-small" value="4px" radius="rounded-sm" />
            <RadiusRow name="radius-medium" value="6px" radius="rounded-md" />
            <RadiusRow name="radius-large" value="8px" radius="rounded-lg" />
            <RadiusRow name="radius-x-large" value="12px" radius="rounded-xl" />
            <RadiusRow
              name="radius-full"
              value="9999px"
              radius="rounded-full"
            />
          </section>
        </div>
      </div>
    </div>
  );
}
type RadiusRowProps = {
  name: string;
  value: string;
  radius: string;
};

function RadiusRow({ name, value, radius }: RadiusRowProps) {
  return (
    <div className="grid grid-cols-3 px-6 py-6 border-b items-center">
      <span className="font-mono text-sm">{name}</span>
      <span className="text-sm">{value}</span>

      {/* Preview */}
      <div
        className={`w-10 h-10 bg-brand-600 ${radius}`}
      />
    </div>
  );
}

