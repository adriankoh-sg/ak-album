import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import globalSlice from './globalSlice';
import homePageSlice from './homePageSlice';
import albumSlice from './albumDetailSlice';

export const store = configureStore({
  reducer: {
    globalSlice,
    homePageSlice,
    albumSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
