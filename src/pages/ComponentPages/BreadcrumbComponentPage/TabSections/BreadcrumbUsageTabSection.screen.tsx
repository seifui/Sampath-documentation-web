import React from "react";
import { BaseTabSectionScreen } from "./BaseTabSectionScreen.screen";
import {
    BREADCRUMB_ANATOMY,
    BREADCRUMB_TYPE,
} from "@assets";
export function BreadcrumbUsageTabSection() {
    const scrollSpySections = ["Anatomy", "Types"];
    return (
        <BaseTabSectionScreen scrollSpySections={scrollSpySections}>
            <div className="mt-14  text-primary dark:text-primary-dark">

                {/* Anatomy section */}
                <div id="Anatomy">
                    <h2 className="text-3xl font-semibold mb-6 ">Anatomy</h2>
                    <p>
                        The most basic setup of a breadcrumb includes a trail of links that communicate the user’s current location within a hierarchy at a glance. Each link represents a parent level, allowing users to retrace their steps or jump back to higher sections with ease. A slash ( / ) acts as the separator, reinforcing the hierarchical relationship and providing a simple, familiar visual cue for structure. The current page indicator is styled distinctly to signal the endpoint of the trail, ensuring clarity without unnecessary complexity. Optional enhancements, such as truncation for long paths or dropdowns for hidden levels, allow the breadcrumb to adapt to different contexts. Consistent spacing, typography, and accessibility support ensure the breadcrumb remains usable across devices while seamlessly integrating into the overall interface.
                    </p>
                    <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
                        <img src={BREADCRUMB_ANATOMY} alt="BREADCRUMB_ANATOMY" />
                    </div>
                </div>
                <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />

                {/* Types section */}
                <div id="Types">
                    <h2 className="text-3xl font-semibold mb-6 ">Types</h2>
                    <p className="mb-3">
                        Alerts are available in five variants to represent different message intents: neutral for general information, brand for product-related highlights, success for positive outcomes, warning for potential issues, and error for critical problems.
                    </p>
                    <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
                        <img src={BREADCRUMB_TYPE} alt="BREADCRUMB_TYPE" />
                    </div>
                </div>
                <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />

              
            </div>
        </BaseTabSectionScreen>
    );
}
