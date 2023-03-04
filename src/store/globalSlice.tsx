import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: {
    // TODO: hard code the artist selection for now.
    // Actual implementation will need to retrieve list of the top artists
    // and populate here.
    artistList: [
      { name: 'Taylor Swift', mbid: '20244d07-534f-4eff-b4d4-930878889970' },
      { name: 'Kanye West', mbid: '164f0d73-1234-4e2c-8743-d77bf2191051' },
      { name: 'Rihanna', mbid: 'db36a76f-4cdf-43ac-8cd0-5e48092d2bae' },
      { name: 'Kendrick Lamar', mbid: '381086ea-f511-4aba-bdf9-71c753dc5077' },
      { name: 'Lana Del Rey', mbid: 'b7539c32-53e7-4908-bda3-81449c367da6' },
      { name: 'Gorillaz', mbid: 'e21857d5-3256-4547-afb3-4b6ded592596' },
      { name: 'Frank Ocean', mbid: 'e520459c-dff4-491d-a6e4-c97be35e0044' },
    ],
  },
};

const globalSlice = createSlice({
  name: 'globalSlice',
  initialState,
  reducers: {},
});

// export const {  } = globalSlice.actions;
export default globalSlice.reducer;
