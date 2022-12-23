import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  route: "",
};

export const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    getRoutes: (state, action) => {
      state.route = action.payload;
    },
  },
  extraReducers: {},
});

export const { getRoutes } = routesSlice.actions;

export default routesSlice;
