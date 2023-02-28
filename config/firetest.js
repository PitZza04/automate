import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";

export const readServices = async () => {
  console.log("readServices is called");
  const servicesRef = collection(db, "services");
  const response = await getDocs(servicesRef);
  return response.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const addServices = async (data) => {
  const docRef = await addDoc(collection(db, "services"), { ...data });
  return { id: docRef.id, ...data };
};

export const deleteServices = async (id) => {
  const docRef = await deleteDoc(doc(db, "services", id)).catch(() =>
    console.log("nag error")
  );
  return { id: id };
};

export const updateServices = async (id, newData) => {
  const docRef = await setDoc(doc(db, "services", id), {
    ...newData,
  });

  return { id: id };
};

export const readAllModel = async () => {
  const docRef = collection(db, "brand/model");
  const subCollectionRef = await getDocs(docRef);
  const subCollectionId = subCollectionRef?.docs?.map((doc) => doc.id);
  return subCollectionId;
};
