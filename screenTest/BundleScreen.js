import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { loadBundle, namedQuery, getDocs } from "firebase/firestore";
import "firebase/firestore/bundle";
import { db } from "../config/firebase";

const BundleScreen = () => {
  async function fetchFromBundle() {
    const resp = await fetch("/createBundle");
    // const bundle = await loadBundle(db, resp.body);
    // const bundle = await resp.body();
    // await loadBundle(db, bundle);

    // // Query the results from the cache
    // // Note: omitting "source: cache" will query the Firestore backend.
    // const query = await namedQuery("model-query");
    // const modelSnap = await getDocs(query, { source: "cache" });

    // // Use the results
    // // ...
    // return JSON.parse(JSON.stringify(modelSnap));
    console.log(resp.body);
  }
  console.log(fetchFromBundle());
  return (
    <View>
      <Text>BundleScreen</Text>
    </View>
  );
};

export default BundleScreen;

const styles = StyleSheet.create({});
