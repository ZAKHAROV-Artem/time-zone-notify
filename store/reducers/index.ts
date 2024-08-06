import { combineReducers } from "@reduxjs/toolkit";

import tasksSlice from "../slices/tasks";

const rootReducer = combineReducers({
  tasks: tasksSlice,
});

export default rootReducer;
