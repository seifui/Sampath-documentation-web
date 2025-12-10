import React, { useEffect, useState } from "react";

interface ScrollSpyProps {
  sections: string[]; // Array of section IDs to track
}

export const ScrollSpy: React.FC<ScrollSpyProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { top } = element.getBoundingClientRect();
          if (top <= 0) {
            currentSection = section;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <nav className="sticky top-8 w-full">
      <h5 className="text-sm font-semibold text-primary dark:text-primary-dark">
        One this page
      </h5>
      <ul className="py-4">
        {sections.map((section) => (
          <li key={section} className="block ">
            <a
              href={`#${section}`}
              className={`${
                activeSection === section
                  ? "text-brand-600 border-l border-l-brand-600"
                  : "text-primary dark:text-primary-dark  border-l border-l-gray-200 dark:border-l-gray-dark-200 "
              } text-base block px-4 py-1`}
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
