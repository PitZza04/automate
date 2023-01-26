import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";

import firebase from "firebase/compat/app";
import { auth, app } from "../config/firebase";

const OTPScreen = ({ route, navigation }) => {
  const [code, setCode] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);
  const sendVerification = async () => {
    try {
      const phoneProvider = new PhoneAuthProvider(auth);
      if (password !== password2) {
        Alert.alert("Passwords do not match!");
      } else {
        const verificationId = await phoneProvider.verifyPhoneNumber(
          route.params.phoneNumber,
          recaptchaVerifier.current
        );
        setVerificationId(verificationId);
        showMessage({
          text: "Verification code has been sent to your phone.",
        });
        // submit password
        navigation.navigate("OTPScreen", {
          phoneNumber: number,
          password: password,
        });
      }
    } catch (err) {
      showMessage({ text: `Error: ${err.message}`, color: "red" });
    }
    // const phoneProvider = new PhoneAuthProvider(auth);
    // phoneProvider
    //   .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
    //   .then(setVerificationId);
    // setPhoneNumber("");
  };

  const confirmCode = async () => {
    try {
      const credential = PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await signInWithCredential(auth, credential);
      showMessage({ text: "Phone authentication successful 👍" });
    } catch (err) {
      showMessage({ text: `Error: ${err.message}`, color: "red" });
    }
  };

  // const confirmCode = () => {
  //   const credential = firebase.auth.PhoneAuthProvider.credential(
  //     verificationId,
  //     code
  //   );
  //   signInWithCredential(auth, credential)
  //     .then(() => {
  //       setCode("");
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     });
  //   Alert.alert("Login Successfully");
  // };
  const handleOnSubmit = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.otpTextWrapper}>
        <Text style={styles.otpText}>Enter 6 Digit Code</Text>
        <Text style={styles.otpDetail}>
          Please enter the 6 digit code that you received on your email.
        </Text>
      </View>
      <View style={styles.otpInputWrapper}>
        <TextInput
          style={styles.otpInput}
          maxLength={6}
          contextMenuHidden
          selectTextOnFocus
          keyboardType="decimal-pad"
          editable={true}
        ></TextInput>
        <TouchableOpacity
          onPress={confirmCode}
          disabled={!verificationId}
          style={{ marginBottom: 30, marginTop: 30 }}
        >
          <View style={styles.nextButton}>
            <Text style={styles.nextText}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  otpTextWrapper: {
    marginHorizontal: 30,
    marginTop: 20,
  },
  otpText: {
    fontSize: 25,
    fontWeight: "500",
    color: "#D31111",
  },
  otpDetail: {
    marginTop: 13,
    color: "#50555C",
    fontSize: 17,
    fontWeight: "400",
  },
  otpInputWrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    width: "100%",
    backgroundColor: "#fff",
  },
  otpInput: {
    borderWidth: 1,
    alignItems: "center",
    width: "70%",
    borderRadius: 4,
    borderColor: "#625c58",
    justifyContent: "center",
    borderWidth: 1,
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
