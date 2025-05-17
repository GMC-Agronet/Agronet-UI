import { configureStore } from '@reduxjs/toolkit';

// Import your slices here
import exampleReducer from './slices/exampleSlice';
import cartReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    example: exampleReducer, // Add your slices here
    cart: cartReducer,
  },
});

export default store;
