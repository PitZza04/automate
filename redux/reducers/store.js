import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../actions/authSlice";
import userReducer from "../actions/userSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
