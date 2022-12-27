import { combineReducers, configureStore } from "@reduxjs/toolkit";
import routesSlice from "./modules/routeSlice";
import basketSlice from "./modules/basketSlice";
import userSlice from "./modules/userSlice";

const rootReducer = combineReducers({
  routes: routesSlice.reducer,
  basket: basketSlice.reducer,
  user: userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production", // dev 환경에서만 redux devtool이 활성화
});
