import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedProduct: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    // setCart: (state, action) => {
    //   state.cart = [...state.cart, action.payload];
    // },
    // removeCart: (state, action) => {
    //   // state.cart.filter((item) => item._id !== action.payload);
    //   state.cart = state.cart.filter((item) => item._id !== action.payload);
    // },
  },
});
export const { setProducts, setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
