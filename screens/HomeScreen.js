import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAuth } from "../hooks/useAuth";
const HomeScreen = () => {
  const user = useAuth();
  return (
    <View style={{ marginTop: 50 }}>
      <Text>HomeScreen</Text>
      <Text>{user.email}</Text>
      <Text>{user.uid}</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
