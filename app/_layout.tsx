import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { Stack } from "expo-router";

import { persistor, store } from "~/store";

import "../global.css";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Stack screenOptions={{ navigationBarHidden: true }}>
          <Stack.Screen options={{ headerShown: false }} name="(tabs)" />
        </Stack>
      </PersistGate>
    </Provider>
  );
}
