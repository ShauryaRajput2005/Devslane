import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    tasks: [],
    done: []
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    markDone: (state, action) => {
      const task = state.tasks[action.payload];
      if (task) {
        state.tasks.splice(action.payload, 1);
        state.done.push(task);
      }
    },
    markUndone: (state, action) => {
      const task = state.done[action.payload];
      if (task) {
        state.done.splice(action.payload, 1);
        state.tasks.push(task);
      }
    },
    refresh: (state) => {
      state.tasks = [];
      state.done = [];
    }
  }
});

export const { addTask, markDone, markUndone, refresh } = todoSlice.actions;
export default todoSlice.reducer;
