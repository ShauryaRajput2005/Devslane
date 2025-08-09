import React from "react";

export function Loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
