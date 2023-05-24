import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

import BookingCard from '@/components/booking/BookingCard';
import Button from '@/components/buttons/Button';

const BookingLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <BookingCard
      heading={
        <div className='flex flex-row'>
          <div className='mr-4 h-7 w-3.5 rounded-sm bg-red-300' />
          <div className='text-xl font-bold'>Log in</div>
        </div>
      }
    >
      {/* <TextField inputProps={{ className: 'border-none focus:ring-0 ' }} /> */}
      <div className='flex flex-col'>
        <FormControl sx={{ width: '25ch' }} variant='outlined'>
          <InputLabel htmlFor='email-field'>Email</InputLabel>
          <OutlinedInput
            required
            id='email-field'
            type='text'
            inputProps={{ className: 'border-none focus:ring-0 ' }}
            label='Email'
          />
        </FormControl>
        <FormControl
          sx={{ marginTop: '1rem', width: '25ch' }}
          variant='outlined'
        >
          <InputLabel htmlFor='outlined-adornment-password'>
            Password
          </InputLabel>
          <OutlinedInput
            required
            id='outlined-adornment-password'
            type={showPassword ? 'text' : 'password'}
            inputProps={{ className: 'border-none focus:ring-0 ' }}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label='Password'
          />
          <div id='forget-password-button' className='mt-2 flex justify-end '>
            <div className='cursor-pointer text-sm text-red-600 hover:text-red-700'>
              Forgot password?
            </div>
          </div>
        </FormControl>
        <div className='mt-4'>
          <Button
            id='login-button'
            variant='primary'
            size='base'
            className='
            w-full
            justify-center
            rounded-lg
            px-6
            py-3
            '
          >
            Log in
          </Button>
          <hr className='my-6 h-0.5 border-t-0 bg-neutral-100 opacity-100' />
          <Button
            id='login-guest-button'
            variant='outline'
            size='sm'
            className='
            w-full
            justify-center
            rounded-lg
            border-gray-300
            px-6
            py-3
            text-gray-500
            hover:bg-gray-50
            active:bg-gray-100
            '
          >
            Log in as guest
          </Button>
          <div className='mt-4 flex justify-center text-sm'>
            Don't have an account?
            <div
              id='register-button'
              className='ml-1 cursor-pointer text-red-600 hover:text-red-700'
            >
              Register
            </div>
          </div>
        </div>
      </div>
    </BookingCard>
  );
};

export default BookingLogin;
