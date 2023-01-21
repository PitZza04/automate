import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const ResetPasswordScreen = () => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.resetPassword}>Reset Password</Text>
        <Text style={styles.detail}>
          Set the new password for your account so you can login and access all
          the features.
        </Text>
      </View>
      <View style={styles.passwordForm}>
        <Text style={styles.text}>New Password</Text>
        <TextInput
          style={styles.inputText}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          name="Password"
        ></TextInput>
        <Text style={styles.text}>Confirm Password</Text>
        <TextInput
          style={styles.inputText}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          name="Password"
        ></TextInput>
      </View>
      <TouchableOpacity style={{ marginTop: 20 }}>
        <View style={styles.nextButton}>
          <Text style={styles.nextText}>Continue</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  textWrapper: {
    marginHorizontal: 30,
    marginTop: 20,
  },
  resetPassword: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#D31111",
  },
  detail: {
    marginTop: 13,
    color: "#50555C",
    fontSize: 17,
    fontWeight: "400",
  },
  passwordForm: {
    height: 200,
    backgroundColor: "#fff",
    marginHorizontal: 30,
    justifyContent: "center",
  },
  inputText: {
    marginTop: 2,
    borderWidth: 1,
    alignItems: "center",
    width: "100%",
    height: 40,
    borderRadius: 10,
    borderColor: "#625c58",
    justifyContent: "center",
    borderWidth: 1,
  },
  text: {
    marginTop: 20,
    fontSize: 15,
    color: "#625C58",
  },
  nextButton: {
    backgroundColor: "#DF3111",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "60%",
    borderRadius: 10,
    padding: 5,
    height: 40,
  },
  nextText: {
    color: "#fff",
    fontSize: 15,
  },
});
