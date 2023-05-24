import BookingCalendarDays from '@/components/booking/calendar/BookingCalendarDays';

const weekdays: string[] = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
export const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export type Day = {
  currentMonth: boolean;
  date: Date;
  month: number;
  number: number;
  selected: boolean;
  year: number;
};

type BookingCalendarProps = {
  currentDate: Date;
  onChangeDate: (day: Date) => void;
  updateCurrentMonth: (month: string) => void;
};

const BookingCalendar = ({
  currentDate,
  onChangeDate,
}: BookingCalendarProps) => {
  return (
    <div id='booking-calendar' className='flex w-fit flex-col items-center'>
      <div
        id='weekdays'
        className='mb-2 flex w-full flex-row justify-around gap-2'
      >
        {weekdays.map((weekday: string) => (
          <div key={weekday} className='w-8 text-center'>
            {weekday}
          </div>
        ))}
      </div>
      <BookingCalendarDays
        selectedDate={currentDate}
        changeCurrentDate={onChangeDate}
      />
    </div>
  );
};

export default BookingCalendar;
