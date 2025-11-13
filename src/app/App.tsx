import React, { useEffect } from "react";
import { Routes, useLocation, Route } from "react-router-dom";
import "preline/preline";
import { IStaticMethods } from "preline/preline";

import { NavBar, SubHeader } from "@components";
import { ComponentRoutes } from "routes/ComponentRoutes";
import { NavBarItem } from "@types";

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
    // { name: "Home", path: "/" },
    // { name: "Foundation", path: "Foundation" },
    { name: "Components", path: "/" },
    // { name: "Patterns", path: "patterns" },
  ];
  return (
    <div className="bg-white dark:bg-solid-dark-base">
      <div className="flex flex-col justify-center content-center">
        <div className="border-b-gray-200 border-b dark:border-b-gray-dark-200">
          <div className="px-3 xl:px-6 m-auto ">
            <NavBar navBarItemList={navBarItemList} />
          </div>
        </div>
        <div className="px-3 xl:px-6 border-b-gray-200 border-b dark:border-b-gray-dark-200 lg:hidden">
          <SubHeader />
        </div>
      </div>
      <div className="lg:pl-3 xl:pl-6 m-auto">
        <Routes>
          <Route path="/*" element={<ComponentRoutes />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
