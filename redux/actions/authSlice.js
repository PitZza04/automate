import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};
export const listenOnAuthStateChanged = createAsyncThunk(
  "user/listenOnAuthStateChanged",
  async (_, { dispatch }) => {
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(setSignInUser(user));
        } else {
          dispatch(setSignOutUser());
        }
      });
    } catch (error) {
      throw error;
    }
  }
);
export const authSignInWithEmailAndPassword = createAsyncThunk(
  "user/authSignInWithEmailAndPassword",
  async ({ email, password }, { dispatch, rejectWithValue }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSignInUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    setSignOutUser: (state) => {
      state.user = null;
      state.isLoading = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(listenOnAuthStateChanged.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(listenOnAuthStateChanged.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(
      authSignInWithEmailAndPassword.fulfilled,
      (state, action) => {
        state.isLoading = false;
      }
    );
    builder.addCase(authSignInWithEmailAndPassword.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(
      authSignInWithEmailAndPassword.rejected,
      (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );
  },
});

export const { setSignInUser, setSignOutUser, setLoading } = authSlice.actions;

export default authSlice.reducer;
