import { ReactNode } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type SafeAreaProps = {
  children: ReactNode;
  paddings?: Partial<{
    top: number;
    bottom: number;
    left: number;
    right: number;
  }>;
};
export default function SafeArea({ children, paddings }: SafeAreaProps) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        backgroundColor: "#f2f5ff",
        flex: 1,
        paddingBottom: paddings?.bottom ?? insets.bottom,
        paddingLeft: paddings?.left ?? insets.left,
        paddingRight: paddings?.right ?? insets.right,
        paddingTop: paddings?.top ?? insets.top,
      }}
    >
      {children}
    </View>
  );
}
