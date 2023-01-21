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
import React, { useState, useEffect, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

const RegisterScreen = () => {
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [extensionname, setExtensionname] = useState("");
  const [homeaddress, setHomeaddress] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [idnumber, setIdnumber] = useState("");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>First Name:</Text>
            <TextInput
              style={styles.inputText}
              value={firstname}
              onChangeText={setFirstname}
              name="FirstName"
              returnKeyType="send"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="text"
            ></TextInput>
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Middle Name:</Text>
            <TextInput
              style={styles.inputText}
              value={middlename}
              onChangeText={setMiddlename}
              name="MiddleName"
              returnKeyType="send"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="text"
            ></TextInput>
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Last Name:</Text>
            <TextInput
              style={styles.inputText}
              value={lastname}
              onChangeText={setLastname}
              name="MiddleName"
              returnKeyType="send"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="text"
            ></TextInput>
          </View>

          <View style={styles.pickerWrapper}>
            <Text style={styles.label}>Extension Name:</Text>
            <Picker
              selectedValue={extensionname}
              style={{
                height: 35,
                width: 150,
                backgroundColor: "#ecf2f8",
              }}
              onValueChange={(itemValue, itemIndex) =>
                setExtensionname(itemValue)
              }
            >
              <Picker.Item label="-None-" value="" />
              <Picker.Item label="Jr." value="Junior" />
              <Picker.Item label="III" value="III" />
              <Picker.Item label="IV" value="IV" />
            </Picker>
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Home Address:</Text>
            <TextInput
              style={styles.inputText}
              value={homeaddress}
              onChangeText={setHomeaddress}
              name="HomeAddress"
              returnKeyType="send"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="text"
            ></TextInput>
          </View>
          <View style={styles.pickerWrapper}>
            <Text style={styles.label}>City:</Text>
            <Picker
              selectedValue={city}
              style={{
                height: 35,
                width: 150,
                backgroundColor: "#ecf2f8",
              }}
              onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
            >
              <Picker.Item label="-Select City-" value="" />
              <Picker.Item label="Bacolod" value="Bacolod" />
              <Picker.Item label="Talisay" value="Talisay" />
              <Picker.Item label="Silay" value="Silay" />
              <Picker.Item label="Bago" value="Bago" />
              <Picker.Item label="Murcia" value="Murcia" />
            </Picker>
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Email Address:</Text>
            <TextInput
              style={styles.inputText}
              value={email}
              onChangeText={setEmail}
              name="Email"
              returnKeyType="send"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="text"
            ></TextInput>
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>ID Number:</Text>
            <TextInput
              style={styles.inputText}
              value={idnumber}
              onChangeText={setIdnumber}
              name="IdNumber"
              returnKeyType="send"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="text"
            ></TextInput>
          </View>
          <View style={styles.nextWrapper}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={{ marginBottom: 30, marginTop: 30 }}
            >
              <View style={styles.nextButton}>
                <Text style={styles.nextText}>NEXT</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputWrapper: {
    backgroundColor: "#fff",
    width: "90%",
    height: 50,
    borderColor: "#000",
    borderBottomWidth: 2,
    alignSelf: "center",
    marginVertical: 5,
    marginTop: 10,
  },
  label: {
    fontSize: 14,
  },
  inputText: {
    paddingLeft: 8,
    fontSize: 16,
  },
  pickerWrapper: {
    paddingVertical: 8,
    paddingHorizontal: 20,
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
    width: 325,
    borderRadius: 10,
    padding: 5,
    height: 40,
  },
  nextText: {
    color: "#fff",
  },
});
