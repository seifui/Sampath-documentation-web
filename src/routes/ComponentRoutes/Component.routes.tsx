import {
  ButtonComponentPage,
  ComponentBasePage,
  ComponentsLandingPage,
  TextFieldComponentPage,
  RadioButtonComponentPage,
  BadgeComponentPage,
  CheckboxComponentPage,
  SwitchComponentPage,

} from "@pages";
import { DarkModeToggler } from "@components";
import React from "react";
import { Route, Routes } from "react-router-dom";

export function ComponentRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ComponentBasePage />}>
        <Route path="/" element={<ComponentsLandingPage />} />
        <Route path="Button" element={<ButtonComponentPage />} />
        <Route path="TextField" element={<TextFieldComponentPage />} />
        <Route path="RadioButton" element={<RadioButtonComponentPage />} />
        <Route path="Badge" element={<BadgeComponentPage />} />
        <Route path="Checkbox" element={<CheckboxComponentPage />} />
        <Route path="Switch" element={<SwitchComponentPage />} />
      </Route>
    </Routes>
  );
}
