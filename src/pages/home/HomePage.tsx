import React, { useState } from 'react';
import { useMount } from 'react-use';
import { getTopArtists } from '@store/homePage/homePageSlice';
import { useAppDispatch, useAppSelector } from '@store/store';
import { ShowToast, Spinner } from '@components/index';
import type { TError } from '@store/stateDataTypes';

export const HomePage = () => {
  const {
    data: { isLoading, artists },
  } = useAppSelector((state) => state.homePageSlice);
  const dispatch = useAppDispatch();
  const [onError, setOnError] = useState<TError>({ status: false, msg: '' });
  const apiKey = process.env.API_KEY ?? '';

  const loadTopArtists = async () => {
    try {
      await dispatch(getTopArtists({ apiKey })).unwrap();
      console.log({ artists });
    } catch (error) {
      setOnError({ status: true, msg: error.message as string });
    }
  };

  useMount(() => loadTopArtists());

  return (
    <div className="container">
      {isLoading ? <Spinner /> : <h1>Welcome! Its a SUCCESS</h1>}
      {onError.status && <ShowToast title="API Error" msg={onError.msg} />}
    </div>
  );
};
