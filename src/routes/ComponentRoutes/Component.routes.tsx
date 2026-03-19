import {
  ButtonComponentPage,
  ComponentBasePage,
  ComponentsLandingPage,
  TextFieldComponentPage,
  RadioButtonComponentPage,
  BadgeComponentPage,
  CheckboxComponentPage,
  SwitchComponentPage,
  TextareaComponentPage,
  AvatarComponentPage,
  LinkComponentPage,
  AccordionComponentPage,
  AlertComponentPage,
  BreadcrumbComponentPage,
  PaginationComponentPage,
  TabComponentPage,
  ProgressStepsComponentPage,

} from "@pages";
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
        <Route path="Textarea" element={<TextareaComponentPage />} />
        <Route path="Avatar" element={<AvatarComponentPage />} />
        <Route path="Link" element={<LinkComponentPage />}/>
        <Route path="Accordion" element={<AccordionComponentPage />}/>
        <Route path="Alert" element={<AlertComponentPage />}/>
        <Route path="Breadcrumb" element={<BreadcrumbComponentPage />}/>
        <Route path="Pagination" element={<PaginationComponentPage />}/>
        <Route path="Tabs" element={<TabComponentPage />}/>
        <Route path="ProgressSteps" element={<ProgressStepsComponentPage />}/>
      </Route>
    </Routes>
  );
}
