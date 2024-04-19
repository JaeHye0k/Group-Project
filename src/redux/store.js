import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./user/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
