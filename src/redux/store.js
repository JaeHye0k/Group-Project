import { configureStore } from '@reduxjs/toolkit'
import attractionsSlice from './reducers/attractionsSlice';

const store = configureStore({
    reducer:{
        attraction:attractionsSlice
    }

})

export default store;