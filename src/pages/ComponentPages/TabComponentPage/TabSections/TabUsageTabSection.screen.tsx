import React from "react";
import { BaseTabSectionScreen } from "./BaseTabSectionScreen.screen";
import {
    TAB_ANATOMY,
    TAB_TYPES,
    TAB_DODONT_01,
    TAB_DODONT_02,  
} from "@assets";
export function TabUsageTabSection() {
    const scrollSpySections = ["Anatomy", "States", "Do’s & Don’ts" ];
    return (
        <BaseTabSectionScreen scrollSpySections={scrollSpySections}>
            <div className="mt-14  text-primary dark:text-primary-dark">

                {/* Anatomy section */}
                <div id="Anatomy">
                    <h2 className="text-3xl font-semibold mb-6 ">Anatomy</h2>
                    <p>
                    Tabs consist of a container, tab items, and an active indicator. Each tab represents a category, allowing users to switch between related content without leaving the current context. The active tab is visually distinguished, providing clear navigation cues.
                    </p>
                    <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
                        <img src={TAB_ANATOMY} alt="TAB_ANATOMY" />
                    </div>
                </div>
                <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />

                {/* Types section */}
                <div id="States">
                    <h2 className="text-3xl font-semibold mb-6 ">Types</h2>
                    <p className="mb-3">
                        Tabs consist of a container, tab items, and an active indicator. They help users navigate between related content while maintaining context.
                    </p>
                    <div className="p-4 bg-gray-200 dark:bg-gray-dark-200 my-6 rounded-[16px]">
                        <img src={TAB_TYPES} alt="TAB_TYPES" />
                    </div>
                </div>
                <hr className="my-8 sm:my-12 bg-gray-200 dark:bg-gray-dark-200" />

                {/* Do’s & Don’ts section */}
                <div id="Do’s & Don’ts">
                    <h2 className="text-3xl font-semibold mb-6 ">Do’s & Don’ts</h2>
                    <p className="mb-3">
                    Do’s and Don’ts are practical guidelines that outline best practices to follow and common mistakes to avoid, ensuring tabs are clear, intuitive, and provide a seamless navigation experience for users.
                    </p>
                    <div className="my-6">
                        <img src={TAB_DODONT_01} alt="TAB_DODONT_01" />
                        <img src={TAB_DODONT_02} alt="TAB_DODONT_02" />
                    </div>
                </div>
            </div>
        </BaseTabSectionScreen>
    );
}
