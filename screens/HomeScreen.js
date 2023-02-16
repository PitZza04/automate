import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { signOut, getAuth } from "@firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import useAuth from "../hooks/useAuth";
import { setSignOutUser } from "../redux/actions/userSlice";

const HomeScreen = () => {
  //const { dispatch, user } = useAuth();
  const auth = getAuth();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const handleLogout = async () => {
    signOut(auth);
    // dispatch({ type: "SIGN_OUT" });
    //dispatch(setSignOutUser());
  };

  return (
    <View style={styles.container}>
      <Text>{user?.email || user}</Text>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={handleLogout} style={{ marginBottom: 10 }}>
        <View style={styles.loginButton}>
          <Text style={styles.textLogin}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  loginButton: {
    marginVertical: 15,
    backgroundColor: "#DF3111",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    borderRadius: 10,
    padding: 5,
    height: 40,
  },
  textLogin: {
    color: "#fff",
  },
});
