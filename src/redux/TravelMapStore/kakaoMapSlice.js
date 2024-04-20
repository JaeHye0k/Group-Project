import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCode: null,
  weather: null,
  center: {},
  locationName: null,
  currentLocation: null,
  isClickMyPosition: false,
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
    setCurrentLocation: (state, action) => {
      state.currentLocation = action.payload;
    },
    setIsClickMyPosition: (state, action) => {
      state.isClickMyPosition = action.payload;
      console.log(state.isClickMyPosition);
    },
  },
});

export const {
  selectCode,
  setWeather,
  setCenter,
  setLocationName,
  setCurrentLocation,
  setIsClickMyPosition,
} = kakaoMapSlice.actions;
export default kakaoMapSlice.reducer;
