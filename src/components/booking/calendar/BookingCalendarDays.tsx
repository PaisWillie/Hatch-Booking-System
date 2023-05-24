import { Day } from '@/components/booking/calendar/BookingCalendar';

type BookingCalendarDaysProps = {
  selectedDate: Date;
  changeCurrentDate: (day: Date) => void;
};

const BookingCalendarDays = ({
  selectedDate,
  changeCurrentDate,
}: BookingCalendarDaysProps) => {
  const currentDate = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    1
  );
  const currentWeekday = currentDate.getDay();
  const currentDays: Day[] = [];

  for (let week = 0; week < 6; week++) {
    for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
      const day = week * 7 + dayOfWeek;

      if (day === 0 && currentWeekday === 0) {
        // If the first day of the month is a Sunday, we need to go back 7 days
        currentDate.setDate(currentDate.getDate() - 7);
      } else if (day === 0) {
        // Otherwise, we need to go back to the previous month
        currentDate.setDate(currentDate.getDate() - currentWeekday);
      } else {
        // Otherwise, we need to go forward one day
        currentDate.setDate(currentDate.getDate() + 1);
      }

      const calendarDay: Day = {
        currentMonth: currentDate.getMonth() === selectedDate.getMonth(),
        date: new Date(currentDate),
        month: currentDate.getMonth(), // TODO: Fix this
        number: currentDate.getDate(),
        selected: currentDate.toDateString() === selectedDate.toDateString(),
        year: currentDate.getFullYear(),
      };

      currentDays.push(calendarDay);
    }
  }

  return (
    <div
      id='booking-calendar-days'
      className='grid w-fit grid-cols-7 justify-center gap-2'
    >
      {currentDays.map((day: Day) => (
        <div
          key={day.date.toDateString()}
          className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl ${
            day.date.toDateString() === selectedDate.toDateString()
              ? 'bg-red-500 text-white'
              : ''
          } ${
            day.date.getMonth() === selectedDate.getMonth()
              ? 'text-black'
              : 'text-gray-400'
          }`}
          onClick={() => changeCurrentDate(day.date)}
        >
          {day.number}
        </div>
      ))}
    </div>
  );
};

export default BookingCalendarDays;
