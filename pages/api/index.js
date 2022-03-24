import { collection, getDocs } from "firebase/firestore";
import app, { db } from "../../middleware/firebase.js";

export default async function loadDB(req, res) {
  res.status(200).json({ message: "Home API Route" });
}
