import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import kakaoMapSlice from "./TravelMapStore/kakaoMapSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    kakaoMap: kakaoMapSlice,
  },
});
