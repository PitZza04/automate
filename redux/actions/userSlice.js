import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
//import auth from "@react-native-firebase/auth";
import {
  collection,
  doc,
  documentId,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { auth } from "../../config/firebase";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};
export const userAuthStateListener = createAsyncThunk(
  "user/userAuthStateListener",
  async (_, { dispatch }) => {
    try {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("user is available");
          dispatch(setSignInUser(user));
        } else {
          console.log("Listening on no user");
          dispatch(setSignOutUser());
        }
      });
    } catch (error) {
      throw error;
    }
  }
);
export const userSignInWithEmailAndPassword = createAsyncThunk(
  "user/userSignInWithEmailAndPassword",
  async ({ email, password }, { dispatch, rejectWithValue }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
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
    builder.addCase(userAuthStateListener.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(userAuthStateListener.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(
      userSignInWithEmailAndPassword.fulfilled,
      (state, action) => {
        state.isLoading = false;
      }
    );
    builder.addCase(userSignInWithEmailAndPassword.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(
      userSignInWithEmailAndPassword.rejected,
      (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );
  },
});

export const { setSignInUser, setSignOutUser, setLoading } = userSlice.actions;

export default userSlice.reducer;
