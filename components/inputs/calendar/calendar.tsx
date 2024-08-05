import type { CalendarProps } from "@marceloterreiro/flash-calendar";

import { Text } from "react-native";
import { memo, useEffect } from "react";
import {
  useCalendar,
  activeDateRangesEmitter,
  Calendar as FlashCalendar,
} from "@marceloterreiro/flash-calendar";

import { CalendarItemDayWithContainer } from "./calendar-item-day";

const BaseCalendar = memo(
  ({
    calendarDayHeight = 48,
    calendarMonthHeaderHeight = 50,
    calendarRowHorizontalSpacing = 8,
    calendarRowVerticalSpacing = 8,
    calendarWeekHeaderHeight = calendarDayHeight,
    onCalendarDayPress,
    theme,
    ...buildCalendarParams
  }: CalendarProps) => {
    const { calendarRowMonth, weekDaysList, weeksList } =
      useCalendar(buildCalendarParams);

    return (
      <FlashCalendar.VStack
        alignItems="center"
        spacing={calendarRowVerticalSpacing}
      >
        <FlashCalendar.Row.Month height={calendarMonthHeaderHeight}>
          <Text className="text-xl font-bold text-midnight-blue">
            {calendarRowMonth}
          </Text>
        </FlashCalendar.Row.Month>
        <FlashCalendar.Row.Week spacing={8} theme={theme?.rowWeek}>
          {weekDaysList.map((weekDay, i) => (
            <FlashCalendar.Item.WeekName
              height={calendarWeekHeaderHeight}
              key={i}
              theme={theme?.itemWeekName}
            >
              {weekDay}
            </FlashCalendar.Item.WeekName>
          ))}
        </FlashCalendar.Row.Week>
        {weeksList.map((week, index) => (
          <FlashCalendar.Row.Week key={index}>
            {week.map((dayProps) => {
              if (dayProps.isDifferentMonth) {
                return (
                  <FlashCalendar.Item.Day.Container
                    dayHeight={calendarDayHeight}
                    daySpacing={calendarRowHorizontalSpacing}
                    isStartOfWeek={dayProps.isStartOfWeek}
                    key={dayProps.id}
                    theme={theme?.itemDayContainer}
                  >
                    <FlashCalendar.Item.Empty
                      height={calendarDayHeight}
                      theme={theme?.itemEmpty}
                    />
                  </FlashCalendar.Item.Day.Container>
                );
              }

              return (
                <CalendarItemDayWithContainer
                  containerTheme={theme?.itemDayContainer}
                  dayHeight={calendarDayHeight}
                  daySpacing={calendarRowHorizontalSpacing}
                  key={dayProps.id}
                  metadata={dayProps}
                  onPress={onCalendarDayPress}
                  theme={theme?.itemDay}
                >
                  {dayProps.displayLabel}
                </CalendarItemDayWithContainer>
              );
            })}
          </FlashCalendar.Row.Week>
        ))}
      </FlashCalendar.VStack>
    );
  },
);

BaseCalendar.displayName = "BaseCalendar";

export const Calendar = memo(
  ({ calendarActiveDateRanges, ...props }: CalendarProps) => {
    useEffect(() => {
      activeDateRangesEmitter.emit(
        "onSetActiveDateRanges",
        calendarActiveDateRanges ?? [],
      );
    }, [calendarActiveDateRanges]);

    return <BaseCalendar {...props} />;
  },
);
Calendar.displayName = "Calendar";
