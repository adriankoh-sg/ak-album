import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { CONFIG } from '@config/settings';
import type { TArtistsChart } from '@store/stateDataTypes';

const {
  api: { baseUrl },
} = CONFIG;

// slice declaration here
const initialState = {
  data: {
    artists: {} as TArtistsChart,
    isLoading: false as boolean,
  },
};

interface IApiProps {
  apiKey: string;
}

const getTopArtists = createAsyncThunk('getTopArtists', async ({ apiKey }: IApiProps) => {
  const params = `?method=chart.gettopartists&api_key=${apiKey}&format=json`;
  const url = `${baseUrl}${params}`;
  const response = await axios.get(url);
  console.log(response.data);
  return response.data as TArtistsChart;
});

const homePageSlice = createSlice({
  name: 'homePageSlice',
  initialState,
  reducers: {
    resetState: (state) => {
      state.data.artists = {} as TArtistsChart;
      state.data.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTopArtists.pending, (state) => {
        state.data.isLoading = true;
      })
      .addCase(getTopArtists.fulfilled, (state, { payload }) => {
        state.data.isLoading = false;
        console.log({ payload });
        state.data.artists = payload;
      })
      .addCase(getTopArtists.rejected, (state) => {
        state.data.isLoading = false;
      });
  },
});

export const { resetState } = homePageSlice.actions;
export { getTopArtists };
export default homePageSlice.reducer;
