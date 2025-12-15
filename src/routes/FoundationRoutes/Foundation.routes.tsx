import {
    FoundationBasePage,
    FoundationLandingPage,
    ColorPage,
  } from "@pages";
  import React from "react";
  import { Route, Routes } from "react-router-dom";
  
  export function FoundationRoutes() {
    return (
      <Routes>
        <Route path="/" element={<FoundationBasePage />}>
          <Route path="/" element={<FoundationLandingPage />} />
          <Route path="Color" element={<ColorPage />} />
        </Route>
      </Routes>
    );
  }
  