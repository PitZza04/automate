import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { FontAwesome5 } from "react-native-vector-icons";

import { useNavigation } from "@react-navigation/native";

const RegisterNumberScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(true);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.taglineWrapper}>
        {/* <View style={styles.imageWrapper}> */}
        <Image
          style={{
            resizeMode: "contain",
            height: 200,
            width: "90%",
          }}
          source={require("../assets/main-icon/main-logo.png")}
        />
        <Text style={styles.tagline}>Your Personalized Mechanic</Text>
        {/* </View> */}
      </View>
      <ScrollView>
        <View style={styles.loginWrapper}>
          <View style={[styles.inputWrapper, { marginBottom: 15 }]}>
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
              style={{ marginTop: 30 }}
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text style={styles.primaryText}>Forgot Password?</Text>
            </Pressable>
            <TouchableOpacity
              onPress={() => navigation.navigate("Register")}
              style={{ marginBottom: 10 }}
            >
              <View style={styles.loginButton}>
                <Text style={styles.textLogin}>NEXT</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.registerLink}>
              <Text style={styles.text}>Don't have an Account yet? Tap </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={[styles.primaryText, { fontSize: 15 }]}>
                  here{" "}
                </Text>
              </TouchableOpacity>
              <Text style={styles.text}>to Register.</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default RegisterNumberScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DF3111",
    paddingTop: 30,
  },
});
