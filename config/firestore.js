import {
  collection,
  getDocs,
  getDoc,
  onSnapshot,
  doc,
  deleteDoc,
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
  console.log("getModelList is triggered");
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
{
  /* Creating Emergency Document */
}

export const createEmergencyInfo = async () => {
  const dbRef = collection(db, "emergency_info");
  const data = {
    emergency_type: "accident",
    phoneNumber: "09391302519",
    message: "Need help, in front of bongbongs Alijis",
    uid: "YJIMKxy3LUWcrLKtAgp1uTxOhR03",
    vehicleInfo: "3ZfXXm5EDu10cqWWo5iW",
  };
  try {
    await addDoc(dbRef, { ...data });
  } catch (error) {
    console.log(error.message);
  }
};
export const fetchEmergencyInfo = async () => {
  console.log("FetchEmergencyInfo called");
  const dbRef = collection(db, "emergency_info");
  const snapshot = await getDocs(dbRef);
  let emergencyInfo = [];

  snapshot?.forEach((doc) => {
    emergencyInfo.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return emergencyInfo;
};

export const updateEmergencyInfo = async (id, data) => {
  try {
    const dbRef = doc(db, "emergency_info", id);
    await setDoc(dbRef, { ...data }, { merge: true });
    //console.log(snapshot.data());
  } catch (error) {
    console.log("error:", error);
  }
};
export const deleteEmergencyInfo = async (id) => {
  try {
    const dbRef = doc(db, "emergency_info", id);
    await deleteDoc(dbRef);
  } catch (error) {
    console.log("error:", error);
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

//Update Image Url
// const docRefToUpdate = doc(
//   db,
//   "brand",
//   brand_id,
//   "model",
//   documentSnapshot.id
// );
// const img_url = documentSnapshot.data()["img_url"];
// console.log(img_url);
// await setDoc(
//   docRefToUpdate,
//   {
//     ...documentSnapshot.data(),
//     img_bucket: img_url,
//     img_url: await getDownloadURL(img_url),
//   },
//   { merge: true }
// );
