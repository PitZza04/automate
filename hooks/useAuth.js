import React, { createContext, useEffect, useContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const auth = getAuth();
  const [user, setUser] = React.useState([]);
  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
        console.log({ user });
      } else {
        // User is signed out
        setUser(undefined);
      }
    });
    return unsubscribeFromAuthStateChanged;
  }, []);
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  return useContext(AuthContext);
}
