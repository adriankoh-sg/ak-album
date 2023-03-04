import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { CONFIG } from '@config/settings';
import type { TTopAlbumResponse, TAlbum, TAttributes } from '@store/stateDataTypes';

const {
  api: { baseUrl },
} = CONFIG;

const apiKey = process.env.API_KEY || '';

// slice declaration here
const initialState = {
  data: {
    album: [] as TAlbum[],
    attributes: {} as TAttributes,
    isLoading: false as boolean,
  },
};

interface IApiProps {
  mbid: string;
}

const getTopAlbum = createAsyncThunk('getTopAlbum', async ({ mbid }: IApiProps) => {
  const params = `?method=artist.gettopalbums&api_key=${apiKey}&mbid=${mbid}&format=json`;
  const url = `${baseUrl}${params}`;

  const response = await axios.get(url);
  console.log('data', response.data as TTopAlbumResponse);
  return response.data as TTopAlbumResponse;
});

const homePageSlice = createSlice({
  name: 'homePageSlice',
  initialState,
  reducers: {
    resetState: (state) => {
      (state.data.album = [] as TAlbum[]), (state.data.attributes = {} as TAttributes), (state.data.isLoading = false);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTopAlbum.pending, (state) => {
        state.data.isLoading = true;
      })
      .addCase(getTopAlbum.fulfilled, (state, { payload }) => {
        state.data.isLoading = false;
        console.log({ payload });
        state.data.album = payload.topalbums.album;
        state.data.attributes = payload.topalbums['@attr'];
      })
      .addCase(getTopAlbum.rejected, (state) => {
        state.data.isLoading = false;
      });
  },
});

export const { resetState } = homePageSlice.actions;
export { getTopAlbum };
export default homePageSlice.reducer;
