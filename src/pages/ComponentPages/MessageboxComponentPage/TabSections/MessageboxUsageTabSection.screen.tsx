import React from "react";
import { BaseTabSectionScreen } from "./BaseTabSectionScreen.screen";
import {

    MESSAGEBOX_ANATOMY,
    MESSAGEBOX_STATE,
    MESSAGEBOX_VARIANTS,
    MESSAGEBOX_DODONT_01,
    MESSAGEBOX_DODONT_02,
} from "@assets";
export function MessageboxUsageTabSection() {
    const scrollSpySections = ["Anatomy", "States", "Variants", "Do’s & Don’ts" ];
    return (
        <BaseTabSectionScreen scrollSpySections={scrollSpySections}>
            <div className="mt-14  text-primary dark:text-primary-dark">

                {/* Anatomy section */}
                <div id="Anatomy">
                    <h2 className="text-3xl font-semibold mb-6 ">Anatomy</h2>
                    <p>
                    Messages provide users with timely feedback, alerts, or confirmations. They help communicate system status, errors, warnings, or success states in a clear and concise manner, ensuring a seamless user experience.
                    </p>
                    <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
                        <img src={MESSAGEBOX_ANATOMY} alt="MESSAGEBOX_ANATOMY" />
                    </div>
                </div>
                <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />
            
                {/* States section */}
                <div id="States">
                    <h2 className="text-3xl font-semibold mb-6 ">States</h2>
                    <p className="mb-3">
                        Pagination has three key styles - default, secondary, and outline each designed to suit different interface needs and visual preferences. The default pagination style features a solid background with clear, distinguishable page numbers for easy navigation. The secondary style adopts a more subtle approach, often using a minimal design with lighter colors to blend seamlessly into the interface. The outline style provides a border around page links, offering a sleek and modern look while maintaining clarity. Each style ensures usability and accessibility, allowing users to navigate content efficiently across various applications.
                    </p>
                    <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
                        <img src={MESSAGEBOX_STATE} alt="MESSAGEBOX_STATE" />
                    </div>
                </div>
                <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />

                 {/* Variants section */}
                 <div id="Variants">
                    <h2 className="text-3xl font-semibold mb-6 ">Variants</h2>
                    <p>
                    Message box variants use distinct visual styles to convey the nature of the information. The four variants(Primary, Error, Success, and Warning) each signal a specific intent or urgency, helping users interpret the message quickly and appropriately.
                    </p>
                    <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
                        <img src={MESSAGEBOX_VARIANTS} alt="MESSAGEBOX_ANATOMY" />
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
                        <img src={MESSAGEBOX_DODONT_01} alt="CHECKBOX_DO&DONT_01" />
                        <img src={MESSAGEBOX_DODONT_02} alt="CHECKBOX_DO&DONT_02" />
                    </div>
                </div>
            </div>
        </BaseTabSectionScreen>
    );
}
