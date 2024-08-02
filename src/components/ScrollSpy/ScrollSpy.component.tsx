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
    <nav className=" p-4 border-l border-l-gray-200 dark:border-l-gray-dark-200 sticky top-0">
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={`${
                activeSection === section
                  ? "text-brand-600 "
                  : "text-gray-700 dark:text-gray-dark-700"
              } text-xs`}
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
