import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../../config/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";
const initialState = {
  user: null,
  isLoading: false,
};

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
});
export const userAuthStateListener = () => {
  return function (dispatch) {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(setLoading(true));
        await dispatch(setSignInUser(user));
      } else {
        dispatch(setSignOutUser());
      }
    });
  };
};

export const { setSignInUser, setSignOutUser, setLoading } = userSlice.actions;
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     store.dispatch(setLoginStatus(true));
//   } else {
//     store.dispatch(setLoginStatus(true));
//   }
// });
export default userSlice.reducer;
