import { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { PersistGate } from "redux-persist/integration/react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

import { store, persistor } from "~/store";

import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
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
          <StatusBar hidden={true} translucent />
          <Stack
            screenOptions={{ headerShown: false, navigationBarHidden: true }}
          >
            <Stack.Screen name="(tabs)" />
            <Stack.Screen options={{ animation: "fade" }} name="add-task" />
          </Stack>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}
