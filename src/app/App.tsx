import React, { useEffect } from "react";
import { Routes, useLocation, Route, Navigate } from "react-router-dom";
import "preline/preline";
import { IStaticMethods } from "preline/preline";

import { NavBar, SubHeader } from "@components";
import { ComponentRoutes } from "routes/ComponentRoutes";
import { FoundationRoutes } from "routes/FoundationRoutes";
import { PatternRoutes } from "routes/PatternRoutes";

import { NavBarItem } from "@types";
import { HomePage, ResourcesPage } from "@pages";

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

  const pageName = location.pathname.split("/").filter(Boolean).pop() || "Home";

  const navBarItemList: NavBarItem[] = [
    { name: "Home", path: "/" },
    { name: "Foundation", path: "/Foundation" },
    { name: "Components", path: "/Components" },
    { name: "Patterns", path: "/Patterns" },
    { name: "Resources", path: "/Resources" },
  ];
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
            <SubHeader activePage={pageName} />
          </div>
        </div>
      </div>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Foundation/*" element={<FoundationRoutes/>} />
          <Route path="/Components/*" element={<ComponentRoutes />} />
          <Route path="/Patterns/*" element={<PatternRoutes />} />
          <Route path="/Resources" element={<ResourcesPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
