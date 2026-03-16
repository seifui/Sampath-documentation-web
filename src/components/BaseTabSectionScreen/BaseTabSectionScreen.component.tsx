import React from "react";
import { ScrollSpy } from "@components";

type BaseTabSectionScreenProps = {
  children: React.ReactNode;
  scrollSpySections: string[];
};

export function BaseTabSectionScreen({
  children,
  scrollSpySections,
}: BaseTabSectionScreenProps) {
  return (
    <section className="md:flex md:justify-center gap-6 lg:gap-12 xl:gap-20">
      <div className="w-full max-w-[820px] mx-auto md:mx-0">{children}</div>
      <div className="mt-14 hidden md:block md:w-[180px] lg:w-[200px] xl:w-[220px] flex-shrink-0">
        <ScrollSpy sections={scrollSpySections} />
      </div>
    </section>
  );
}
