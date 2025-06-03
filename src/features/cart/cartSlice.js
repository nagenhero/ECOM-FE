import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  recentOrders: [],
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    emptyCart: (state, action) => {
      state.cart = [];
    },
    setRecentOrders: (state, action) => {
      state.recentOrders = [...state.recentOrders, action.payload];
    },
    emptyRecentOrders: (state, action) => {
      state.recentOrders = [];
    },
    removeCart: (state, action) => {
      // state.cart.filter((item) => item._id !== action.payload);
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
  },
});
export const {
  setCart,
  removeCart,
  emptyCart,
  setRecentOrders,
  emptyRecentOrders,
} = cartSlice.actions;
export default cartSlice.reducer;
