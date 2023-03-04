import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { CONFIG } from '@config/settings';
import type { TAlbumDetails } from '@store/stateDataTypes';

const {
  api: { baseUrl },
} = CONFIG;

const apiKey = process.env.API_KEY || '';

// slice declaration here
const initialState = {
  data: {
    details: {} as TAlbumDetails,
    isLoading: false as boolean,
  },
};

interface IApiProps {
  mbid: string;
}

const albumGetInfo = createAsyncThunk('albumGetInfo', async ({ mbid }: IApiProps) => {
  const params = `?method=album.getinfo&api_key=${apiKey}&mbid=${mbid}&format=json`;
  const url = `${baseUrl}${params}`;

  const response = await axios.get(url);

  return response.data as TAlbumDetails;
});

const albumSlice = createSlice({
  name: 'albumSlice',
  initialState,
  reducers: {
    resetState: (state) => {
      state.data.details = {} as TAlbumDetails;
      state.data.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(albumGetInfo.pending, (state) => {
        console.log('pending');
        state.data.isLoading = true;
      })
      .addCase(albumGetInfo.fulfilled, (state, { payload }) => {
        state.data.isLoading = false;
        console.log({ payload });
        state.data.details = payload;
      })
      .addCase(albumGetInfo.rejected, (state) => {
        console.log('reject');
        state.data.isLoading = false;
      });
  },
});

export const { resetState } = albumSlice.actions;
export { albumGetInfo };
export default albumSlice.reducer;
