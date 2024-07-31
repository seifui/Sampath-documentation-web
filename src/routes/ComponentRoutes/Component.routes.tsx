import { ComponentBasePage, ComponentsLandingPage } from "@pages";
import { DarkModeToggler } from "@components";
import React from "react";
import { Route, Routes } from "react-router-dom";

export function ComponentRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ComponentBasePage />}>
        <Route path="/" element={<ComponentsLandingPage />} />
        <Route path="DRTest" element={<DarkModeToggler />} />
      </Route>
    </Routes>
  );
}
