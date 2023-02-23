import React, { useEffect } from "react";
import { listenOnAuthStateChanged } from "../redux/actions/authSlice";
import UserStack from "./UserStack";
import AuthStack from "./AuthStack";
import { useDispatch, useSelector } from "react-redux";
export default function RootNavigation() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    dispatch(listenOnAuthStateChanged());
  }, []);
  return user ? <UserStack /> : <AuthStack />;
}
