import { createSlice } from "@reduxjs/toolkit";
import { auth, db } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  doc,
  documentId,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

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
// export const getCurrentUserData = () => async (dispatch) => {
//   const user = auth.currentUser;
//   console.log(user?.uid);
//   if (user != null) {
//     const userRef = doc(db, "users", user?.uid);
//     onSnapshot(userRef, (snapshot) => {
//       console.log(snapshot.data());
//       //dispatch(setSignInUser([snapshot.data()]));
//     });
//   }

// //const snapshot = await getDocs(userRef);
// getDocs(userRef)
//   .then((doc) => {
//     if (doc.exist) {
//       return dispatch(setSignInUser(doc.data()));
//     }
//   })
//   .catch((error) => console.log(error));
//};

export const userAuthStateListener = () => {
  return function (dispatch) {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // dispatch(getCurrentUserData());
        // dispatch(setLoading(true));
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
