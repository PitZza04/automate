import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { FontAwesome5, FontAwesome } from "react-native-vector-icons";

import { useNavigation } from "@react-navigation/native";

const RegisterNumberScreen = () => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordShown, setPasswordShown] = useState(true);
  const [passwordShown2, setPasswordShown2] = useState(true);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.taglineWrapper}>
          <Image
            style={{
              resizeMode: "contain",
              height: 200,
              width: "90%",
            }}
            source={require("../assets/main-icon/main-logo.png")}
          />
          <Text style={styles.tagline}>Your Personalized Mechanic</Text>
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
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="numeric"
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
  taglineWrapper: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    backgroundColor: "#DF3111",
  },
  tagline: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
    textShadowOffset: { width: 2, height: 2 },
    textShadowColor: "black",
    textShadowRadius: 15,
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
