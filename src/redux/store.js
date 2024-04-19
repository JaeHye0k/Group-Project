import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./user/auth/authSlice";
import kakaoMapSlice from "./TravelMapStore/kakaoMapSlice";
import attractionsSlice from './AttractionPage/attractionsSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    kakaoMap: kakaoMapSlice,
    attraction:attractionsSlice
  },
});
