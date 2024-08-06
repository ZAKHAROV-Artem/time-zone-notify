import { Dayjs } from "dayjs";
import { View } from "react-native";

import { DateItem } from "./types";
import SwiperCalendarWeekItem from "./swiper-calendar-week-item";

type CalendarSwiperWeekProps = {
  dates: DateItem[];
  selectedDate: Dayjs;
  setSelectedDate: (date: Dayjs) => void;
};
export default function SwiperCalendarWeek({
  dates,
  selectedDate,
  setSelectedDate,
}: CalendarSwiperWeekProps) {
  return (
    <View className="flex-1 flex-row px-2">
      {dates.map((item) => (
        <SwiperCalendarWeekItem
          key={item.date.toString()}
          item={item}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      ))}
    </View>
  );
}
