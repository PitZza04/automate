import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { getModelList } from "../config/firestore";
import ListItem from "../components/ListItem";

const ModelScreen = ({ route, navigation }) => {
  const { brand_id, brandName } = route.params;
  const [listModel, setListModel] = useState([]);
  useEffect(() => {
    const fetchModelList = async () => {
      setListModel(await getModelList(brand_id));
    };
    fetchModelList();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.vehicleWrapper}>
          {listModel?.map(({ id, name, img_url }) => (
            <ListItem
              key={id}
              id={id}
              modelName={name}
              isBrand={false}
              img={img_url}
              brand_id={brand_id}
              brandName={brandName}
            />
          ))}
        </View>
      </ScrollView>
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
