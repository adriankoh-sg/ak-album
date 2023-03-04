import React from 'react';
import { toast } from 'react-toastify';
import { SerializedError } from '@reduxjs/toolkit';
import { TError } from '@store/stateDataTypes';

export const isError = (e: any): boolean => !!(typeof e === 'object' && e.message && typeof e.message === 'string');

export const errorToast = (e: TError) => {
  let displayMsg = '';
  // check msg type
  if (typeof e === 'string' && e) {
    displayMsg = e;
  } else if (isError(e)) {
    // error object
    displayMsg = (e as Error | SerializedError).message ?? '';
  }

  return toast.error(displayMsg);
};
