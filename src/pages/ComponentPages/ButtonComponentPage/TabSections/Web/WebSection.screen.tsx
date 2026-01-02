import React from "react";
import {
    BUTTON_DODONT_01_WEB,
    BUTTON_DODONT_02_WEB,
    BUTTON_DODONT_03_WEB,
    BUTTON_DODONT_04_WEB,
    BUTTON_DODONT_05_WEB,
    BUTTON_DODONT_06_WEB,

  } from "@assets";
export function WebSection() {
  return (
    <div>
      <div className="p-4 my-6">
        <img src={BUTTON_DODONT_01_WEB} alt="BUTTON_DO&DONT_01" />
      </div>
      <div className="p-4 my-6">
        <img src={BUTTON_DODONT_02_WEB} alt="BUTTON_DO&DONT_02" />
      </div>
      <div className="p-4 my-6">
        <img src={BUTTON_DODONT_03_WEB} alt="BUTTON_DO&DONT_03" />
      </div>
      <div className="p-4 my-6">
        <img src={BUTTON_DODONT_04_WEB} alt="BUTTON_DO&DONT_04" />
      </div>
      <div className="p-4 my-6">
        <img src={BUTTON_DODONT_05_WEB} alt="BUTTON_DO&DONT_03" />
      </div>
      <div className="p-4 my-6">
        <img src={BUTTON_DODONT_06_WEB} alt="BUTTON_DO&DONT_04" />
      </div>
    </div>
  );
}
