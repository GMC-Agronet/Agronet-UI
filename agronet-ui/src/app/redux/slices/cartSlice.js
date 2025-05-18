import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // {id, title, price, quantity, ...}
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((i) => i.id == item.id);
      if (!existing) {
        state.items.push({ ...item, quantity: 1 });
      }
      // If already exists, do nothing (no increment)
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.id != action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((i) => i.id == action.payload);
      if (item) {
        item.quantity = (item.quantity || 1) + 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, incrementQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
