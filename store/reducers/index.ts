import { combineReducers } from "@reduxjs/toolkit";

import tasksSlice from "../slices/tasks";
import modalsSlice from "../slices/modals";

const rootReducer = combineReducers({
  modals: modalsSlice,
  tasks: tasksSlice,
});

export default rootReducer;
