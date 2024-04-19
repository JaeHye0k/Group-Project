import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const API_KEY = process.env.REACT_APP_TOUR_API_KEY;

let initialState = {
  attractionList: [],
  attractionDetail: null,
  isLoading: false,
  error: null,
};

export const fetchAttractions = createAsyncThunk(
  "fetchAll",
  async ({lat,lon},thunkApi) => {
    try {
    //   let url = `https://apis.data.go.kr/B551011/KorService1/areaCode1?serviceKey=${API_KEY}&MobileOS=win&MobileApp=test&_type=json`;
    //   let url = `https://apis.data.go.kr/B551011/KorService1/areaBasedSyncList1?MobileOS=ETC&MobileApp=test&serviceKey=${API_KEY}&_type=json`;
         let url = `https://apis.data.go.kr/B551011/KorService1/locationBasedList1?MobileOS=WIN&MobileApp=test&_type=json&mapX=${lon}&mapY=${lat}&radius=100000&serviceKey=${API_KEY}`
      let response = await fetch(url);
    //   return await response.json();
    return response.json()
    
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
const attractionsSlice = createSlice({
  name: "attraction",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAttractions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAttractions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.attractionList = action.payload;
      })
      .addCase(fetchAttractions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default attractionsSlice.reducer;
