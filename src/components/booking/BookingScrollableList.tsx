import Box from '@mui/material/Box';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

type BookingScrollableListProps = {
  itemCount: number;
  itemSize?: number;
  width?: number;
  renderRow: (props: ListChildComponentProps) => JSX.Element;
};

const BookingScrollableList = ({
  itemCount,
  itemSize = 46,
  width = 310,
  renderRow,
}: BookingScrollableListProps) => {
  const height: number = itemCount <= 6 ? itemSize * itemCount + 1 : 400;

  return (
    <Box
      sx={{
        width: '100%',
        height: height,
        maxWidth: width,
        bgcolor: 'background.paper',
      }}
    >
      <FixedSizeList
        height={height}
        width={width}
        itemSize={itemSize}
        itemCount={itemCount}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
};

export default BookingScrollableList;
