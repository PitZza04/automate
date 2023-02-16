import React, { useContext, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { userAuthStateListener } from "../redux/actions/userSlice";
import UserStack from "./UserStack";
import AuthStack from "./AuthStack";
import { useDispatch, useSelector } from "react-redux";
export default function RootNavigation() {
  //const { user } = useAuth();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    dispatch(userAuthStateListener());
    ///console.log(user);
  }, []);
  return user ? <UserStack /> : <AuthStack />;
}
