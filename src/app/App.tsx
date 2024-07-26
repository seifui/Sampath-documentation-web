import React, { useEffect } from "react";
import { Routes, useLocation, Route } from "react-router-dom";
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { ComponentBasePage } from "@pages";

import { NavBar, SubHeader } from "@components";
import { ComponentRoutes } from "routes/ComponentRoutes";

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

  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="flex flex-col justify-center content-center">
        <div className="px-10 xl:px-40 border-b dark:border-b-black">
          <NavBar menuList={["Home", "Foundation", "Components", "Patterns"]} />
        </div>
        <div className="px-10 lg:px-40 border-b lg:hidden">
          <SubHeader />
        </div>
      </div>
      <div className="mx-10 xl:mx-40">
        <Routes>
          <Route path="/components/*" element={<ComponentRoutes />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
