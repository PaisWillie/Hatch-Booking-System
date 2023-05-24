import { useState } from 'react';

import NextImage from '@/components/NextImage';

import BookingDateSelect from '@/pages/booking/BookingDateSelect';
import BookingDurationSelect from '@/pages/booking/BookingDurationSelect';
import BookingHistory from '@/pages/booking/BookingHistory';
import BookingLogin from '@/pages/booking/BookingLogin';
import BookingSchedule from '@/pages/booking/BookingSchedule';
import BookingTimeSelect from '@/pages/booking/BookingTimeSelect';

export type ViewOptions =
  | 'login'
  | 'schedule'
  | 'date'
  | 'time'
  | 'duration'
  | 'history';

const Booking = () => {
  const [view, setView] = useState<ViewOptions>('schedule');

  const [date, setDate] = useState<Date>(new Date());
  const [duration, setDuration] = useState<number>(0);
  const [startTime, setStartTime] = useState<string>('Not Set');

  const onClose = () => {
    setView('schedule');
  };

  const onDateConfirm = (date: Date) => {
    setDate(date);
    setView('schedule');
  };

  const onDurationSelect = (duration: number) => {
    setDuration(duration);
    setView('schedule');
  };

  const onTimeSelect = (startTime: string) => {
    setStartTime(startTime);
    setView('schedule');
  };

  return (
    <div className='flex h-screen w-screen flex-row items-center justify-center p-4'>
      <NextImage
        width={647 * 1.5}
        height={360 * 1.5}
        alt='Hatch Floor Plan'
        src='/images/example-floor-plan.png'
        className='invisible fixed opacity-50 md:visible'
      />
      {view === 'login' ? <BookingLogin /> : null}
      {view === 'schedule' ? (
        <BookingSchedule
          date={date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
          startTime={startTime}
          duration={duration}
          onViewSelect={setView}
        />
      ) : null}
      {view === 'date' ? (
        <BookingDateSelect
          currentDate={date}
          onConfirm={onDateConfirm}
          onCancel={onClose}
        />
      ) : null}
      {view === 'time' ? (
        <BookingTimeSelect onTimeSelect={onTimeSelect} onClose={onClose} />
      ) : null}
      {view === 'duration' ? (
        <BookingDurationSelect
          onDurationSelect={onDurationSelect}
          onClose={onClose}
        />
      ) : null}
      {view === 'history' ? <BookingHistory onClose={onClose} /> : null}
    </div>
  );
};

export default Booking;
