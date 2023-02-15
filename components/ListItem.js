import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const boxWidth = Dimensions.get("window").width / 4 - 17;

const ListItem = ({ id, isBrand, img, brand_id, brandName, modelName }) => {
  const navigation = useNavigation();
  const handleBrand = async (id, name) => {
    navigation.navigate("Model", {
      brand_id: id,
      brandName: brandName,
    });
  };
  const handleModel = (brand_id, id, brandName, modelName) => {
    navigation.navigate("VehicleRegister", {
      modelId: id,
      brandId: brand_id,
      brandName: brandName,
      modelName: modelName,
    });
  };

  return (
    <>
      <TouchableOpacity
        onPress={
          isBrand
            ? () => handleBrand(id, brandName)
            : () => handleModel(brand_id, id, brandName, modelName)
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
            <Text style={styles.brand}>{isBrand ? brandName : modelName}</Text>
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
