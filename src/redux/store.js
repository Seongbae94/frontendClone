import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import commentSlice from "./commentSlice";
// import postSlice from "./postSlice";
import routesSlice from "./modules/routeSlice";
import basketSlice from "./modules/basketSlice";

const rootReducer = combineReducers({
  routes: routesSlice.reducer,
  basket: basketSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production", // dev 환경에서만 redux devtool이 활성화
});
