import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: [],
  customers: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setCustomers: (state, action) => {
      state.customers = action.payload;
    },
    resetUser: (state, { payload }) => {
      state.user = null;
    },
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
  },
});
export const { setUser, resetUser, setMenu, setCustomers } = userSlice.actions;
export default userSlice.reducer;
