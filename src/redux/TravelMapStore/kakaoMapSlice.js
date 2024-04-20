import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCode: null,
  weather: null,
  center: {},
  locationName: null,
  initialMap: null,
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
    setLocationName: (state, action) => {
      state.currentLocation = action.payload;
    },
    setInitialMap: (state, action) => {
      state.initialMap = action.payload;
    },
  },
});

export const {
  selectCode,
  setWeather,
  setCenter,
  setLocationName,
  setInitialMap,
} = kakaoMapSlice.actions;
export default kakaoMapSlice.reducer;
