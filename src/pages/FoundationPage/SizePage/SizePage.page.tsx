import React from "react";
import { PageHeader } from "@components";

export function SizePage() {
  return (
    <div className="w-full">
      <div className="space-y-6 min-h-screen">
        <PageHeader
          heading="Size"
          content="Sizes define the visual scale of elements in your design system. Use consistent sizes for components, typography, and icons to maintain balance and clarity."
        />

        <div className="max-w-[820px] mx-auto px-4 sm:px-6 lg:px-8">
          <section>
            <h2 className="text-3xl font-semibold mb-4">Size Scale</h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              The size scale provides predefined values for spacing, components,
              and typography. Always use these tokens instead of custom values
              to maintain consistency and visual harmony.
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

            {/* Component Sizes */}
            <SizeRow name="size-x-small" value="12px" previewSize="w-3 h-3" />
            <SizeRow name="size-small" value="14px" previewSize="w-3.5 h-3.5" />
            <SizeRow name="size-medium" value="16px" previewSize="w-4 h-4" />
            <SizeRow name="size-large" value="18px" previewSize="w-[18px] h-[18px]" />
            <SizeRow name="size-x-large" value="20px" previewSize="w-5 h-5" />
            <SizeRow name="size-xx-large" value="24px" previewSize="w-6 h-6" />

            {/* Typography Sizes */}
            <SizeRow name="text-xs" value="12px" previewText="text-xs" />
            <SizeRow name="text-sm" value="14px" previewText="text-sm" />
            <SizeRow name="text-base" value="16px" previewText="text-base" />
            <SizeRow name="text-lg" value="18px" previewText="text-lg" />
            <SizeRow name="text-xl" value="20px" previewText="text-xl" />
            <SizeRow name="text-2xl" value="24px" previewText="text-2xl" />
            <SizeRow name="text-3xl" value="30px" previewText="text-3xl" />
            
          </section>
        </div>
      </div>
    </div>
  );
}
type SizeRowProps = {
  name: string;
  value: string;
  previewSize?: string;
  previewText?: string;
};

function SizeRow({ name, value, previewSize, previewText }: SizeRowProps) {
  return (
    <div className="grid grid-cols-3 px-6 py-6 border-b items-center">
      <span className="font-mono text-sm">{name}</span>
      <span className="text-sm">{value}</span>

      {/* Preview */}
      {previewSize ? (
        <div className={`bg-brand-600 ${previewSize}`} />
      ) : (
        <span className={`font-medium" ${previewText}`}>Text</span>
      )}
    </div>
  );
}
