import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.biggerText}>Forgot Password</Text>
        <Text style={styles.detail}>
          We will send to your email a 6 digit code for verification process.
        </Text>
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.inputText}
          value={email}
          onChangeText={setEmail}
          placeholder="Email or Mobile Number"
          name="Email"
          returnKeyType="send"
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => navigation.navigate("OTPScreen")}
      >
        <View style={styles.nextButton}>
          <Text style={styles.nextText}>Continue</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordScreen;

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
  biggerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#D31111",
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#D31111",
  },
  detail: {
    marginTop: 13,
    color: "#50555C",
    fontSize: 17,
    fontWeight: "400",
  },
  inputWrapper: {
    height: 200,
    backgroundColor: "#fff",
    marginHorizontal: 30,
    justifyContent: "center",
  },
  inputText: {
    paddingHorizontal: 10,
    marginTop: 5,
    alignItems: "center",
    width: "100%",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    color: "#50555C",
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
