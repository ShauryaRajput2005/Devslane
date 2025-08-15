import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Header from './Header.js';
import ToDoForm from './ToDoForm.js';
import Task from './Task.js';
function App() {
    const [taskList, setTaskList] = useState([]);
    const [doneList, setDoneList] = useState([]);
    const [formshow, setformshow] = useState(false);
    const [buttonShow, setbuttonShow] = useState(true);
    const handleAdd = () => {
        setformshow(true);
        setbuttonShow(false);
    };
    const handleRefresh = () => {
        console.log("Refreshing...");
        setTaskList([]);
        setDoneList([]);
    };
    const handleCheck = (taskIndex) => {
        const completed = taskList[taskIndex];
        setTaskList(taskList.filter((_, i) => i !== taskIndex));
        setDoneList([...doneList, completed]);
    };
    const handleUncheck = (taskIndex) => {
        const undone = doneList[taskIndex];
        setDoneList(doneList.filter((_, i) => i !== taskIndex));
        setTaskList([...taskList, undone]);
    };
    const handleAddTask = (task) => {
        setTaskList([...taskList, task]);
        setformshow(false);
        setbuttonShow(true);
    };
    const handleCancel = () => {
        setformshow(false);
        setbuttonShow(true);
        console.log("Task creation cancelled");
    };
    return (_jsxs("div", { className: "flex flex-col h-screen text-black gap-5 p-4 bg-gray-100", children: [_jsx(Header, {}), _jsxs("div", { className: "flex justify-between items-center ", children: [_jsx("h2", { className: "text-2xl font-extrabold", children: "Things to get done" }), _jsx("button", { className: "bg-yellow-400 hover:bg-yellow-500 hover:shadow-2xs hover:shadow-black text-white font-semibold px-3  py-3 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-102", onClick: handleRefresh, children: "Refresh" })] }), _jsxs("div", { className: "flex flex-col gap-2 space-evenly items-start ml-2 shadow-lg ", children: [_jsx("p", { className: "text-xl font-semibold p-4 text-gray-600", children: "Things to do : " }), taskList.length > 0 && (_jsx("div", { className: "flex flex-col gap-1 ml-4", children: taskList.map((task, index) => (_jsx("div", { className: "text-gray-500", children: _jsx(Task, { task: task, onCheck: () => handleCheck(index) }) }, index))) })), _jsxs("div", { className: "ml-4 mb-4 ", children: [_jsx("div", { className: `overflow-hidden transition-all duration-500 ease-in-out ${formshow ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`, children: formshow && (_jsx(ToDoForm, { onSave: handleAddTask, onCancel: handleCancel })) }), buttonShow && (_jsx("button", { className: "bg-yellow-400 hover:bg-yellow-500 hover:shadow-2xs hover:shadow-black text-white font-semibold px-3  py-3 rounded-3xl shadow-md transform transition-transform duration-300 hover:scale-102", onClick: handleAdd, children: "+ Add To-Do" }))] })] }), _jsxs("div", { className: "flex flex-col items-start gap-2 ml-2", children: [_jsx("h2", { className: "text-gray-600 font-bold text-xl", children: "Things done : " }), doneList.length > 0 && (_jsx("div", { className: "flex flex-col gap-1 ml-4", children: doneList.map((task, index) => (_jsx("div", { className: "text-gray-500", children: _jsx(Task, { task: task, onCheck: () => handleUncheck(index), checked: true }) }, index))) }))] })] }));
}
export default App;
//# sourceMappingURL=App.js.map