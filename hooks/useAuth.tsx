import React, { createContext, useEffect, useContext } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
const AuthContext = createContext({});

export function useAuth() {
  const auth = getAuth();
  const [user, setUser] = React.useState<User>();
  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
      } else {
        // User is signed out
        setUser(undefined);
      }
    });
    return unsubscribeFromAuthStateChanged;
  }, []);

  return {
    user,
  };
}
