import React from "react";
import { MdMood } from "react-icons/md";

function Header() {
    return (
    <div className="w-screen bg-gray-100 shadow-sm text-gray-700 flex justify-left pl-15 p-2 gap-5 items-center h-15">
        <MdMood className="bg-gray-200 shadow-md h-10 w-10"/>
        <h1 className="text-2xl font-semibold text-black">Mood Tracker</h1>
    </div>
    )
}

export default Header;