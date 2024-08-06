import type { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

export interface TasksState {
  tasks: any[];
}

const initialState: TasksState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  initialState,
  name: "tasks",
  reducers: {
    addTask: (state, action: PayloadAction<any>) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    setTasks: (state, action: PayloadAction<any[]>) => {
      state.tasks = action.payload;
    },
  },
});

export const { addTask, removeTask, setTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
