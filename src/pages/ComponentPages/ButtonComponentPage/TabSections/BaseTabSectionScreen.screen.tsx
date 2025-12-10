import { ScrollSpy } from "@components";
import React from "react";
type BaseTabSectionScreen = {
  children: React.ReactNode;
  scrollSpySections: string[];
};
export function BaseTabSectionScreen({
  children,
  scrollSpySections,
}: BaseTabSectionScreen) {
  return (
    <section className="md:flex md:justify-center gap-32">
      <div className="max-w-[820px] mx-auto">{children}</div>
      <div className="mt-14 hidden md:block md:w-1/4">
        <ScrollSpy sections={scrollSpySections} />
      </div>
    </section>
  );
}
