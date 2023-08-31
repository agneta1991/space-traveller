import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';
import rocketSliceReducer from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketSliceReducer,
    missions: missionsReducer,
  },
});

export default store;
