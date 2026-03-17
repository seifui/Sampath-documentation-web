import React, { useEffect } from "react";
import { Routes, useLocation, Route } from "react-router-dom";
import "preline/preline";
import { IStaticMethods } from "preline/preline";

import { NavBar, SubHeader } from "@components";
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

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  const navBarItemList: NavBarItem[] = [
    { name: "Design", path: "/" },
    { name: "Foundation", path: "/Foundation" },
    { name: "Components", path: "/Components" },
    { name: "Patterns", path: "/Patterns" },
    { name: "Framework", path: "/Resources" },
  ];

  const getBreadcrumb = () => {
    const segments = location.pathname.split("/").filter(Boolean);
    if (segments.length === 0) return "Design";
    const sectionMap: Record<string, string> = { Resources: "Framework" };
    return segments
      .map((s) => sectionMap[s] ?? s.charAt(0).toUpperCase() + s.slice(1))
      .join(" / ");
  };

  const hasSidebar =
    location.pathname.startsWith("/Foundation") ||
    location.pathname.startsWith("/Components") ||
    location.pathname.startsWith("/Patterns");
  return (
    <div className="bg-white dark:bg-solid-dark-base min-h-screen">
      <div className="flex flex-col">
        <div className="w-full border-b border-gray-200 dark:border-gray-dark-200">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
            <NavBar navBarItemList={navBarItemList} />
          </div>
        </div>
        <div className="w-full border-b border-gray-200 dark:border-b-gray-dark-200 lg:hidden">
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6">
            <SubHeader breadcrumb={getBreadcrumb()} showHamburger={hasSidebar} />
          </div>
        </div>
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
