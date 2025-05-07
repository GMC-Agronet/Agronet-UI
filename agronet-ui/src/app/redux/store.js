import { configureStore } from '@reduxjs/toolkit';

// Import your slices here
import exampleReducer from './slices/exampleSlice';

const store = configureStore({
  reducer: {
    example: exampleReducer, // Add your slices here
  },
});

export default store;
