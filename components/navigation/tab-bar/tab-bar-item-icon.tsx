import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import React from "react";

import { Calendar, BellDot, Home } from "~/components/data-display/icons";

type Props = {
  isFocused: boolean;
  name: string;
};

export default function TabBarItemIcon({ isFocused, name }: Props) {
  const iconStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withSpring(isFocused ? 1.2 : 1),
      },
    ],
    opacity: withTiming(isFocused ? 1 : 0.5),
  }));

  function Icon() {
    switch (name) {
      case "remainders":
        return <BellDot className="h-4 w-4 text-royal-violet" />;
      case "calendar":
        return <Calendar className="h-4 w-4 text-royal-violet" />;
      case "index":
        return <Home className="h-4 w-4 text-royal-violet" />;
      default:
        return null;
    }
  }

  return (
    <Animated.View style={iconStyle}>
      <Icon />
    </Animated.View>
  );
}
