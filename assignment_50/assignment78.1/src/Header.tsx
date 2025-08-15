import React from "react";
import { FaTasks } from "react-icons/fa";

function Header() {
  return (
    <div className="w-screen bg-gray-100 shadow-sm text-gray-700 flex justify-left pl-15 p-2 gap-5 items-center h-15">
      <FaTasks className="bg-gray-200 shadow-md h-10 w-10" />
      <h1 className="text-2xl font-semibold text-black">To-Do List</h1>
    </div>
  );
}

export default Header;
