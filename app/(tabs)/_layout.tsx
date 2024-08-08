import { Tabs } from "expo-router";

import { TabBar } from "~/components/navigation/tab-bar";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        options={{
          title: "Home",
        }}
        name="index"
      />
      <Tabs.Screen
        options={{
          title: "Calendar",
        }}
        name="calendar"
      />
      <Tabs.Screen
        options={{
          title: "Tasks",
        }}
        name="tasks"
      />
      <Tabs.Screen
        options={{
          title: "Remainders",
        }}
        name="remainders"
      />
      <Tabs.Screen
        options={{
          title: "Settings",
        }}
        name="settings"
      />
    </Tabs>
  );
}
