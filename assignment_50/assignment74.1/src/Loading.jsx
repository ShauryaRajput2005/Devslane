import React from "react";
import { ScaleLoader } from "react-spinners";

export function Loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <ScaleLoader />
    </div>
  );
}
