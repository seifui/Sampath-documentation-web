import React from "react";
import {
  BUTTON_DODONT_01,
  BUTTON_DODONT_02,
  BUTTON_DODONT_03,
  BUTTON_DODONT_04,
} from "@assets";

export function MobileSection() {
  return (
    <div>
      <div className="p-4 my-6">
        <img src={BUTTON_DODONT_01} alt="BUTTON_DO&DONT_01" />
      </div>
      <div className="p-4 my-6">
        <img src={BUTTON_DODONT_02} alt="BUTTON_DO&DONT_02" />
      </div>
      <div className="p-4 my-6">
        <img src={BUTTON_DODONT_03} alt="BUTTON_DO&DONT_03" />
      </div>
      <div className="p-4 my-6">
        <img src={BUTTON_DODONT_04} alt="BUTTON_DO&DONT_04" />
      </div>
    </div>
  );
}
