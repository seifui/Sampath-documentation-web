import React from "react";
import { PageHeader, ScrollSpy } from "@components";
import { TextUsageTabSection } from "./TabSections/TextUsageTabSection.screen";
import { TextCodeTabSection } from "./TabSections/TextCodeTabSection.screen";

export function TextFieldComponentPage() {
  const preLineTabClassNames =
    "hs-tab-active:font-semibold hs-tab-active:border-brand-600 hs-tab-active:text-brand-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-700 hover:text-brand-500 focus:outline-none focus:text-brand-500 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-dark-700 dark:hover:text-brand-500";
  return (
    <section className="w-full">
      <div className="w-full">
        <PageHeader
          heading="Text Field"
          content="Text fields are interactive components that allow users to input, edit, and review text-based data using a keyboard. They are one of the most common input types in user interfaces."
        />
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-[820px] mx-auto">
            <div className="border-b border-gray-200 dark:border-neutral-700">
              <nav
                className="flex gap-x-1"
                aria-label="Tabs"
                role="tablist"
                aria-orientation="horizontal"
              >
                <button
                  type="button"
                  className={`${preLineTabClassNames} active`}
                  id="tabs-with-underline-item-1"
                  aria-selected="false"
                  data-hs-tab="#tabs-with-underline-1"
                  aria-controls="tabs-with-underline-1"
                  role="tab"
                >
                  Usage
                </button>
                <button
                  type="button"
                  className={`${preLineTabClassNames}`}
                  id="tabs-with-underline-item-2"
                  aria-selected="false"
                  data-hs-tab="#tabs-with-underline-2"
                  aria-controls="tabs-with-underline-2"
                  role="tab"
                >
                  Code
                </button>
              </nav>
            </div>

            <div className="mt-6 pb-12">
              <div
                id="tabs-with-underline-1"
                role="tabpanel"
                aria-labelledby="tabs-with-underline-item-1"
              >
                <TextUsageTabSection />
              </div>
              <div
                id="tabs-with-underline-2"
                className="hidden"
                role="tabpanel"
                aria-labelledby="tabs-with-underline-item-2"
              >
                <TextCodeTabSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
