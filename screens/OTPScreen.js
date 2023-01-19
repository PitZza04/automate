import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const OTPScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.otpTextWrapper}>
        <Text style={styles.otpText}>Enter 6 Digit Code</Text>
        <Text style={styles.otpDetail}>
          Enter the 6 digit code that you received on your email.
        </Text>
      </View>
      <View style={styles.otpInputWrapper}>
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          contextMenuHidden
          selectTextOnFocus
          keyboardType="decimal-pad"
          editable={true}
        ></TextInput>
        <TextInput style={styles.otpInput}></TextInput>
        <TextInput style={styles.otpInput}></TextInput>
        <TextInput style={styles.otpInput}></TextInput>
        <TextInput style={styles.otpInput}></TextInput>
        <TextInput style={styles.otpInput}></TextInput>
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
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignSelf: "center",
    alignItems: "center",
    height: 200,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: "#D31111",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
