import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import brands from "../data/brands";
const boxWidth = Dimensions.get("window").width / 4 - 17;

const ListItem = ({ id, name, isBrand, img }) => {
  const navigation = useNavigation();
  const handleBrand = () => {
    navigation.navigate("Model", {
      id: id,
      brand: name,
      img: img,
    });
  };
  const handleModel = (brandID, id) => {
    console.log(id);
    console.log(brandID);
    const data = brands[brandID - 1].brand;
    const data2 = brands[brandID - 1].models[id - 1].name;
    // console.log(data);
    // console.log(data2);
  };

  return (
    <>
      <TouchableOpacity
        onPress={isBrand ? handleBrand : () => handleModel(brandID, id)}
      >
        <View style={[styles.boxWrapper, styles.shadowStyle]}>
          <View style={styles.brandWrapper}>
            <View style={styles.imageWrapper}>
              <Image
                style={{ height: 70, width: 70, resizeMode: "contain" }}
                source={{ uri: img }}
              />
            </View>
            <Text style={styles.brand}>{name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  brandWrapper: {
    width: boxWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  modelWrapper: {
    flex: 1,
  },
  brand: {
    fontSize: 11,
    fontWeight: "700",
  },
  boxWrapper: {
    height: 100,
    marginHorizontal: 5,
    marginBottom: 15,
    borderRadius: 10,
  },
  shadowStyle: {
    borderWidth: 1,
    borderColor: "#DADADA",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  imageWrapper: {
    height: 80,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
