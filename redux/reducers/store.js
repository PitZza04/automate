import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../actions/authSlice";
import userReducer from "../actions/userSlice";
import servicesSlice from "../actions/servicesSlice";
const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userReducer,
    services: servicesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
