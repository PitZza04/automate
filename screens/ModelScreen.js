import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
const windowHeight = Dimensions.get("window").height;
const boxWidth = Dimensions.get("window").width / 4 - 17;
import brands from "../data/brands";

import ListItem from "../components/ListItem";

const ModelScreen = ({ route, navigation }) => {
  const { models, id } = route.params;
  const brandID = id;
  console.log(brandID);
  console.log(models);

  return (
    <View style={styles.container}>
      <View style={styles.vehicleWrapper}>
        {/* {models.map(({ id, name, img }) => (
          <ListItem key={id} id={id} name={name} isBrand={false} img={img} />
        ))} */}
      </View>
    </View>
  );
};

export default ModelScreen;

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
