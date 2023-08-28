import { configureStore } from '@reduxjs/toolkit';
import rocketSliceReducer from './rocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketSliceReducer,
  },
});

export default store;
