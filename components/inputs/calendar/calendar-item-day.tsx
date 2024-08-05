import {
  Calendar,
  useOptimizedDayMetadata,
  CalendarItemDayWithContainerProps,
} from "@marceloterreiro/flash-calendar";

export const CalendarItemDayWithContainer = ({
  children,
  containerTheme,
  dayHeight,
  daySpacing,
  metadata: baseMetadata,
  onPress,
  theme,
}: CalendarItemDayWithContainerProps) => {
  const metadata = useOptimizedDayMetadata(baseMetadata);

  return (
    <Calendar.Item.Day.Container
      dayHeight={dayHeight}
      daySpacing={daySpacing}
      isStartOfWeek={metadata.isStartOfWeek}
      shouldShowActiveDayFiller={
        metadata.isRangeValid && !metadata.isEndOfWeek
          ? !metadata.isEndOfRange
          : false
      }
      theme={containerTheme}
    >
      <Calendar.Item.Day
        height={dayHeight}
        metadata={metadata}
        onPress={onPress}
        theme={theme}
      >
        {children}
      </Calendar.Item.Day>
    </Calendar.Item.Day.Container>
  );
};
