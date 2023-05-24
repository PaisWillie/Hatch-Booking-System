import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { ListChildComponentProps } from 'react-window';

import { parseHourLabel } from '@/lib/booking';

import BookingCard from '@/components/booking/BookingCard';
import BookingScrollableList from '@/components/booking/BookingScrollableList';

const maxDurationHours = 3;

type BookingDurationSelectProps = {
  onDurationSelect: (duration: number) => void;
  onClose: () => void;
};

const BookingDurationSelect = ({
  onDurationSelect,
  onClose,
}: BookingDurationSelectProps) => {
  const renderRow = (props: ListChildComponentProps) => {
    const { index, style } = props;

    const numHours = (index + 1) / 2;

    return (
      <ListItem style={style} key={index} component='div' disablePadding>
        <ListItemButton
          sx={{
            borderRadius: '0.375rem',
          }}
          onClick={() => {
            onDurationSelect(numHours);
          }}
        >
          <ListItemText primary={parseHourLabel(numHours)} />
        </ListItemButton>
      </ListItem>
    );
  };

  return (
    <BookingCard
      heading='Select a duration'
      headerRightButton='close'
      onHeaderRightButtonClick={onClose}
    >
      <BookingScrollableList
        itemCount={maxDurationHours * 2}
        renderRow={renderRow}
      />
    </BookingCard>
  );
};

export default BookingDurationSelect;
