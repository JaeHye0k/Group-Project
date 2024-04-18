import { configureStore } from "@reduxjs/toolkit";
import kakaoMapSlice from "./reducers/kakaoMapSlice";

export const store = configureStore({
  reducer: {
    kakaoMap: kakaoMapSlice,
  },
});
