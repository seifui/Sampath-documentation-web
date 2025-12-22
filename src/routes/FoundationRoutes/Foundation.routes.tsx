import {
    FoundationBasePage,
    FoundationLandingPage,
    ColorPage,
    TypographyPage,
    FocusPage,
    IconPage,
    IllustrationPage,
    PaddingPage,
    RadiusPage,
    SizePage,
    SpacingPage,

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
          <Route path="Illustration" element={<IllustrationPage />} /> 
          <Route path="Padding" element={<PaddingPage />} /> 
          <Route path="Radius" element={<RadiusPage />} /> 
          <Route path="Size" element={<SizePage />} /> 
          <Route path="Spacing" element={<SpacingPage />} /> 

        </Route>
      </Routes>
    );
  }
  