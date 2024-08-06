import dayjs, { Dayjs } from "dayjs";
import Swiper from "react-native-swiper";
import { useRef, useMemo, useState } from "react";

import { DateItem } from "./types";
import SwiperCalendarWeek from "./swiper-calendar-week";

type SwiperCalendarProps = {
  selectedDate: Dayjs;
  setSelectedDate: (date: Dayjs) => void;
};
export default function SwiperCalendar({
  selectedDate,
  setSelectedDate,
}: SwiperCalendarProps) {
  const swiper = useRef<any>();
  const [week, setWeek] = useState(0);

  const weeks: DateItem[][] = useMemo(() => {
    const start = dayjs().startOf("week");
    return [0, 1, 2].map((adj) => {
      return Array.from({ length: 7 }).map((_, index) => {
        const date = dayjs(start).add(adj, "week").add(index, "day");
        return {
          date,
          weekday: date.format("dd"),
        };
      });
    });
  }, []);
  return (
    <Swiper
      ref={swiper}
      loop={false}
      showsPagination={false}
      onIndexChanged={(ind) => {
        const moved = ind - week;
        setWeek(week + moved);
      }}
    >
      {weeks.map((dates, index) => (
        <SwiperCalendarWeek
          key={index}
          dates={dates}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      ))}
    </Swiper>
  );
}
