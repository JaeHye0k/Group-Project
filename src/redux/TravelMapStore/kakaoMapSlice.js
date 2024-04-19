import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCode: null,
  weather: null,
  center: {},
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
  },
});

export const { selectCode, setWeather, setCenter } = kakaoMapSlice.actions;
export default kakaoMapSlice.reducer;
