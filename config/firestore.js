import {
  collection,
  getDocs,
  onSnapshot,
  doc,
  setDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { getDownloadURL } from "./storage";

const VEHICLE_COLLECTION = "vehicle";

export const getModelList = async (brand_id) => {
  const modelsRef = collection(db, "brand", brand_id, "model");
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
