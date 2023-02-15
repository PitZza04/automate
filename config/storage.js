import {
  ref,
  getDownloadURL as getStorageDownloadURL,
  uploadBytes,
  getBlob,
} from "firebase/storage";
import { format } from "date-fns";
import { db, storage } from "../config/firebase";

const BUCKET_URL = "gs://auto-mate-dev.appspot.com";
export const getDownloadURL = async (bucket) => {
  return await getStorageDownloadURL(ref(storage, bucket));
};

export const uploadImage = async (imageUri, uid) => {
  let fileName = imageUri.substring(imageUri.lastIndexOf("/") + 1);
  const formattedDate = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss'Z'");
  const bucket = `${BUCKET_URL}/${uid}/${formattedDate}${fileName}`;
  await uploadBytes(ref(storage, bucket), imageUri);
  return bucket;
};
