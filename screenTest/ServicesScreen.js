import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { useAddServices, useFetchServices } from "../hooks/useFetchServices";
import { FontAwesome5 } from "react-native-vector-icons";
const ServicesScreen = () => {
  const { data, isLoading, isError, error } = useFetchServices();
  console.log(data);
  const { mutate } = useAddServices;
  const Services = ({ item }) => {
    return (
      <View style={{ alignItems: "center" }}>
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
      </View>
    );
  };
  const handleSubmit = () => {
    mutate("Inspection");
  };
  return (
    <View style={styles.container}>
      <Text>TestScreen</Text>
      <TouchableOpacity
        style={{
          margin: 20,
          backgroundColor: "red",
          height: 60,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 20, padding: 10 }}>
          Logout
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleSubmit}
        style={{
          margin: 20,
          backgroundColor: "red",
          height: 60,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 20, padding: 10 }}>
          Add Services
        </Text>
      </TouchableOpacity>

      <FlatList
        data={data}
        renderItem={Services}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
