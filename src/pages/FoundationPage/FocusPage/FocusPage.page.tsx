import React from "react";
import { PageHeader } from "@components";

export function FocusPage() {
  return (
    <div className="w-full">
      <div className="space-y-6 min-h-screen">
        <PageHeader
          heading="Focus"
          content="Focus defines how users navigate and interact with the interface using a keyboard or assistive technologies. A clear and consistent focus system ensures accessibility and usability by helping users understand where they are, what elements are interactive, and what action will happen next, without relying on a mouse."
        />

        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-[820px] mx-auto space-y-12">
            {/* Focus States */}
            <section>
              <h2 className="text-3xl font-semibold mb-4">Focus States</h2>
              <p className="text-gray-600 leading-relaxed">
                All interactive elements must display a visible focus state when
                navigated using the keyboard. Focus states help users understand
                which element is currently active.
              </p>
            </section>

            {/* Focus Style Guidelines */}
            <section>
              <h2 className="text-3xl font-semibold mb-4">
                Focus Style Guidelines
              </h2>

              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Focus must always be visible</li>
                <li>Use a high-contrast outline or focus ring</li>
                <li>Do not rely on color alone to indicate focus</li>
                <li>Avoid layout shifts when focus is applied</li>
                <li>Ensure focus works in both light and dark modes</li>
              </ul>
            </section>

            {/* Focus vs Hover */}
            <section>
              <h2 className="text-3xl font-semibold mb-4">Focus vs Hover</h2>
              <p className="text-gray-600 leading-relaxed">
                Focus and hover serve different interaction purposes. Hover
                supports mouse interaction, while focus supports keyboard and
                assistive navigation. Focus styles must remain visible even when
                hover styles are applied.
              </p>
            </section>

            {/* Keyboard Navigation */}
            <section>
              <h2 className="text-3xl font-semibold mb-4">
                Keyboard Navigation
              </h2>

              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                  <span className="font-medium text-gray-900">Tab</span> moves
                  focus forward
                </li>
                <li>
                  <span className="font-medium text-gray-900">Shift + Tab</span>{" "}
                  moves focus backward
                </li>
                <li>
                  <span className="font-medium text-gray-900">Enter</span> and{" "}
                  <span className="font-medium text-gray-900">Space</span>{" "}
                  activate elements
                </li>
              </ul>
            </section>

            {/* Focus Examples */}
            <section>
              <h2 className="text-3xl font-semibold mb-6">Focus Examples</h2>

              <div className="flex flex-wrap gap-4">
                <button
                  className="
                    h-10 cursor-pointer items-center justify-center gap-2 rounded-full border-none
                    bg-brand-600 px-4 text-left text-white

                    hover:bg-brand-500
                    active:bg-brand-600

                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-brand-600
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-white

                    disabled:cursor-default
                    disabled:bg-neutral-200

                    hover:disabled:cursor-default
                    hover:disabled:bg-neutral-200
                    active:disabled:cursor-default          
                    active:disabled:bg-neutral-200
                  "
                >
                Button Focus
                </button>

                <input
                  type="text"
                  placeholder="Input Focus"
                  className="
                    px-4 py-2 rounded-lg border border-gray-300
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-brand-600
                    focus-visible:ring-offset-2
                  "
                />

                <a
                  href="#"
                  className="
                    px-3 py-2 rounded-md text-brand-600
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-brand-600
                    focus-visible:ring-offset-2
                  "
                >
                  Link Focus
                </a>
              </div>
            </section>

            {/* Accessibility */}
            <section>
              <h2 className="text-3xl font-semibold mb-4">
                Accessibility Considerations
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Focus indicators must meet WCAG accessibility requirements.
                Never remove default focus styles unless a visible and
                accessible alternative is provided.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
