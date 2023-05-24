import { useState } from 'react';

import BookingCard from '@/components/booking/BookingCard';
import BookingCalendar, {
  months,
} from '@/components/booking/calendar/BookingCalendar';
import Button from '@/components/buttons/Button';

type BookingDateSelectProps = {
  currentDate: Date;
  onConfirm: (date: Date) => void;
  onCancel: () => void;
};

const BookingDateSelect = ({
  currentDate,
  onConfirm,
  onCancel,
}: BookingDateSelectProps) => {
  const [monthView, setMonthView] = useState<string>(
    months[currentDate.getMonth()]
  );

  const [yearView, setYearView] = useState<number>(currentDate.getFullYear());

  const [tempDate, setTempDate] = useState<Date>(currentDate);

  const onChangeDate = (date: Date) => {
    setTempDate(date);
    setMonthView(months[date.getMonth()]);
    setYearView(date.getFullYear());
  };

  const onPreviousMonth = () => {
    setMonthView(months[(tempDate.getMonth() - 1 + 12) % 12]);
    if (tempDate.getMonth() === 0) {
      setYearView(tempDate.getFullYear() - 1);
    }
    setTempDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const onNextMonth = () => {
    setMonthView(months[(tempDate.getMonth() + 1) % 12]);
    if (tempDate.getMonth() === 11) {
      setYearView(tempDate.getFullYear() + 1);
    }
    setTempDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  return (
    <BookingCard
      heading={
        <div className='flex flex-col items-center justify-center'>
          <div className='text-lg font-bold'>{monthView}</div>
          <div className='text-sm text-gray-600'>{yearView}</div>
        </div>
      }
      headerLeftButton='previous'
      headerRightButton='next'
      onHeaderLeftButtonClick={() => {
        onPreviousMonth();
      }}
      onHeaderRightButtonClick={() => {
        onNextMonth();
      }}
    >
      <BookingCalendar
        currentDate={tempDate}
        onChangeDate={onChangeDate}
        updateCurrentMonth={setMonthView}
      />
      <hr className='my-6 h-0.5 border-t-0 bg-neutral-100 opacity-100' />
      <div className='mt-8 flex justify-between'>
        <Button
          variant='ghost'
          size='base'
          className='
          rounded-lg
          px-6
          py-3
          '
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          variant='primary'
          size='base'
          className='
          rounded-lg
          px-6
          py-3
          '
          onClick={() => {
            onConfirm(tempDate);
          }}
        >
          Confirm
        </Button>
      </div>
    </BookingCard>
  );
};

export default BookingDateSelect;
