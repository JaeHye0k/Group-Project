import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCode: null,
  weather: null,
  center: {},
  currentLocation: null,
  contentType: {},
};

export const kakaoMapSlice = createSlice({
  name: "kakaoMap",
  initialState,
  reducers: {
    selectCode: (state, action) => {
      state.selectedCode = action.payload.categoryCode;
    },
    setWeather: (state, action) => {
      state.weather = action.payload.weather;
    },
    setCenter: (state, action) => {
      state.center = action.payload;
    },
    setCurrentLocation: (state, action) => {
      state.currentLocation = action.payload;
    },
    setContentType: (state, action) => {
      state.contentType[action.payload.code] = action.payload.name;
    },
  },
});

export const {
  selectCode,
  setWeather,
  setCenter,
  setCurrentLocation,
  setContentType,
} = kakaoMapSlice.actions;
export default kakaoMapSlice.reducer;
