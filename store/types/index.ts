import rootReducer from "../reducers";
import { store } from "..";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
