import { useEffect } from "react";
import { Routes, useLocation, Route } from "react-router-dom";
import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { ComponentPage } from "../pages";
import React from "react";
import { NavBar } from "../components";

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
    <div className="mx-20 lg:mx-40 h-[2000px]">
      <NavBar />
      <Routes>
        <Route path="/components" element={<ComponentPage />} />
      </Routes>
    </div>
  );
}

export default App;
