import { configureStore } from "@reduxjs/toolkit";

import productReducer from "../features/products/productSlice";
import userReducer from "../features/users/userSlice.js";
import cartReducer from "../features/cart/cartSlice";

export default configureStore({
  reducer: {
    productInfo: productReducer,
    userInfo: userReducer,
    cartInfo: cartReducer,
  },
});
