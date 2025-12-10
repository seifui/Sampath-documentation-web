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
    <nav className="sticky top-8 w-fit">
      <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-dark-700">
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
                  : "text-gray-700 dark:text-gray-dark-700  border-l border-l-gray-200 dark:border-l-gray-dark-200 "
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
