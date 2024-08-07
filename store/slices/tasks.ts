import type { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

interface Task {
  id: string;
  name: string;
  description: string;
  dueDate: string;
}

export interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  initialState,
  name: "tasks",
  reducers: {
    createTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },
    removeTask(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    setTasks(state, action: PayloadAction<any[]>) {
      state.tasks = action.payload;
    },
  },
});

export const { createTask, removeTask, setTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
