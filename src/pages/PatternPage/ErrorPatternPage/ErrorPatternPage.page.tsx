import React from "react";
import { PageHeader } from "@components";
import { ERROR_PATTERN } from "@assets";

export function ErrorPatternPage() {
  return (
    <div className="w-full">
      <div className="space-y-6 min-h-screen">
        <PageHeader
          heading="Error Pattern"
          content="Error patterns communicate problems clearly and help users understand what went wrong and how to proceed."
        />
        <div className="max-w-[820px] mx-auto px-4 sm:px-6 lg:px-8">
        <section>
              <h2 className="text-3xl font-semibold mb-4">Example</h2>
              <p className="text-neutral-600">
                Error patterns notify users when an action fails or cannot be
                completed. Clear messaging and supportive design help users
                recover quickly and confidently.
              </p>
              <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
              <img src={ERROR_PATTERN} alt="Empty state pattern image" />
            </div>
            </section>
             {/* Usage Guidelines */}
             <section className="mt-10">
              <h2 className="text-3xl font-semibold mb-4">
                Usage Guidelines
              </h2>
              <ul className="list-disc list-inside space-y-2 text-neutral-600">
                <li>Use clear and concise error messages</li>
                <li>Explain what went wrong in simple language</li>
                <li>Avoid technical or system-focused wording</li>
                <li>Allow users to dismiss non-blocking errors</li>
              </ul>
            </section>
        </div>
      </div>
    </div>
  );
}
