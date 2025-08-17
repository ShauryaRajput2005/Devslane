import React from "react";
import { FcCheckmark, FcCancel } from "react-icons/fc";

const theme = {
  success: {
    icon: <FcCheckmark className="w-5 h-5 mr-2" />,
    bgColor: "bg-green-50",
    textColor: "text-green-800",
    borderColor: "border-green-300",
  },
  error: {
    icon: <FcCancel className="w-5 h-5 mr-2" />,
    bgColor: "bg-red-50",
    textColor: "text-red-800",
    borderColor: "border-red-300",
  },
};

function Alert({ message, type }) {
  return (
    <div
      className={`fixed top-4 right-4 z-[9999] flex items-center max-w-md w-auto 
      p-4 text-sm ${theme[type].textColor} border ${theme[type].borderColor} 
      rounded-lg shadow-lg ${theme[type].bgColor}`}
      role="alert"
    >
      {theme[type].icon}
      <div>
        <span className="font-medium capitalize">{type}:</span> {message}
      </div>
    </div>
  );
}

export default Alert;
