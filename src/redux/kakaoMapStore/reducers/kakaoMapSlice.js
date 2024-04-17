import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCode: null,
  isClickMyPosition: false,
};

export const kakaoMapSlice = createSlice({
  name: "kakaoMap",
  initialState,
  reducers: {
    selectCode: (state, action) => {
      state.selectedCode = action.payload.categoryCode;
    },
    clickMyPosition: (state, action) => {
      state.isClickMyPosition = true;
    },
  },
});

export const { selectCode, clickMyPosition } = kakaoMapSlice.actions;
export default kakaoMapSlice.reducer;
