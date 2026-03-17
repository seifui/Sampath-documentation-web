import React, { useEffect } from "react";
import { Routes, useLocation, Route, useNavigate } from "react-router-dom";
import "preline/preline";
import { IStaticMethods } from "preline/preline";

import { NavBar } from "@components";
import { ComponentRoutes } from "routes/ComponentRoutes";
import { FoundationRoutes } from "routes/FoundationRoutes";
import { PatternRoutes } from "routes/PatternRoutes";

import { NavBarItem } from "@types";
import { HomePage, FrameworkPage } from "@pages";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  // Preline's destroyBackdrop relies on `transitionend` which is unreliable on
  // mobile Safari. If the event never fires, the backdrop element stays in the DOM
  // with overflow:hidden on body, causing a stuck gray overlay. This fallback
  // force-removes any lingering Preline backdrops after the close animation window.
  useEffect(() => {
    const handleOverlayClose = () => {
      setTimeout(() => {
        document.querySelectorAll("[data-hs-overlay-backdrop-template]").forEach((el) => el.remove());
        document.body.style.overflow = "";
      }, 400);
    };
    document.addEventListener("close.hs.overlay", handleOverlayClose);
    return () => document.removeEventListener("close.hs.overlay", handleOverlayClose);
  }, []);

  const navBarItemList: NavBarItem[] = [
    { name: "Design", path: "/" },
    { name: "Foundation", path: "/Foundation" },
    { name: "Components", path: "/Components" },
    { name: "Patterns", path: "/Patterns" },
    { name: "Framework", path: "/Resources" },
  ];

  const segments = location.pathname.split("/").filter(Boolean);
  const isSubPage = segments.length > 1;
  const parentPath = "/" + segments.slice(0, -1).join("/");

  return (
    <div className="bg-white dark:bg-solid-dark-base min-h-screen">
      <div className="flex flex-col">
        <div className="w-full border-b border-gray-200 dark:border-gray-dark-200">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <NavBar navBarItemList={navBarItemList} />
          </div>
        </div>
        {isSubPage && (
          <div className="w-full lg:hidden">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6">
              <button
                type="button"
                onClick={() => navigate(parentPath)}
                className="flex items-center gap-1.5 py-3 text-sm font-medium text-primary dark:text-gray-dark-600 hover:text-brand-600 dark:hover:text-brand-600 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Foundation/*" element={<FoundationRoutes/>} />
          <Route path="/Components/*" element={<ComponentRoutes />} />
          <Route path="/Patterns/*" element={<PatternRoutes />} />
          <Route path="/Resources" element={<FrameworkPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
