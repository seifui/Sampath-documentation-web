import React from "react";
import { BaseTabSectionScreen } from "./BaseTabSectionScreen.screen";

export function AccordionUsageTabSection() {
    const scrollSpySections = [
        "Anatomy",
        "Shapes",
        "Sizes",
        "Types",
        "Variants",
        "Do’s & Don’ts",
      ];
  return (
    <BaseTabSectionScreen scrollSpySections={scrollSpySections}>
      <div>
        
      </div>
    </BaseTabSectionScreen>
  );
}
