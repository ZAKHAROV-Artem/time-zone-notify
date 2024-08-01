import { Stack } from "expo-router";

import "../global.css";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ navigationBarHidden: true }}>
      <Stack.Screen options={{ headerShown: false }} name="(tabs)" />
    </Stack>
  );
}
