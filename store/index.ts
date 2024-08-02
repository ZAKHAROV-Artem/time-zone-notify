import {
  persistReducer,
  persistStore,
  REHYDRATE,
  REGISTER,
  PERSIST,
  FLUSH,
  PAUSE,
  PURGE,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers";

const persistConfig = {
  storage: AsyncStorage,
  key: "root",
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
