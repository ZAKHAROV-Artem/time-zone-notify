import { Dayjs } from "dayjs";
import { View, Pressable } from "react-native";

import { cn } from "~/lib/utils";
import { Text } from "~/components/ui/text";

import { DateItem } from "./types";

type SwiperCalendarWeekItemProps = {
  item: DateItem;
  setSelectedDate: (date: Dayjs) => void;
  selectedDate?: Dayjs;
};
export default function SwiperCalendarWeekItem({
  item,
  selectedDate,
  setSelectedDate,
}: SwiperCalendarWeekItemProps) {
  const isActive = selectedDate?.isSame(item.date, "day");
  return (
    <Pressable
      key={item.date.toString()}
      className="grow"
      onPress={() => setSelectedDate(item.date)}
    >
      <View
        className={cn(
          "flex items-center justify-center gap-3 rounded-3xl py-3",
          { "bg-lavender-whisper": isActive },
        )}
      >
        <Text
          className={cn("font-bold text-black", {
            "text-deep-iris": isActive,
          })}
        >
          {item.weekday}
        </Text>
        <Text
          className={cn("text-black", {
            "text-deep-iris": isActive,
          })}
        >
          {item.date.date()}
        </Text>
      </View>
    </Pressable>
  );
}
