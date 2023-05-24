import { Dispatch, SetStateAction } from 'react';
import { FiCalendar, FiCheckCircle, FiClock } from 'react-icons/fi';
import { IoHourglassOutline } from 'react-icons/io5';
import { MdOutlineHistory } from 'react-icons/md';

import { parseHourLabel } from '@/lib/booking';

import BookingCard from '@/components/booking/BookingCard';
import BookingField from '@/components/booking/BookingField';
import Button from '@/components/buttons/Button';

import { ViewOptions } from '@/pages/bookings';

type BookingScheduleProps = {
  date: string;
  startTime: string;
  duration: number;
  onViewSelect: Dispatch<SetStateAction<ViewOptions>>;
};

const BookingSchedule = ({
  date,
  startTime,
  duration,
  onViewSelect,
}: BookingScheduleProps) => {
  return (
    <BookingCard
      heading={
        <div className='flex flex-row'>
          <div className='mr-4 h-7 w-3.5 rounded-sm bg-red-300' />
          <div className='text-xl font-bold'>Book a Hatch room</div>
        </div>
      }
      headerRightButton='close'
    >
      <div className='w-80 text-gray-500'>
        Choose a day, time and duration in the future you want your booking to
        be.
      </div>
      <div className='mt-8 space-y-4'>
        <BookingField
          label='Date'
          value={date}
          icon={FiCalendar}
          onClick={() => {
            onViewSelect('date');
          }}
        />
        <BookingField
          label='Start time'
          value={startTime}
          icon={FiClock}
          onClick={() => {
            onViewSelect('time');
          }}
        />
        <BookingField
          label='Duration'
          value={parseHourLabel(duration)}
          icon={IoHourglassOutline}
          onClick={() => {
            onViewSelect('duration');
          }}
        />
      </div>
      <Button
        variant='primary'
        size='base'
        className='
          mt-4
          w-full
          justify-center
          rounded-lg
          px-6
          py-3
          '
      >
        Find Hatch grooms
      </Button>
      <hr className='my-6 h-0.5 border-t-0 bg-neutral-100 opacity-100' />
      <div className='flex flex-row justify-between'>
        <Button variant='outline' size='sm' className='justify-center'>
          <div className='flex flex-row items-center p-1'>
            <FiCheckCircle className='mr-1.5' />
            Room availability
          </div>
        </Button>
        <Button
          variant='outline'
          size='sm'
          className='justify-center'
          onClick={() => {
            onViewSelect('history');
          }}
        >
          <div className='just flex flex-row items-center p-1'>
            <MdOutlineHistory className='mr-1.5 text-lg' />
            Your bookings
          </div>
        </Button>
      </div>
    </BookingCard>
  );
};

export default BookingSchedule;
