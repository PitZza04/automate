import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export const readServices = async () => {
  const servicesRef = collection(db, "services");
  const response = await getDocs(servicesRef);
  return response.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const addServices = async (text) => {
  const docRef = await addDoc(collection(db, "services"), { text });
  return { id: docRef.id, text };
};
