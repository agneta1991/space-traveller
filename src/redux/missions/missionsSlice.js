// missionsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createSelector } from 'reselect';

const missionsUrl = 'https://api.spacexdata.com/v3/missions';

export const getMissions = createAsyncThunk('missions/getMissions', async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get(missionsUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getMissions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectMissionsData = (state) => state.missions.data;
export const selectMissionsStatus = (state) => state.missions.status;
export const selectMissionsError = (state) => state.missions.error;

export const selectMappedMissions = createSelector(
  [selectMissionsData],
  (data) => data.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    description: mission.description,
  })),
);

export default missionsSlice.reducer;
