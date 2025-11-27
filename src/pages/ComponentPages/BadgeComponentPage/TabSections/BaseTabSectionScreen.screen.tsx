import React from "react";
import { ScrollSpy } from "@components";
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
      <div className="w-full md:w-3/4 m-auto md:m-0">{children}</div>
      <div className="mt-14 hidden md:block md:w-1/4">
        <ScrollSpy sections={scrollSpySections} />
      </div>
    </section>
  );
}
