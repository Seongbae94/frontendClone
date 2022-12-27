import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
};

export const userSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.login = action.payload;
    },
  },
  extraReducers: {},
});

export const { setLogin } = userSlice.actions;

export default userSlice;
