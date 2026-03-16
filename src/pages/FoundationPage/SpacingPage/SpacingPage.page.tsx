import React from "react";
import { PageHeader } from "@components";

export function SpacingPage() {
  return (
    <div className="w-full">
      <div className="space-y-6 min-h-screen">
        <PageHeader
          heading="Spacing"
          content="Spacing defines the consistent gaps and distances between elements in the system. Using spacing tokens ensures alignment, rhythm, and visual balance across components."
        />
        <div className="max-w-[820px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Table */}
          <section className="mt-10">
            {/* Header */}
            <div className="grid grid-cols-3 px-6 py-4 text-sm font-medium border-b">
              <span>Name</span>
              <span>Value</span>
              <span>Preview</span>
            </div>

            {/* Spacing Tokens */}
            <SpacingRow name="space-0" value="0px" size={0} />
            <SpacingRow name="space-1" value="4px" size={1} />
            <SpacingRow name="space-2" value="8px" size={2} />
            <SpacingRow name="space-3" value="12px" size={3} />
            <SpacingRow name="space-4" value="16px" size={4} />
            <SpacingRow name="space-5" value="20px" size={5} />
            <SpacingRow name="space-6" value="24px" size={6} />
            <SpacingRow name="space-8" value="32px" size={8} />
            <SpacingRow name="space-10" value="40px" size={10} />
            <SpacingRow name="space-12" value="48px" size={12} />
            <SpacingRow name="space-16" value="64px" size={16} />
          </section>
        </div>
      </div>
    </div>
  );
}

type SpacingRowProps = {
  name: string;
  value: string;
  size: number; // Tailwind spacing unit
};

function SpacingRow({ name, value, size }: SpacingRowProps) {
  return (
    <div className="grid grid-cols-3 px-6 py-6 border-b items-center">
      <span className="font-mono text-sm">{name}</span>
      <span className="text-sm">{value}</span>

      {/* Preview */}
      <div
        className="bg-brand-600"
        style={{ width: `${size * 4}px`, height: "16px" }}
      />
    </div>
  );
}
