import { configureStore } from '@reduxjs/toolkit'
import attractionsSlice from './AttractionPage/attractionsSlice';

const store = configureStore({
    reducer:{
        attraction:attractionsSlice
    }

})

export default store;