import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
const windowHeight = Dimensions.get("window").height;
const boxWidth = Dimensions.get("window").width / 4 - 17;
import brands from "../data/brands";

import ListItem from "../components/ListItem";

const BrandScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.vehicleWrapper}>
      {brands.map(({ id, brand, models, img }) => (
        <ListItem key={id} id={id} name={brand} models={models} img={img} />
      ))}
    </View>
  </View>
);

export default BrandScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fafafa",
  },
  vehicleWrapper: {
    marginTop: 20,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
});
