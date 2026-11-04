import React from "react";
import { PageHeader } from "@components";
import { NOTIFICATION_PATTERN } from "@assets";

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
                <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
                  <img src={NOTIFICATION_PATTERN} alt="Notification pattern" />
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
