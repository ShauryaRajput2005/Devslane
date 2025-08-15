import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
function ToDoForm({ onSave, onCancel }) {
    const [inputvalue, setInputValue] = useState("");
    const handleSubmit = () => {
        if (inputvalue.trim() === "")
            return;
        onSave(inputvalue);
        setInputValue("");
    };
    return (_jsxs("div", { className: "flex flex-col p-4 gap-2 ", children: [_jsx("h2", { className: "text-color-600 self-start", children: " Create a Task" }), _jsx("input", { type: "text", placeholder: "Enter the task", value: inputvalue, onKeyDown: (e) => e.key === "Enter" && handleSubmit(), onChange: (e) => setInputValue(e.target.value), className: "border-2 border-transparent px-2 py-1 rounded focus:border-yellow-500 focus:outline-none shadow-md" }), _jsxs("div", { className: "flex gap-2 mt-4", children: [_jsx("button", { type: "submit", onClick: handleSubmit, className: "bg-yellow-400 hover:bg-yellow-500 hover:shadow-xs hover:shadow-black text-white font-semibold px-3 py-3 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-102", children: "Save" }), _jsx("button", { type: "reset", onClick: onCancel, className: "bg-gray-100 hover:bg-gray-200 hover:shadow-xs hover:shadow-yellow-300 font-semibold px-3 py-3 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-102 ", children: "Cancel" })] })] }));
}
export default ToDoForm;
//# sourceMappingURL=ToDoForm.js.map