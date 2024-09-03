import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // state.items = [];
      state.items.length = 0;
    },
  },
});

// Export the reducer and actions

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
