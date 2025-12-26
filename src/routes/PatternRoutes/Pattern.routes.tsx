import {
  PatternBasePage,
  PatternLandingPage,
  ValidationPage,
  EmptyStatePage,
  ErrorPatternPage,
  NotificationPage,
} from "@pages";
import React from "react";
import { Route, Routes } from "react-router-dom";

export function PatternRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PatternBasePage />}>
        <Route path="/" element={<PatternLandingPage />} />
        <Route path="Validation" element={<ValidationPage />} />
        <Route path="Emptystatepattern" element={<EmptyStatePage />} />
        <Route path="Errorpattern" element={<ErrorPatternPage />} />
        <Route path="Notification" element={<NotificationPage />} />
      </Route>
    </Routes>
  );
}
  