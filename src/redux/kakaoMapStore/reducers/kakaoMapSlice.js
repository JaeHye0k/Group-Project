import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCode: null,
};

export const kakaoMapSlice = createSlice({
  name: "kakaoMap",
  initialState,
  reducers: {
    selectCode: (state, action) => {
      state.selectedCode = action.payload.categoryCode;
    },
  },
});

export const { selectCode } = kakaoMapSlice.actions;
export default kakaoMapSlice.reducer;
