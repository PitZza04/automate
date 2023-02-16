import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { signOut, getAuth } from "@firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserVehicle } from "../config/firestore";
const HomeScreen = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [userVehicleList, setUserVehicleList] = useState([]);
  const userId = user.uid;
  console.log(userId);
  useEffect(() => {
    const fetchUserVehicleLists = async () => {
      setUserVehicleList(await fetchUserVehicle(userId));
    };
    fetchUserVehicleLists();
  }, []);

  const RenderVehicle = ({ id, fuelType, vehicleDetail, img_url }) => {
    const { brandName } = vehicleDetail;
    return (
      <View>
        <Text>{fuelType}</Text>
        <Text>{brandName}</Text>

        <Image
          source={{ uri: img_url }}
          style={{ resizeMode: "contain", height: 100, width: 100 }}
        />
      </View>
    );
  };

  const handleLogout = async () => {
    signOut(auth);
  };

  return (
    <View style={styles.container}>
      <Text>{user?.email || user}</Text>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={handleLogout} style={{ marginBottom: 10 }}>
        <View style={styles.loginButton}>
          <Text style={styles.textLogin}>Logout</Text>
        </View>
      </TouchableOpacity>
      {userVehicleList.map(({ id, fuelType, vehicleDetail, img_url }) => (
        <RenderVehicle
          key={id}
          id={id}
          fuelType={fuelType}
          vehicleDetail={vehicleDetail}
          img_url={img_url}
        />
      ))}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
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
