import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { addVehicle } from "../config/firestore";
import { uploadImage } from "../config/storage";
import { MaterialIcons } from "react-native-vector-icons";

const boxWidth = Dimensions.get("window").width / 4 - 17;

const VehicleRegisterScreen = ({ route, navigation }) => {
  const { id, brandId, modelId, brandName, modelName } = route?.params;
  const [plateNo, setPlateNo] = useState("");
  const [engineNo, setEngineNo] = useState("");
  const [serialNo, setSerialNo] = useState("");
  const [yearModel, setYearModel] = useState("");
  const [openCamera, setOpenCamera] = useState(null);
  console.log(route.params);
  const handleOnSubmit = async () => {
    let fuelType = "";
    const uid = "YJIMKxy3LUWcrLKtAgp1uTxOhR03";
    const imageUri = openCamera;
    //let fileName = imageUri.substring(imageUri.lastIndexOf("/") + 1);
    isLiked.map(({ selected, name }) => {
      if (selected) {
        console.log(name);
        fuelType = name;
      }
    });
    await addVehicle({
      uid: uid,
      vehicleDetail: {
        modelId,
        brandId,
        plateNo,
        serialNo,
        brandName,
        modelName,
      },
      img_url: await uploadImage(imageUri, uid),
      yearModel,
      fuelType,
    });
  };

  const camera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    if (!result.canceled) {
      setOpenCamera(result.assets[0].uri);
    }
  };

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
              value={plateNo}
              onChangeText={(prev) => setPlateNo(prev)}
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
              value={engineNo}
              onChangeText={setEngineNo}
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
              value={serialNo}
              onChangeText={setSerialNo}
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
              value={yearModel}
              onChangeText={setYearModel}
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
              style={{}}
            >
              <View style={[styles.buttonStyle, styles.buttonGray]}>
                <Text style={styles.buttonText}>
                  Select Vehicle Brand and Model
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity onPress={camera} style={{}}>
              <View style={[styles.buttonStyle, styles.buttonGray]}>
                <Text style={styles.buttonText}>
                  Vehicle Registration Photo Upload
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.optional}>
            <Text style={{ color: "#D31111" }}>Optional:</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              onPress={() => console.log("clicked add vehicle")}
              style={{ marginBottom: 20 }}
            >
              <View style={[styles.buttonStyle, styles.buttonGray, {}]}>
                <MaterialIcons
                  name="add-circle"
                  size={27}
                  style={styles.addIcon}
                />
                <Text style={styles.buttonText}>Add Another Vehicle</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <View style={styles.transparentBtn}>
                <Text style={{ color: "#DF3111" }}>Skip For Now</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity onPress={handleOnSubmit}>
              <View style={styles.buttonStyle}>
                <Text style={styles.buttonLabel}>Submit</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.tos}>
              <Text style={styles.text}>By continuing you agree to </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("RegisterNumber")}
              >
                <Text style={styles.linkText}>Terms and Service </Text>
              </TouchableOpacity>
              <Text style={styles.text}>and </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("RegisterNumber")}
              >
                <Text style={styles.linkText}>Privacy Policy </Text>
              </TouchableOpacity>
            </View>
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
  optional: {
    marginTop: 30,
    marginBottom: 2,
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
  transparentBtn: {
    borderWidth: 1,
    borderColor: "#DF3111",
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    borderRadius: 10,
    padding: 5,
    height: 40,
  },
  buttonStyle: {
    marginVertical: 5,
    flexDirection: "row",
    backgroundColor: "#DF3111",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    borderRadius: 10,
    padding: 5,
    height: 40,
  },
  buttonGray: {
    backgroundColor: "#E1E1E1",
  },
  buttonLabel: {
    color: "#fff",
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
  },

  imageContainer: {
    padding: 30,
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: "cover",
  },
  addIcon: {
    position: "absolute",
    alignSelf: "center",
    left: 40,
    color: "#ACACAC",
  },
  tos: {
    bottom: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    maxWidth: 300,
    marginTop: 2,
  },
  linkText: {
    color: "#229BDF",
    textDecorationLine: "underline",
    fontSize: 12,
  },
  text: {
    fontSize: 12,
  },
});
