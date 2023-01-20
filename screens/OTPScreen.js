import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "firebase/compat/app";
import { auth, app } from "../firebase/firebase";

const OTPScreen = ({ routes, navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = useRef(null);
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
  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    signInWithCredential(auth, credential)
      .then(() => {
        setCode("");
      })
      .catch((error) => {
        alert(error);
      });
    Alert.alert("Login Successfully");
  };
  const handleOnSubmit = () => {};
  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={app}
      />
      <View style={styles.otpTextWrapper}>
        <Text style={styles.otpText}>Enter 6 Digit Code</Text>
        <Text style={styles.otpDetail}>
          Enter the 6 digit code that you received on your email.
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
          onPress={handleOnSubmit}
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
    marginTop: 5,
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
