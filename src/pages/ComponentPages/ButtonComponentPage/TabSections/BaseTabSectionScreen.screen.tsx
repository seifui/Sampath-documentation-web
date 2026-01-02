import { ScrollSpy } from "@components";
import React from "react";
type BaseTabSectionScreenProps = {
  children: React.ReactNode;
  scrollSpySections: string[];
};
export function BaseTabSectionScreen({
  children,
  scrollSpySections,
}: BaseTabSectionScreenProps) {
  return (
    <section className="md:flex md:justify-center gap-32">
      <div className="max-w-[820px] mx-auto">{children}</div>
      <div className="mt-14 hidden md:block w-1/2">
        <ScrollSpy sections={scrollSpySections} />
      </div>
    </section>
  );
}
