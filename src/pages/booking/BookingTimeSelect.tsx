import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { ListChildComponentProps } from 'react-window';

import BookingCard from '@/components/booking/BookingCard';
import BookingScrollableList from '@/components/booking/BookingScrollableList';

const startHour = 5;
const numHours = 17;

const parseLabel = (hour: number, minute: string) => {
  let timePeriod = 'AM';

  if (hour > 12) {
    timePeriod = 'PM';
    hour -= 12;
  }

  if (hour < 10) {
    return `0${hour}:${minute} ${timePeriod}`;
  }
  return `${hour}:${minute} ${timePeriod}`;
};

type BookingTimeSelectProps = {
  onTimeSelect: (time: string) => void;
  onClose: () => void;
};

const BookingTimeSelect = ({
  onTimeSelect,
  onClose,
}: BookingTimeSelectProps) => {
  const renderRow = (props: ListChildComponentProps) => {
    const { index, style } = props;

    const hour = startHour + Math.floor(index / 2);
    const minute = index % 2 === 0 ? '00' : '30';

    const label = parseLabel(hour, minute);

    return (
      <ListItem style={style} key={index} component='div' disablePadding>
        <ListItemButton
          sx={{
            borderRadius: '0.375rem',
          }}
          onClick={() => {
            onTimeSelect(label);
          }}
        >
          <ListItemText primary={label} />
        </ListItemButton>
      </ListItem>
    );
  };

  return (
    <BookingCard
      heading='Select a time'
      headerRightButton='close'
      onHeaderRightButtonClick={onClose}
    >
      <BookingScrollableList itemCount={numHours * 2} renderRow={renderRow} />
    </BookingCard>
  );
};

export default BookingTimeSelect;
