import { StyleSheet, View } from "react-native";
import React from "react";

const Layout = ({ children }) => {
  return (
    <View style={{ backgroundColor: "#D31111", flex: 1 }}>{children}</View>
  );
};

export default Layout;
