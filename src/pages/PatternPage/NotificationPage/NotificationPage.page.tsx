import React from "react";
import { PageHeader } from "@components";
import { ERROR_PATTERN } from "@assets";

export function NotificationPage() {
  return (
    <div className="w-full">
      <div className="space-y-6 min-h-screen">
        <PageHeader
          heading="Notification"
          content="Error patterns communicate problems clearly and help users understand what went wrong and how to proceed."
        />
        <div className="max-w-[820px] mx-auto">

        </div>
      </div>
    </div>
  );
}
