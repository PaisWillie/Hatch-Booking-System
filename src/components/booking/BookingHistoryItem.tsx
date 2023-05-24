import { FiClock } from 'react-icons/fi';
import { IoHourglassOutline } from 'react-icons/io5';
import { MdLocationPin } from 'react-icons/md';
import { MdClose } from 'react-icons/md';

import { parseHourLabel } from '@/lib/booking';

import IconButton from '@/components/buttons/IconButton';

type BookingHistoryItemProps = {
  date: Date;
  startTime: string;
  duration: number;
  room: string;
  upcoming?: boolean;
};

const BookingHistoryItem = ({
  date,
  startTime,
  duration,
  room,
  upcoming = false,
}: BookingHistoryItemProps) => {
  const bookingDetails = [
    {
      icon: <MdLocationPin />,
      label: room,
    },
    {
      icon: <FiClock />,
      label: startTime,
    },
    {
      icon: <IoHourglassOutline />,
      label: parseHourLabel(duration, true),
    },
  ];

  return (
    <div
      className={`w-full min-w-max rounded-lg border-2 ${
        upcoming ? 'border-primary-500' : ''
      }`}
    >
      <div className='flex flex-row items-center space-x-4'>
        <div className='flex w-full flex-row justify-between p-4'>
          <div id='history-details' className='flex flex-col'>
            <div id='history-sub-details' className='flex flex-row space-x-2'>
              {bookingDetails.map((detail, index) => {
                return (
                  <div
                    key={index}
                    className={`flex flex-row items-center space-x-0.5 text-xs ${
                      upcoming ? 'text-gray-700' : 'text-gray-500'
                    }`}
                  >
                    <div>{detail.icon}</div>
                    <div>{detail.label}</div>
                  </div>
                );
              })}
            </div>
            <div
              id='history-date'
              className={`font-bold ${
                upcoming ? 'text-black' : 'text-gray-700'
              }`}
            >
              {date.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </div>
          <div className='flex'>
            <IconButton
              variant='ghost'
              icon={MdClose}
              className={`text-xl ${!upcoming ? 'invisible' : ''}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingHistoryItem;
