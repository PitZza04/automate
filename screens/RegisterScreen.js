import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "@react-native-firebase/app";
import * as ImagePicker from "expo-image-picker";
import { Picker } from "@react-native-picker/picker";
import { app as db } from "../config/firebase";
const RegisterScreen = ({ route, navigation }) => {
  const [openCamera, setOpenCamera] = useState(null);
  const [image, setImage] = useState(null);
  const phone = route.params.phone;
  const userID = route.params.user_id;
  const camera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this app to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    if (!result.canceled) {
      setOpenCamera(result.assets[0].uri);
      console.log(result.assets);
    }
  };

  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [extensionname, setExtensionname] = useState("");
  const [homeaddress, setHomeaddress] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [idnumber, setIdnumber] = useState("");
  const userRef = db.collection("users").doc(userID);
  const handleOnSubmit = async () => {
    await set(userRef, {
      city: city,
      email: email,
      extName: extensionname,
      firstName: firstname,
      homeAddress: homeaddress,
      lastName: lastname,
      license_id: idnumber,
      middleName: middlename,
      phoneNumber: phone,
    });
  };
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
                height: 30,
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
                height: 30,
                width: 150,
                backgroundColor: "#ecf2f8",
              }}
              itemStyle={{ justifyContent: "center" }}
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
            <Text style={styles.label}>Number of License ID:</Text>
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
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              onPress={camera}
              style={{ marginTop: 5, marginBottom: 5 }}
            >
              <View style={styles.buttonStyle}>
                <Text style={styles.buttonLabel}>TAKE PHOTO OF ID</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              onPress={handleOnSubmit}
              style={{ marginBottom: 5 }}
            >
              <View style={styles.buttonStyle}>
                <Text style={styles.buttonLabel}>NEXT</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* <View style={styles.imageContainer}>
            {openCamera !== "" && (
              <Image source={{ uri: openCamera }} style={styles.image} />
            )}
          </View> */}
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
    marginVertical: 20,
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
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    marginVertical: 10,
    backgroundColor: "#DF3111",
    justifyContent: "center",
    alignItems: "center",
    width: 325,
    borderRadius: 10,
    padding: 5,
    height: 40,
  },
  buttonLabel: {
    color: "#fff",
  },

  imageContainer: {
    padding: 30,
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: "cover",
  },
});
