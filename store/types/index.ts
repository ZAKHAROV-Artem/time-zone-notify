import { store } from "..";
import rootReducer from "../reducers";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
