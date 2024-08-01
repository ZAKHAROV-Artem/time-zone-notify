import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Pressable, View } from "react-native";

import { cn } from "~/lib/utils";

import TabBarItemIcon from "./tab-bar-item-icon";

export default function TabBar({
  descriptors,
  navigation,
  state,
}: BottomTabBarProps) {
  return (
    <View className="absolute bottom-4 left-1/2 -translate-x-1/2 flex-row justify-between gap-2 rounded-full bg-white p-2">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            canPreventDefault: true,
            target: route.key,
            type: "tabPress",
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Pressable
            className={cn("flex items-center justify-center rounded-full p-4", {
              "bg-lavender-whisper": isFocused,
            })}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            accessibilityRole="button"
            onLongPress={onLongPress}
            onPress={onPress}
            key={route.name}
          >
            <TabBarItemIcon name={route.name} />
          </Pressable>
        );
      })}
    </View>
  );
}
