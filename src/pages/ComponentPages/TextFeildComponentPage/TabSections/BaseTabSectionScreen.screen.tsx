 
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
      <div className="w-[90%] md:w-[60%] max-w-[1600px] m-auto md:m-0">
        {children}
      </div>
      <div className="mt-14 mr-14 hidden md:block">
        {/* <ScrollSpy sections={scrollSpySections} /> */}
      </div>
    </section>
  );
}
