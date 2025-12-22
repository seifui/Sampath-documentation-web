import React from "react";
import { PageHeader } from "@components";
import { HomeIcon } from "../../../components/icons";

export function IconPage() {
  return (
    <div className="w-full">
      <div className="space-y-6 min-h-screen">
        <PageHeader
          heading="Icons"
          content="Icons are visual symbols used to communicate actions, status, and meaning quickly. They help users scan interfaces, understand functionality, and navigate more efficiently without relying solely on text.
          Our icon system is designed to be simple, consistent, and scalable, ensuring icons feel cohesive across all products and platforms."
        />

        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-[820px] mx-auto space-y-12">
            {/* Principles */}
            <section>
              <h2 className="text-3xl font-semibold mb-4">Principles</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Clear and recognizable meaning</li>
                <li>Consistent stroke and visual style</li>
                <li>Scales across supported sizes</li>
                <li>Accessible with labels when required</li>
              </ul>
            </section>

            {/* Sizes */}
            <section>
              <h2 className="text-3xl font-semibold mb-6">Icon Sizes</h2>

              <div className="flex items-center gap-8">
                <div className="flex flex-col items-center gap-2">
                  <HomeIcon className="w-4 h-4" />
                  <span className="text-sm text-gray-500">16px</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <HomeIcon className="w-5 h-5" />
                  <span className="text-sm text-gray-500">20px</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <HomeIcon className="w-6 h-6" />
                  <span className="text-sm text-gray-500">24px</span>
                </div>
              </div>
            </section>

     

            {/* Accessibility */}
            <section>
              <h2 className="text-3xl font-semibold mb-4">Accessibility</h2>
              <p className="text-gray-600 leading-relaxed">
                Icons used as actions must include accessible labels using text
                or <code className="px-1 bg-gray-100 rounded">aria-label</code>.
                Decorative icons should be hidden from assistive technologies.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
