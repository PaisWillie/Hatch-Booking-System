import { IconType } from 'react-icons';

type BookingFieldProps = {
  label: string;
  value: string;
  icon: IconType;
  onClick?: () => void;
};

const BookingField = ({
  label,
  value,
  icon: Icon,
  onClick,
}: BookingFieldProps) => {
  return (
    <div
      className='cursor-pointer rounded-lg border-2 py-4 hover:border-red-500'
      onClick={onClick}
    >
      <div className='flex flex-row'>
        <div className='pt-1'>
          <Icon className='mx-4 text-2xl' />
        </div>
        <div className='flex flex-col'>
          <div className='text-sm text-gray-500'>{label}</div>
          <div className='text-md font-bold'>{value}</div>
        </div>
      </div>
    </div>
  );
};

export default BookingField;
