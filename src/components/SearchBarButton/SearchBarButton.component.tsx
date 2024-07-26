import { SearchIcon } from "@components";
import React from "react";

export function SearchBarButton() {
  return (
    <div className="flex px-2.5 py-1.5 border rounded-lg border-gray-200 cursor-pointer">
      <div className="flex gap-3">
        <SearchIcon width={"15px"} height={"15px"} color="#041530b3" />
        <span className="text-xs text-gray-600">Quick search...</span>
      </div>
    </div>
  );
}
