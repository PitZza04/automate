import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import React, { useState } from "react";

import { storage } from "../config/firebase";
import { useNavigation } from "@react-navigation/native";
import { ref, getDownloadURL } from "firebase/storage";

const boxWidth = Dimensions.get("window").width / 4 - 17;

const ListItem = ({ id, name, isBrand, img, brand_id }) => {
  const navigation = useNavigation();
  const handleBrand = async (id, name) => {
    navigation.navigate("Model", {
      brand_id: id,
      brand: name,
    });
  };
  const handleModel = (brandID, id) => {
    navigation.navigate("VehicleRegister", {
      modelId: id,
      brandId: brandID,
    });
    console.log(`model ID: ${id}`);
    console.log(`Brand ID: ${brandID}`);
  };
  const handleImage = (uri) => {
    const gsReference = ref(storage, uri);
    getDownloadURL(gsReference)
      .then((url) => {
        return url;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <TouchableOpacity
        onPress={
          isBrand
            ? () => handleBrand(id, name)
            : () => handleModel(brand_id, id)
        }
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
