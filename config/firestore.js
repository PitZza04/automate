import {
  collection,
  getDocs,
  onSnapshot,
  doc,
  setDoc,
  where,
  query,
  orderBy,
  addDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { getDownloadURL } from "./storage";

const VEHICLE_COLLECTION = "vehicle";

export const getModelList = async (brand_id) => {
  const modelsRef = query(
    collection(db, "brand", brand_id, "model"),
    orderBy("name", "asc")
  );
  const snapshot = await getDocs(modelsRef);
  let allModels = [];
  for (const documentSnapshot of snapshot.docs) {
    const model = documentSnapshot.data();
    allModels.push({
      ...model,
      id: documentSnapshot.id,
      img_url: await getDownloadURL(model["img_url"]),
    });
  }
  return allModels;
};

export const addVehicle = async (...props) => {
  try {
    await addDoc(collection(db, VEHICLE_COLLECTION), ...props);
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserVehicle = async (uid) => {
  const vehicleRef = collection(db, "vehicle");
  const userVehiclesRef = query(vehicleRef, where("uid", "==", uid));
  const snapshot = await getDocs(userVehiclesRef);
  const userVehicleList = [];
  for (const documentSnapshot of snapshot.docs) {
    const vehicle = documentSnapshot.data();
    userVehicleList.push({
      ...vehicle,
      id: documentSnapshot.id,
      img_url: await getDownloadURL(vehicle["img_url"]),
    });
  }
  return userVehicleList;
  // await getDocs(userVehiclesRef)
  //   .then((querySnapshot) => {
  //     querySnapshot.forEach(async (doc) => {
  //       const vehicle = doc.data();
  //       userVehicleList.push({
  //         ...vehicle,
  //         id: doc.id,
  //         img_url: await getDownloadURL(vehicle["img_url"]),
  //       });
  //       //console.log(`${doc.id} => ${doc.data()}`);
  //     });
  //   })
  //   .catch((error) => console.log(error.message));

  // let userVehiclesList = [];
  // const snapshot = await getDocs(userVehiclesRef);

  // for (const documentSnapshot of snapshot.docs) {
  //   const vehicle = documentSnapshot.data();
  //   userVehiclesList.push({
  //     ...vehicle,
  //     id: documentSnapshot.id,
  //   });
  // }
};
