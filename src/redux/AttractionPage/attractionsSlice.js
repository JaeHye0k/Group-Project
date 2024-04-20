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
  // {lat,lon}
  async (thunkApi) => {
    try {
      //시조회
      // let url = `https://apis.data.go.kr/B551011/KorService1/areaCode1?serviceKey=${API_KEY}&MobileOS=win&MobileApp=test&_type=json`;
      let url = `https://apis.data.go.kr/B551011/KorService1/areaBasedSyncList1?numOfRows=100&MobileOS=ETC&MobileApp=test&serviceKey=${API_KEY}&_type=json&arrange=R수정일`;
    //내위치
        //  let url = `https://apis.data.go.kr/B551011/KorService1/locationBasedList1?MobileOS=WIN&MobileApp=test&_type=json&mapX=${lon}&mapY=${lat}&radius=100000&serviceKey=${API_KEY}`
        //검색
          //  let url = `https://apis.data.go.kr/B551011/KorService1/searchKeyword1?numOfRows=48&MobileOS=ETC&MobileApp=test&keyword=${query}&serviceKey=${API_KEY}&_type=json`;
      let response = await fetch(url);
    
    return await response.json()
    
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchQueryAttraction = createAsyncThunk(
  "query",
  async (query,thunkApi) =>{
    try{
        let url = `https://apis.data.go.kr/B551011/KorService1/searchKeyword1?numOfRows=48&MobileOS=ETC&MobileApp=test&keyword=${query}&serviceKey=${API_KEY}&_type=json`;
        let response = await fetch(url);
    
        return await response.json()
        
        } catch (error) {
          thunkApi.rejectWithValue(error.message);
        }
      }
)

const attractionsSlice = createSlice({
  name: "attraction",
  initialState,
  extraReducers: (builder) => {
    //fetchAll
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
      //fetchQuery
      builder
      .addCase(fetchQueryAttraction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchQueryAttraction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.attractionList = action.payload;
      })
      .addCase(fetchQueryAttraction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default attractionsSlice.reducer;
