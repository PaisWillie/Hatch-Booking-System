import { ListItem } from '@mui/material';
import { ListChildComponentProps } from 'react-window';

import BookingCard from '@/components/booking/BookingCard';
import BookingHistoryItem from '@/components/booking/BookingHistoryItem';
import BookingScrollableList from '@/components/booking/BookingScrollableList';
import UnderlineLink from '@/components/links/UnderlineLink';

const items: {
  date: Date;
  duration: number;
  room: string;
  startTime: string;
  upcoming: boolean;
}[] = [
  {
    date: new Date(),
    duration: 2.5,
    room: 'H204A',
    startTime: '07:00 PM',
    upcoming: true,
  },
  {
    date: new Date(),
    duration: 1,
    room: 'H204B',
    startTime: '12:30 PM',
    upcoming: false,
  },
  {
    date: new Date(),
    duration: 1,
    room: 'H204B',
    startTime: '12:30 PM',
    upcoming: false,
  },
  {
    date: new Date(),
    duration: 1,
    room: 'H204B',
    startTime: '12:30 PM',
    upcoming: false,
  },
  {
    date: new Date(),
    duration: 1,
    room: 'H204B',
    startTime: '12:30 PM',
    upcoming: false,
  },
  {
    date: new Date(),
    duration: 1,
    room: 'H204B',
    startTime: '12:30 PM',
    upcoming: false,
  },
];

const renderRow = (props: ListChildComponentProps) => {
  const { index, style } = props;

  const item = items[index];

  return (
    <ListItem style={style} key={index} component='div' disablePadding>
      <BookingHistoryItem
        date={item.date}
        duration={item.duration}
        room={item.room}
        startTime={item.startTime}
        upcoming={item.upcoming}
      />
    </ListItem>
  );
};

type BookingHistoryProps = {
  onClose: () => void;
};

const BookingHistory = ({ onClose }: BookingHistoryProps) => {
  return (
    <BookingCard
      heading='Your bookings'
      headerRightButton='close'
      onHeaderRightButtonClick={onClose}
    >
      {items.length > 0 ? (
        <BookingScrollableList
          itemCount={items.length}
          itemSize={85}
          renderRow={renderRow}
        />
      ) : (
        <div>
          <div className='px-16 py-6 text-center'>
            <p className='text-gray-700'>No bookings found.</p>
            <UnderlineLink
              href=''
              onClick={onClose}
              className='text-primary-500 mt-1'
            >
              Book a room now!
            </UnderlineLink>
          </div>
        </div>
      )}
    </BookingCard>
  );
};

export default BookingHistory;
