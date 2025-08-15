import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { useState } from 'react';
function Task({ task, onCheck, checked = false }) {
    return (_jsxs("div", { className: "flex items-center gap-2 h-10", children: [_jsx("input", { type: "checkbox", className: "mr-2", onChange: onCheck, checked: checked }), _jsx("label", { className: "text-lg", children: task })] }));
}
export default Task;
//# sourceMappingURL=Task.js.map