import React from "react";
import { PageHeader, ScrollSpy } from "@components";
import { TextareaUsageTabSection } from "./TabSections/TextareaUsageTabSection.screen";

export function TextareaComponentPage() {
  const preLineTabClassNames =
    "hs-tab-active:font-semibold hs-tab-active:border-brand-600 hs-tab-active:text-brand-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-700 hover:text-brand-500 focus:outline-none focus:text-brand-500 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-dark-700 dark:hover:text-brand-500";
  return (
    <section className="w-full">
      <PageHeader
        heading="Textarea"
        content="A toggleable component used to switch between two states, such as on and off."
      />
      <div className="flex px-3 xl:px-6">
        <div className="min-w-full ">
          <div className="border-b border-gray-200 dark:border-neutral-700">
            <nav
              className="flex gap-x-3"
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
                Specs
              </button>
              <button
                type="button"
                className={`${preLineTabClassNames}`}
                aria-selected="false"
                data-hs-tab="#tabs-with-underline-3"
                aria-controls="tabs-with-underline-3"
                role="tab"
              >
                Status
              </button>
            </nav>
          </div>

          <div className="mt-3">
            <div
              id="tabs-with-underline-1"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-1"
            >
              <TextareaUsageTabSection />
            </div>
            <div
              id="tabs-with-underline-2"
              className="hidden"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-2"
            ></div>
            <div
              id="tabs-with-underline-3"
              className="hidden"
              role="tabpanel"
              aria-labelledby="tabs-with-underline-item-3"
            >
              <p className="text-gray-500 dark:text-neutral-400">
                This is the{" "}
                <em className="font-semibold text-gray-800 dark:text-neutral-200">
                  third
                </em>{" "}
                item's tab body.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="hidden md:block flex-grow min-w-fit">
          <ScrollSpy sections={sections} />
        </div> */}
      </div>
    </section>
  );
}
