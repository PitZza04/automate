import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { signOut } from "@firebase/auth";
import { auth } from "../config/firebase";
import { useFetchAllServices } from "../redux/actions/servicesSlice";
import { useSelector, useDispatch } from "react-redux";
import { uuidv4 } from "@firebase/util";
import {
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import {
  fetchUserVehicle,
  createEmergencyInfo,
  fetchEmergencyInfo,
  updateEmergencyInfo,
  deleteEmergencyInfo,
} from "../config/firestore";

import { readServices } from "../config/firetest";
const TestScreen = ({ navigation }) => {
  const isClicked = () => {};
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.services.isLoading);
  const servicesData = useSelector((state) => state.services.data);
  const [userVehicleList, setUserVehicleList] = useState([]);
  const [services, setServices] = useState([]);
  const [emergencyInfo, setEmergencyInfo] = useState([]);
  // useEffect(() => {
  //   const fetchUserVehicleLists = async () => {
  //     setUserVehicleList(await fetchUserVehicle(userId));
  //   };
  //   fetchUserVehicleLists();
  // }, []);
  const handleLogout = async () => {
    signOut(auth);
  };

  useEffect(() => {
    dispatch(useFetchAllServices());
  });

  // useEffect(() => {
  //   const fetchEmergencyInfoList = async () => {
  //     setEmergencyInfo(await fetchEmergencyInfo());
  //   };
  //   fetchEmergencyInfoList();
  // }, []);

  // useEffect(() => {
  //   const fetchServices = async () => {
  //     setServices(await readServices());
  //   };
  //   fetchServices();
  //   console.log("services:", services);
  // }, []);

  const RenderVehicle = ({ id, fuelType, vehicleDetail, img_url }) => {
    return <View></View>;
  };
  // const { brandName } = vehicleDetail;

  // const handlePressedItem = async (id) => await deleteEmergencyInfo(id);
  // await updateEmergencyInfo(id, { message: "Need help ASAP" });
  const handlePress = async () => {
    await createEmergencyInfo();
  };

  const Services = (props) => {
    const { name, id } = props;

    return (
      <View key={uuidv4()} style={{ alignItems: "center" }}>
        <TouchableOpacity onPress={() => navigation.navigate()}>
          <View
            key={id}
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              height: 110,
              width: 100,
              borderWidth: 1,
              borderRadius: 15,
              borderColor: "#ececec",
              elevation: 10,
            }}
          >
            <FontAwesome5 name="car-crash" size={28} color="#DF3111" />
            <Text
              style={{
                marginTop: 2,
                color: "black",
                fontSize: 12,
              }}
            >
              {name}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <Text>TestScreen</Text>
      {emergencyInfo?.map((item) => (
        <View key={item.id}>
          <TouchableOpacity
            onPress={() => handlePressedItem(item.id)}
            style={{ borderWidth: 1, borderColor: "green", padding: 10 }}
          >
            <Text>{item.message}</Text>
          </TouchableOpacity>
        </View>
      ))}
      {userVehicleList.map(({ id, fuelType, vehicleDetail, img_url }) => (
        <RenderVehicle
          key={id}
          id={id}
          fuelType={fuelType}
          vehicleDetail={vehicleDetail}
          img_url={img_url}
        />
      ))}

      <TouchableOpacity onPress={handleLogout} style={{ marginBottom: 10 }}>
        <View style={styles.loginButton}>
          <Text style={styles.textLogin}>Logout</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{ marginBottom: 10 }}
      >
        <View style={styles.loginButton}>
          <Text style={styles.textLogin}>Go to Home</Text>
        </View>
      </TouchableOpacity>
      <View>
        {servicesData?.map(({ name, id }) => (
          <Services name={name} id={id} />
        ))}
      </View>
    </View>
  );
};
// return (
//   <View style={styles.container}>
//     <Text>{user?.email || user}</Text>
//     <Text>HomeScreen</Text>
//
//     <TouchableOpacity onPress={handlePress} style={{ marginBottom: 10 }}>
//       <View style={styles.loginButton}>
//         <Text style={styles.textLogin}>Enter Data</Text>
//       </View>
//     </TouchableOpacity>

export default TestScreen;

const styles = StyleSheet.create({
  loginButton: {
    marginVertical: 15,
    backgroundColor: "#DF3111",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    borderRadius: 10,
    padding: 5,
    height: 40,
  },
  textLogin: {
    color: "#fff",
  },
});
