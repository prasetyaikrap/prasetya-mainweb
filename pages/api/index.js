import { collection, getDocs } from "firebase/firestore";
import app, { db } from "../../middleware/firebase.js";

export default async (req, res) => {
  const collRef = collection(db, "test-db");
  const docSnap = await getDocs(collRef);
  let data = [];
  docSnap.forEach((doc) => {
    data.push(doc.data());
  });
  res.status(200).json(data);
};
