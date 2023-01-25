import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
  Alert,
} from "react-native";
import React, { useState, useRef } from "react";
import { FontAwesome5, FontAwesome } from "react-native-vector-icons";
import { PhoneAuthProvider } from "firebase/auth";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { app } from "../firebase/firebase";
const RegisterNumberScreen = ({ navigation, route }) => {
  const recaptchaVerifier = useRef(null);
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [message, showMessage] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordShown, setPasswordShown] = useState(true);
  const [passwordShown2, setPasswordShown2] = useState(true);
  const [verificationId, setVerificationId] = useState();
  const handleSubmit = async () => {
    if (password !== password2) {
      Alert.alert("Passwords do not match!");
    } else {
      // submit password
      // await sendVerification();
      navigation.navigate(
        {
          phoneNumber: number,
          password: password,
        },
        "RegisterScreen"
      );
    }
  };
  const sendVerification = async () => {
    try {
      const phoneProvider = new PhoneAuthProvider(auth);
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );
      setVerificationId(verificationId);
      showMessage({
        text: "Verification code has been sent to your phone.",
      });
    } catch (err) {
      showMessage({ text: `Error: ${err.message}`, color: "red" });
    }
    // const phoneProvider = new PhoneAuthProvider(auth);
    // phoneProvider
    //   .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
    //   .then(setVerificationId);
    // setPhoneNumber("");
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.logoWrapper}>
        {/* <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={app}
          attemptInvisibleVerification={true}
        /> */}
          <Image
            style={{
              resizeMode: "contain",
              height: 200,
              width: "90%",
            }}
            source={require("../assets/main-icon/main-logo.png")}
          />
        </View>
        <View style={styles.registrationWrapper}>
          <View style={styles.inputWrapper}>
            <FontAwesome
              name="mobile-phone"
              size={30}
              color="#DF3111"
              style={{ marginLeft: 15 }}
            />
            <TextInput
              style={styles.inputText}
              value={number}
              onChangeText={setNumber}
              placeholder="Enter your Mobile Number"
              name="MobileNum"
              returnKeyType="send"
              keyboardType="phone-pad"
              autoCorrect={false}
              autoCapitalize="none"
              maxLength={11}
            ></TextInput>
          </View>

          <View style={[styles.inputWrapper, { marginTop: 10 }]}>
            <FontAwesome5
              name="key"
              size={18}
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

          <View style={[styles.inputWrapper, { marginTop: 10 }]}>
            <FontAwesome5
              name="key"
              size={18}
              color="#DF3111"
              style={{ marginLeft: 10 }}
            />
            <TextInput
              style={styles.inputText}
              value={password2}
              onChangeText={setPassword2}
              placeholder="Confirm Password"
              name="ConfirmPassword"
              secureTextEntry={passwordShown2}
            ></TextInput>
            <TouchableOpacity
              onPress={() => {
                setPasswordShown2((prev) => !prev);
              }}
              style={{ position: "absolute", right: 0, marginRight: 10 }}
            >
              <FontAwesome5
                name={passwordShown2 ? "eye" : "eye-slash"}
                size={20}
                color="#DF3111"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.nextWrapper}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Register")}
              style={{ marginBottom: 30, marginTop: 30 }}
            >
              <View style={styles.nextButton}>
                <Text style={styles.nextText}>NEXT</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default RegisterNumberScreen;

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
  registrationWrapper: {
    flex: 0.8,
    backgroundColor: "#fff",
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  },
  inputWrapper: {
    backgroundColor: "#fff",
    width: "90%",
    alignItems: "center",
    height: 50,
    borderColor: "red",
    borderBottomWidth: 2,
    flexDirection: "row",
    alignSelf: "center",
  },
  inputText: {
    marginLeft: 10,
    width: "90%",
  },
  nextWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  nextButton: {
    marginVertical: 15,
    backgroundColor: "#DF3111",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    borderRadius: 10,
    padding: 5,
    height: 40,
  },
  nextText: {
    color: "#fff",
  },
});
