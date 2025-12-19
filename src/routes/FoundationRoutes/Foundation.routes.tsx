import {
    FoundationBasePage,
    FoundationLandingPage,
    ColorPage,
    TypographyPage,
    FocusPage,
    IconPage,

  } from "@pages";
  import React from "react";
  import { Route, Routes } from "react-router-dom";
  
  export function FoundationRoutes() {
    return (
      <Routes>
        <Route path="/" element={<FoundationBasePage />}>
          <Route path="/" element={<FoundationLandingPage />} />
          <Route path="Color" element={<ColorPage />} />
          <Route path="Typography" element={<TypographyPage />} />
          <Route path="Focus" element={<FocusPage />} /> 
          <Route path="Icon" element={<IconPage />} /> 
        </Route>
      </Routes>
    );
  }
  