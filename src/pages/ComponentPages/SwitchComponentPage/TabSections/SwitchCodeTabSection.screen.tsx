import React from "react";
import { BaseTabSectionScreen } from "./BaseTabSectionScreen.screen";
import { HTML_LOGO, REACT_LOGO, ANGULAR_LOGO, VUE_LOGO } from "@assets";

export function SwitchCodeTabSection() {
    return (
         <div className="max-w-[820px] mx-auto">
           <div id="Documentation" className="mt-14">
          <h2 className="text-3xl font-bold mb-6 text-primary dark:text-primary-dark">
            Documentation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {/* HTML */}
            <div className="border rounded-lg p-6 flex flex-col justify-between hover:bg-gray-50 transition">
              <h2 className="text-xl font-medium mb-6">HTML</h2>
              <div className="flex justify-between items-end">
                <img src={HTML_LOGO} className="w-10 h-10" alt="HTML LOGO" />
                <svg
                  className="w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 9.00001L21 3.00001M21 3.00001H15M21 3.00001L12 12M10 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* React */}
            <a href="https://mellow-moxie-7efe99.netlify.app/?path=/docs/subframe-switch--docs" target="_blank" rel="noopener noreferrer" className="border rounded-lg p-6 flex flex-col justify-between hover:bg-gray-50 transition cursor-pointer">
              <h2 className="text-xl font-medium mb-6">React</h2>
              <div className="flex justify-between items-end">
                <img src={REACT_LOGO} className="w-10 h-10" alt="React LOGO" />
                <svg
                  className="w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 9.00001L21 3.00001M21 3.00001H15M21 3.00001L12 12M10 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>

            {/* Angular */}
            <div className="border rounded-lg p-6 flex flex-col justify-between hover:bg-gray-50 transition">
              <h2 className="text-xl font-medium mb-6">Angular</h2>
              <div className="flex justify-between items-end">
                <img src={ANGULAR_LOGO} className="w-10 h-10" alt="Angular" />
                <svg
                  className="w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 9.00001L21 3.00001M21 3.00001H15M21 3.00001L12 12M10 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Vue */}
            <div className="border rounded-lg p-6 flex flex-col justify-between hover:bg-gray-50 transition">
              <h2 className="text-xl font-medium mb-6">Vue</h2>
              <div className="flex justify-between items-end">
                <img src={VUE_LOGO} className="w-10 h-10" alt="Vue" />
                <svg
                  className="w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 9.00001L21 3.00001M21 3.00001H15M21 3.00001L12 12M10 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
}
