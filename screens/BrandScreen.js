import React, { useEffect, useState } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase";

import ListItem from "../components/ListItem";

const BrandScreen = ({ navigation }) => {
  const [listBrand, setListBrand] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "brand"), orderBy("make", "asc"));
    onSnapshot(q, (querySnapshot) => {
      setListBrand(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    console.log("run at once");
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.vehicleWrapper}>
        {listBrand.map((brand) => (
          <ListItem
            key={brand?.id}
            id={brand?.id}
            isBrand={true}
            name={brand?.data?.make}
            img={brand?.data?.img_url}
          />
        ))}
      </View>
    </View>
  );
};

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
