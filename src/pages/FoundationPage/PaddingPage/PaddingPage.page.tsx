import React from "react";
import { PageHeader } from "@components";

export function PaddingPage() {
  return (
    <div className="w-full">
      <div className="space-y-6 min-h-screen">
        <PageHeader
          heading="Padding"
          content="Padding defines the internal spacing within components. A consistent padding system improves readability, touch accuracy, and visual balance across the interface."
        />

        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-[820px] mx-auto">
            <section>
              <h2 className="text-3xl font-semibold mb-4">
                Padding Principles
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Consistent spacing across components</li>
                <li>Improves readability and structure</li>
                <li>Supports comfortable touch targets</li>
                <li>Scales with component size</li>
              </ul>
            </section>

            {/* Padding Scale */}
            <section className="mt-10">
              <h2 className="text-3xl font-semibold mb-6">Padding Scale</h2>

              <div className="overflow-hidden rounded-xl border-b border-gray-200">
                {/* Table Header */}
                <div className="grid grid-cols-2 px-6 py-4 text-sm font-medium text-gray-900 border-b border-gray-200">
                  <span>Name</span>
                  <span>Value</span>
                </div>

                {/* Rows */}
                <div className="divide-y">
                  <PaddingRow name="padding-xx-small" value="8px" />
                  <PaddingRow name="padding-x-small" value="12px" />
                  <PaddingRow name="padding-small" value="16px" />
                  <PaddingRow name="padding-medium" value="24px" />
                  <PaddingRow name="padding-large" value="32px" />
                </div>
              </div>
            </section>

            {/* Best Practices */}
            <section className="mt-10">
              <h2 className="text-3xl font-semibold mb-4">Best Practices</h2>
              <p className="text-gray-600 leading-relaxed">
                Always use the predefined padding scale instead of arbitrary
                values. This ensures visual consistency and predictable layouts
                across the design system.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

type PaddingRowProps = {
  name: string;
  value: string;
};

function PaddingRow({ name, value }: PaddingRowProps) {
  return (
    <div className="grid grid-cols-2 px-6 py-6 text-gray-800">
      <span className="font-mono text-sm">{name}</span>
      <span className="text-sm">{value}</span>
    </div>
  );
}

