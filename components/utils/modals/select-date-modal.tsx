import { Pressable } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

import { Modals } from "~/types/modals";
import { useModal } from "~/hooks/use-modal";
import { Calendar } from "~/components/inputs/calendar";
import { linearTheme } from "~/components/inputs/calendar/linear-theme";

import StopPropagationView from "../stop-propagation-view";

type SelectDateModalProps = {
  value: string;
  setValue: (value: string) => void;
};

export default function SelectDateModal({
  setValue,
  value,
}: SelectDateModalProps) {
  const { handleClose, isVisible } = useModal(Modals.SelectDateModal);
  if (!isVisible) {
    return null;
  }
  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      className="absolute h-full w-full"
    >
      <Pressable
        onPress={handleClose}
        className="flex h-full w-full items-center justify-center bg-black/20 p-5"
      >
        <StopPropagationView className="w-full overflow-hidden rounded-3xl bg-white p-2">
          <Calendar
            calendarActiveDateRanges={[
              {
                endId: value,
                startId: value,
              },
            ]}
            theme={linearTheme}
            calendarMonthId={value}
            onCalendarDayPress={(dateId) => setValue(dateId)}
          />
        </StopPropagationView>
      </Pressable>
    </Animated.View>
  );
}
