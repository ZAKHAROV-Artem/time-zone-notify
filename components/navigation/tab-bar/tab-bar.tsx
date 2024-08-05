import React, { useState } from "react";
import { View, Pressable, LayoutChangeEvent } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Animated, {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

import { cn } from "~/lib/utils";

import TabBarItemIcon from "./tab-bar-item-icon";

export default function TabBar({
  descriptors,
  navigation,
  state,
}: BottomTabBarProps) {
  const x = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: x.value }],
  }));

  const [dimensions, setDimensions] = useState({
    height: 65.9047622680664,
    width: 124.95237731933594,
  });

  const gapBetweenButtons = 8;
  const buttonWidth =
    (dimensions.width - gapBetweenButtons * (state.routes.length - 1)) /
    state.routes.length;

  const onTabBarLayout = (e: LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  return (
    <View className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white p-2">
      <View
        className="flex-row items-center justify-between gap-2"
        onLayout={onTabBarLayout}
      >
        <Animated.View
          style={[
            animatedStyle,
            { height: dimensions.height, width: buttonWidth },
          ]}
          className="absolute rounded-full p-[2px]"
        >
          <View className="h-full w-full rounded-full bg-lavender-whisper" />
        </Animated.View>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            x.value = withSpring(
              index * buttonWidth + gapBetweenButtons * index,
              {
                duration: 1500,
              },
            );
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
              target: route.key,
              type: "tabLongPress",
            });
          };

          return (
            <Pressable
              className={cn(
                "flex items-center justify-center rounded-full p-4",
              )}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              accessibilityRole="button"
              onLongPress={onLongPress}
              onPress={onPress}
              key={route.name}
            >
              <TabBarItemIcon isFocused={isFocused} name={route.name} />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
