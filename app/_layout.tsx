import { SafeAreaProvider } from "react-native-safe-area-context";
import { PersistGate } from "redux-persist/integration/react";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { Stack } from "expo-router";

import { persistor, store } from "~/store";

import "../global.css";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <StatusBar backgroundColor="#f2f5ff" style="dark" />
          <Stack screenOptions={{ navigationBarHidden: true }}>
            <Stack.Screen options={{ headerShown: false }} name="(tabs)" />
          </Stack>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}
