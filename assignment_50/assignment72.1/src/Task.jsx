import React from "react";

function Task({task,onCheck,checked=false}){

    return(
        <div className="flex items-center gap-2 h-10">
        <input type="checkbox"  className="mr-2" onChange={onCheck} checked={checked}  />
        <label className="text-lg" htmlFor="">{task}</label    >
        </div>
    )
    
}
export default Task;