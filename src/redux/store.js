import { configureStore } from "@reduxjs/toolkit";
import kakaoMapSlice from "./TravelMapStore/kakaoMapSlice";

export const store = configureStore({
  reducer: {
    kakaoMap: kakaoMapSlice,
  },
});
