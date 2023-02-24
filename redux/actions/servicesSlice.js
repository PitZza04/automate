import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { readServices } from "../../config/firetest";
const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

export const useFetchAllServices = createAsyncThunk(
  "user/useFetchAllServices",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const result = await readServices();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(useFetchAllServices.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(useFetchAllServices.fulfilled, (state, action) => {
      (state.data = action.payload), (state.isLoading = false);
    });
    builder.addCase(useFetchAllServices.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { setData } = servicesSlice.actions;

export default servicesSlice.reducer;
