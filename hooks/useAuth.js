import React, { createContext, useEffect, useReducer, useContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const initialState = {
  user: null,
  login: false,
  isLoading: true,
};
const AuthContext = createContext(initialState);
const authReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER":
      return { ...state, user: null, isLoading: false };
    case "SIGN_IN":
      return { ...state, user: action.payload, isLoading: false };
    case "SIGN_OUT":
      return { ...state, user: null, isLoading: false };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const auth = getAuth();
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "SIGN_IN" });
      } else {
        dispatch({ type: "SIGN_OUT" });
      }
    });
    return unsubscribeFromAuthStateChanged;
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: state.user, isLoading: state.isLoading, dispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
