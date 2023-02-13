import { ref, getDownloadURL as getStorageDownloadURL } from "firebase/storage";
import { db, storage } from "../config/firebase";

export const getDownloadURL = async (bucket) => {
  return await getStorageDownloadURL(ref(storage, bucket));
};
