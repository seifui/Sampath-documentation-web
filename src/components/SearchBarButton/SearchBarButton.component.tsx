import { SearchIcon } from "@components";
import React from "react";

export function SearchBarButton() {
  return (
    <div className="flex px-2.5 py-1.5 border rounded-lg border-gray-200 dark:border-gray-dark-200 cursor-pointer bg-solid-base hover:bg-gray-50 dark:bg-solid-dark-base dark:hover:bg-gray-dark-50">
      <div className="flex gap-3">
        <SearchIcon width={"15px"} height={"15px"} color="#041530b3" />
        <span className="text-sm text-primary dark:text-primary-dark ">
          Quick search...
        </span>
      </div>
    </div>
  );
}
