import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import React, { useState, useContext } from "react";
import { FontAwesome5 } from "react-native-vector-icons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import useAuth from "../hooks/useAuth";
const LoginScreen = ({ navigation }) => {
  const { dispatch } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(true);
  const auth = getAuth();

  const handleLogin = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      dispatch({ type: "SIGN_IN", payload: result.user });
    } catch (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.logoWrapper}>
          <Image
            style={{
              resizeMode: "contain",
              height: 200,
              width: "90%",
            }}
            source={require("../assets/main-icon/main-logo.png")}
          />
        </View>

        <View style={styles.loginWrapper}>
          <View
            style={[styles.inputWrapper, { marginBottom: 15, marginTop: 15 }]}
          >
            <FontAwesome5
              name="user-alt"
              size={20}
              color="#DF3111"
              style={{ marginLeft: 10 }}
            />
            <TextInput
              style={styles.inputText}
              value={email}
              onChangeText={setEmail}
              placeholder="Email or Mobile Number"
              name="Email"
              returnKeyType="send"
              autoCorrect={false}
              autoCapitalize="none"
            ></TextInput>
          </View>
          <View style={styles.inputWrapper}>
            <FontAwesome5
              name="key"
              size={20}
              color="#DF3111"
              style={{ marginLeft: 10 }}
            />
            <TextInput
              style={styles.inputText}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              name="Password"
              secureTextEntry={passwordShown}
            ></TextInput>
            <TouchableOpacity
              onPress={() => {
                setPasswordShown((prev) => !prev);
              }}
              style={{ position: "absolute", right: 0, marginRight: 10 }}
            >
              <FontAwesome5
                name={passwordShown ? "eye" : "eye-slash"}
                size={20}
                color="#DF3111"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.registerWrapper}>
            <Pressable
              style={{ marginTop: 10 }}
              onPress={() => {
                navigation.navigate("ForgotPassword");
              }}
            >
              <Text style={styles.primaryText}>Forgot Password?</Text>
            </Pressable>
            <TouchableOpacity
              onPress={handleLogin}
              style={{ marginBottom: 10 }}
            >
              <View style={styles.loginButton}>
                <Text style={styles.textLogin}>LOGIN</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.registerLink}>
              <Text style={styles.text}>Don't have an Account yet? Tap </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("RegisterNumber")}
              >
                <Text style={[styles.primaryText, { fontSize: 15 }]}>
                  here{" "}
                </Text>
              </TouchableOpacity>
              <Text style={styles.text}>to Register.</Text>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  logoWrapper: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    backgroundColor: "#DF3111",
  },
  loginWrapper: {
    flex: 0.9,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 30,
    marginBottom: 10,
    width: "100%",
  },
  inputWrapper: {
    backgroundColor: "#fff",
    width: "90%",
    alignItems: "center",
    height: 50,
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 20,
    flexDirection: "row",
    alignSelf: "center",
  },
  inputText: {
    marginLeft: 10,
    width: "90%",
  },
  primaryText: {
    color: "#DF3111",
    fontSize: 15,
    fontWeight: "bold",
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
  registerWrapper: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  registerLink: {
    position: "absolute",
    bottom: 1,
    flexDirection: "row",
  },
  text: {
    fontSize: 15,
  },
});
