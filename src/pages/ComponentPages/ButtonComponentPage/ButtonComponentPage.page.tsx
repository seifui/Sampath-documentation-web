import { PageHeader } from "@components";
import React from "react";
import { ButtonUsageTabSection } from "./TabSections/ButtonUsageTabSection.screen";
import { ButtonCodeTabSection } from "./TabSections/ButtonCodeTabSection.screen";

export function ButtonComponentPage() {
  const preLineTabClassNames =
    "hs-tab-active:font-semibold hs-tab-active:border-brand-600 hs-tab-active:text-brand-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-primary hover:text-brand-500 focus:outline-none focus:text-brand-500 disabled:opacity-50 disabled:pointer-events-none dark:text-primary-dark dark:hover:text-brand-500";
  return (
    <section className="w-full">
      <div className="w-full">
        <PageHeader
          heading="Button"
          content="A component used to trigger an action or event when clicked or tapped."
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
                {/* <button
                    type="button"
                    className={`${preLineTabClassNames}`}
                    aria-selected="false"
                    data-hs-tab="#tabs-with-underline-3"
                    aria-controls="tabs-with-underline-3"
                    role="tab"
                  >
                    Code
                  </button> */}
              </nav>
            </div>

            <div className="mt-6 pb-12">
              <div
                id="tabs-with-underline-1"
                role="tabpanel"
                aria-labelledby="tabs-with-underline-item-1"
              >
                <ButtonUsageTabSection />
              </div>
              <div
                id="tabs-with-underline-2"
                className="hidden"
                role="tabpanel"
                aria-labelledby="tabs-with-underline-item-2"
              >
                <ButtonCodeTabSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
