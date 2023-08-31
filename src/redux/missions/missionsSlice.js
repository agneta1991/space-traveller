/* eslint-disable max-len */
// missionsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

const missionsUrl = 'https://api.spacexdata.com/v3/missions';

export const getMissions = createAsyncThunk('missions/getMissions', async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(missionsUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
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
  reducers: {
    joinMission: (state, action) => {
      const missionId = action.payload;
      state.data = state.data.map((mission) => (mission.mission_id === missionId ? { ...mission, reserved: true } : mission));
    },
    leaveMission: (state, action) => {
      const missionId = action.payload;
      state.data = state.data.map((mission) => (mission.mission_id === missionId ? { ...mission, reserved: false } : mission));
    },
  },
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
    reserved: mission.reserved || false, // Default reserved status
  })),
);

export const { joinMission, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
