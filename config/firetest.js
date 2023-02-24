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
import { auth, db } from "../config/firebase";

const SERVICES_REF = collection(db, "services");
export const readServices = async () => {
  try {
    const response = await getDocs(SERVICES_REF);
    const allServices = [];
    response?.forEach((doc) => {
      allServices.push({ ...doc.data(), id: doc.id });
    });
    return allServices;
  } catch (error) {
    console.log("Error:", error.message);
  }
};
