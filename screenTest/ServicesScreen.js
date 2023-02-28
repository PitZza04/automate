import React, { useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from "react-native";

import {
  useAddServices,
  useDeleteServices,
  useFetchServices,
  useUpdateServices,
} from "../hooks/services";
import { FontAwesome5 } from "react-native-vector-icons";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

import { useQueryClient } from "@tanstack/react-query";
const ServicesScreen = ({ navigation }) => {
  const {
    data: servicesData,
    isLoading,
    isError,
    error,
    refetch,
  } = useFetchServices();

  const { mutate: createServices, isLoading: createLoading } = useAddServices();
  const { mutate: deleteServices } = useDeleteServices();
  const { mutate: updateServices } = useUpdateServices();

  const handleAdd = () => {
    console.log("add Service");
    createServices({ name: "Inspection", createdAt: new Date() });
  };
  const handleDelete = (id) => {
    // deleteServices(id);
  };
  const handleUpdate = () => {
    updateServices({
      id: "q1EGpqfHKNVuCoEBxLXF",
      newData: {
        name: "Electrical Services",
        createdAt: new Date(),
      },
    });
    // deleteServices(id);
  };
  const handleLogout = () => {
    signOut(auth);
  };
  const Services = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <View
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
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Text>TestScreen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Emergency")}
        style={{
          margin: 10,
          backgroundColor: "red",
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 15, padding: 10 }}>
          Go to Emergency
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("ScreenTest")}
        style={{
          margin: 10,
          backgroundColor: "red",
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 15, padding: 10 }}>
          Go to Screen Test
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleLogout}
        style={{
          margin: 20,
          backgroundColor: "red",
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 15, padding: 10 }}>
          Logout
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={createLoading ? true : false}
        onPress={handleUpdate}
        style={{
          margin: 20,
          backgroundColor: "red",
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 15, padding: 10 }}>
          {createLoading ? "Loading...." : "Add Services"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handleDelete(1)}
        style={{
          margin: 20,
          backgroundColor: "red",
          height: 40,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 15, padding: 10 }}>
          Delete Services
        </Text>
      </TouchableOpacity>

      <View
        style={{
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "nowrap",
        }}
      >
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          // data?.map((item) => <Services key={item.id} item={item} />)
          <FlatList
            data={servicesData}
            renderItem={Services}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        )}
      </View>
    </View>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
