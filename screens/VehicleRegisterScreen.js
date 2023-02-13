import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import Data from "../data/brands";
import { getFirestore } from "firebase/firestore";

const boxWidth = Dimensions.get("window").width / 4 - 17;

const VehicleRegisterScreen = ({ route, navigation }) => {
  const db = getFirestore();
  console.log(route);
  const handleOnSubmit = async () => {
    isLiked.map(({ selected, name }) => {
      let fuel = "";
      if (selected) {
        console.log(name);
        fuel = name;
      }
    });
    try {
      await setDoc(doc(db, "vehicle")),
        {
          planteNo: platenumber,
          motorNo: enginenumber,
          serialNo: serialnumber,
          yearModel: yearmodel,
          fuel: fuel,
          vehicleImage: vehicleImage,
        };
    } catch {
      console.log("Error in handleOnSubmit:", error);
    }
  };
  // const handleOnSubmit = async () => {
  //   try {
  //     await setDoc(doc(db, "users", userID), {
  //       city: city,
  //       email: email,
  //       extName: extensionname,
  //       firstName: firstname,
  //       homeAddress: homeaddress,
  //       lastName: lastname,
  //       license_id: idnumber,
  //       middleName: middlename,
  //       phoneNumber: phone,
  //     });
  //     navigation.navigate("VehicleRegister");
  //   } catch (error) {
  //     console.log("Error in handleOnSubmit:", error);
  //   }
  // };
  const camera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    if (!result.canceled) {
      setOpenCamera(result.assets[0].uri);
      console.log(result.assets);
    }
  };

  const [platenumber, setPlatenumber] = useState("");
  const [enginenumber, setEnginenumber] = useState("");
  const [serialnumber, setSerialnumber] = useState("");
  const [yearmodel, setYearmodel] = useState("");

  const [isLiked, setIsLiked] = useState([
    { id: 1, value: true, name: "Petrol", selected: false },
    { id: 2, value: false, name: "Diesel", selected: false },
  ]);
  const onRadioBtnClick = (item) => {
    let updatedState = isLiked.map((isLikedItem) =>
      isLikedItem.id === item.id
        ? { ...isLikedItem, selected: true }
        : { ...isLikedItem, selected: false }
    );
    setIsLiked(updatedState);
  };
  const RadioButton = ({ onPress, selected, children }) => {
    return (
      <View style={styles.radioButtonContainer}>
        <TouchableOpacity onPress={onPress} style={styles.radioButton}>
          {selected ? <View style={styles.radioButtonIcon} /> : null}
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.radioButtonText}>{children}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Plate No: </Text>
            <TextInput
              style={styles.inputText}
              value={platenumber}
              onChangeText={setPlatenumber}
              name="PlateNumber"
              returnKeyType="send"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="text"
            ></TextInput>
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Motor / Engine No:</Text>
            <TextInput
              style={styles.inputText}
              value={enginenumber}
              onChangeText={setEnginenumber}
              name="EngineNumber"
              returnKeyType="send"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="text"
            ></TextInput>
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Serial / Chassis No:</Text>
            <TextInput
              style={styles.inputText}
              value={serialnumber}
              onChangeText={setSerialnumber}
              name="SerialNumber"
              returnKeyType="send"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="text"
            ></TextInput>
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Year Model:</Text>
            <TextInput
              style={styles.inputText}
              value={yearmodel}
              onChangeText={setYearmodel}
              name="YearModel"
              returnKeyType="send"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="numeric"
            ></TextInput>
          </View>
          <View style={styles.radioWrapper}>
            <Text style={styles.label}>Fuel:</Text>

            {isLiked.map((item) => (
              <RadioButton
                onPress={() => onRadioBtnClick(item)}
                selected={item.selected}
                key={item.id}
              >
                {item.name}
              </RadioButton>
            ))}
          </View>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Brand")}
              style={{ marginBottom: 5 }}
            >
              <View style={styles.buttonStyle}>
                <Text style={styles.buttonLabel}>
                  Select Vehicle Brand and Model
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              onPress={camera}
              style={{ marginTop: 5, marginBottom: 5 }}
            >
              <View style={styles.buttonStyle}>
                <Text style={styles.buttonLabel}>
                  Vehicle Registration photo Upload
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              onPress={handleOnSubmit}
              style={{ marginBottom: 5 }}
            >
              <View style={styles.buttonStyle}>
                <Text style={styles.buttonLabel}>Submit</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={{ marginBottom: 5 }}
            >
              <View style={styles.buttonStyle}>
                <Text style={styles.buttonLabel}>Skip For Now</Text>
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

export default VehicleRegisterScreen;

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
  radioWrapper: {
    marginVertical: 20,
    marginTop: 10,
    marginLeft: 20,
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
    marginTop: 10,
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: "#DF3111",
  },
  radioButtonText: {
    fontSize: 14,
    marginLeft: 5,
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
