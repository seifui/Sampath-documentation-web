import React from "react";
import { BaseTabSectionScreen } from "./BaseTabSectionScreen.screen";
import {
    PAGINATION_ANATOMY,
    PAGINATION_STATES,
    PAGINATION_DODONT_01,
    PAGINATION_DODONT_02,
} from "@assets";
export function PaginationUsageTabSection() {
    const scrollSpySections = ["Anatomy", "States", "Do’s & Don’ts" ];
    return (
        <BaseTabSectionScreen scrollSpySections={scrollSpySections}>
            <div className="mt-14  text-primary dark:text-primary-dark">

                {/* Anatomy section */}
                <div id="Anatomy">
                    <h2 className="text-3xl font-semibold mb-6 ">Anatomy</h2>
                    <p>
                        A pagination component consists of a series of navigational elements that enable users to browse through multiple pages of content efficiently. The most basic setup includes a set of numbered page links enclosed within a container, allowing users to jump between pages. However, pagination can also be enhanced with additional elements such as previous and next buttons for step-by-step navigation, ellipses to indicate skipped pages, and a current page indicator for clarity. It may also support features like page size selection, which lets users control how many items are displayed per page, and responsive adjustments to ensure usability across different screen sizes.
                    </p>
                    <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
                        <img src={PAGINATION_ANATOMY} alt="PAGINATION_ANATOMY" />
                    </div>
                </div>
                <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />

                {/* Types section */}
                <div id="States">
                    <h2 className="text-3xl font-semibold mb-6 ">Types</h2>
                    <p className="mb-3">
                        Pagination has three key styles - default, secondary, and outline each designed to suit different interface needs and visual preferences. The default pagination style features a solid background with clear, distinguishable page numbers for easy navigation. The secondary style adopts a more subtle approach, often using a minimal design with lighter colors to blend seamlessly into the interface. The outline style provides a border around page links, offering a sleek and modern look while maintaining clarity. Each style ensures usability and accessibility, allowing users to navigate content efficiently across various applications.
                    </p>
                    <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
                        <img src={PAGINATION_STATES} alt="PAGINATION_STATES" />
                    </div>
                </div>
                <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />

                {/* Do’s & Don’ts section */}
                <div id="Do’s & Don’ts">
                    <h2 className="text-3xl font-semibold mb-6 ">Do’s & Don’ts</h2>
                    <p className="mb-3">
                        Do's and Don'ts are practical guidelines that outline best practices
                        to follow and common mistakes to avoid, ensuring checkboxes are
                        intuitive, accessible, and enhance user interaction.
                    </p>
                    <div className="my-6">
                        <img src={PAGINATION_DODONT_01} alt="CHECKBOX_DO&DONT_01" />
                        <img src={PAGINATION_DODONT_02} alt="CHECKBOX_DO&DONT_02" />
                    </div>
                </div>
            </div>
        </BaseTabSectionScreen>
    );
}
