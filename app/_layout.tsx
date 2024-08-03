import { SafeAreaProvider } from "react-native-safe-area-context";
import { PersistGate } from "redux-persist/integration/react";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect } from "react";

import { persistor, store } from "~/store";

import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Poppins-Regular": require("~/assets/fonts/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

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
