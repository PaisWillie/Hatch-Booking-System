import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';

import IconButton from '@/components/buttons/IconButton';

type BookingCardProps = {
  headerLeftButton?: 'previous';
  headerRightButton?: 'next' | 'close';
  onHeaderLeftButtonClick?: () => void;
  onHeaderRightButtonClick?: () => void;
  heading: string | React.ReactNode;
  children: React.ReactNode;
};

const BookingCard = ({
  headerLeftButton,
  headerRightButton,
  onHeaderLeftButtonClick,
  onHeaderRightButtonClick,
  heading,
  children,
}: BookingCardProps) => {
  return (
    <div
      id='card'
      className='h-fit w-fit rounded-xl bg-white p-6 drop-shadow-2xl'
    >
      <div
        id='card-header'
        className='flex flex-row items-center justify-between'
      >
        {headerLeftButton === 'previous' ? (
          <IconButton
            id='header-left-icon'
            variant='ghost'
            onClick={onHeaderLeftButtonClick}
            className='rounded-full border border-gray-300 text-lg text-gray-600'
            icon={FiChevronLeft}
          />
        ) : null}
        <div
          id='card-heading'
          className={`${
            typeof heading === 'string' ? 'text-xl font-bold' : ''
          }`}
        >
          {heading}
        </div>
        {headerRightButton === 'next' ? (
          <IconButton
            id='header-right-icon'
            variant='ghost'
            onClick={onHeaderRightButtonClick}
            className='rounded-full bg-gray-100 text-lg text-black hover:bg-gray-200'
            icon={FiChevronRight}
          />
        ) : null}
        {headerRightButton === 'close' ? (
          <IconButton
            id='header-right-icon'
            variant='ghost'
            onClick={onHeaderRightButtonClick}
            className='rounded-full bg-gray-100 text-lg text-black hover:bg-gray-200'
            icon={FiX}
          />
        ) : null}
      </div>
      <hr className='my-6 h-0.5 border-t-0 bg-neutral-100 opacity-100' />
      {children}
    </div>
  );
};

export default BookingCard;
