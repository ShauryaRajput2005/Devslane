import React from "react";
import { useState } from 'react';

interface TaskProps {
  task: string;
  onCheck: () => void;
  checked?: boolean;
}

function Task({ task, onCheck, checked = false }: TaskProps) {
  return (
    <div className="flex items-center gap-2 h-10">
      <input
        type="checkbox"
        className="mr-2"
        onChange={onCheck}
        checked={checked}
      />
      <label className="text-lg">{task}</label>
    </div>
  );
}

export default Task;
