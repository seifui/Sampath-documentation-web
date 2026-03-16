import React from "react";
import { PageHeader } from "@components";
import { ERROR_PATTERN } from "@assets";

export function NotificationPage() {
  return (
    <div className="w-full">
      <div className="space-y-6 min-h-screen">
        <PageHeader
          heading="Notification"
          content="Notifications provide timely feedback about system events, updates, and user actions without interrupting the workflow."
        />
        <div className="max-w-[820px] mx-auto px-4 sm:px-6 lg:px-8">
          <section>
            <h2 className="text-3xl font-semibold mb-4">Examples</h2>
            <p className="text-neutral-600">
              Notifications communicate important information using clear
              messages and visual cues. They help users understand what is
              happening and what action, if any, is required.
            </p>
            <div className="my-6">
              <div className="space-y-6">
                {/* Info */}
                <div className="rounded-xl bg-blue-50 p-6">
                  <h3 className="font-semibold text-blue-700 mb-2">
                    Lorem ipsum dolor sit amet
                  </h3>
                  <p className="text-sm text-blue-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>

                {/* Error */}
                <div className="rounded-xl bg-red-50 p-6">
                  <h3 className="font-semibold text-red-600 mb-2">
                    Lorem ipsum dolor sit amet
                  </h3>
                  <p className="text-sm text-red-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>

                {/* Success */}   
                <div className="rounded-xl bg-green-50 p-6">
                  <h3 className="font-semibold text-green-700 mb-2">
                    Lorem ipsum dolor sit amet
                  </h3>
                  <p className="text-sm text-green-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>

                {/* Warning */}
                <div className="rounded-xl bg-yellow-50 p-6">
                  <h3 className="font-semibold text-yellow-700 mb-2">
                    Lorem ipsum dolor sit amet
                  </h3>
                  <p className="text-sm text-yellow-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Usage Guidelines */}
          <section>
            <h2 className="text-3xl font-semibold mb-4">Usage Guidelines</h2>
            <ul className="list-disc list-inside space-y-2 text-neutral-600">
              <li>Use notifications to provide contextual feedback</li>
              <li>Choose the correct type based on message intent</li>
              <li>Keep messages concise and actionable</li>
              <li>Avoid overusing notifications</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
