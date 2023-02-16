import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../../config/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const initialState = {
  user: null,
  isLoading: "false",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSignInUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = "false";
    },

    setSignOutUser: (state) => {
      state.user = null;
      state.isLoading = "false";
    },
  },
});
export const userAuthStateListener = () => {
  return function (dispatch) {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        dispatch(setSignInUser(user));
      } else {
        dispatch(setSignOutUser());
      }
    });
  };
};

export const { setSignInUser, setSignOutUser } = userSlice.actions;
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     store.dispatch(setLoginStatus(true));
//   } else {
//     store.dispatch(setLoginStatus(true));
//   }
// });
export default userSlice.reducer;
