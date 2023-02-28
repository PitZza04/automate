import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useFetchEmergency } from "../hooks/emergency";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const EmergencyInfo = ({ navigation }) => {
  const { data, isLoading, isError, error } = useFetchEmergency();
  const handleLogout = () => {
    signOut(auth);
  };
  return (
    <View style={styles.container}>
      <Text>EmergencyInfo</Text>

      <TouchableOpacity
        onPress={handleLogout}
        style={{
          margin: 10,
          width: "50%",
          padding: 20,
          backgroundColor: "red",
          alignItems: "center",
          borderRadius: 20,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("ScreenTest")}
        style={{
          margin: 10,
          width: "50%",
          padding: 20,
          backgroundColor: "red",
          alignItems: "center",
          borderRadius: 20,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>go to screen test</Text>
      </TouchableOpacity>

      <View style={styles.wrapper}>
        {data?.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text>{item.message}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default EmergencyInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    backgroundColor: "orange",
    borderRadius: 10,
    marginBottom: 10,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
