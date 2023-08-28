import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
};

const baseUrl = 'https://api.spacexdata.com/v4/rockets';

export const fetchRocketsAsync = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const response = await axios.get(baseUrl);
    return response.data;
  },
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRocketsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRocketsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rockets = action.payload;
      })
      .addCase(fetchRocketsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default rocketsSlice.reducer;
