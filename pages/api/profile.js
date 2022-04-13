import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebase.js";

export default async function profileData(req, res, next) {
  const params = req.query;
  const method = req.method;
  if (method === "GET") {
    const userid = params.uid;
    const docPath = "user/user_" + userid + "/profile/profile_" + userid;
    const docRef = doc(db, docPath);
    try {
      const docSnap = await getDoc(docRef);
      res.status(200).json({
        docId: docSnap.id,
        data: docSnap.data(),
      });
    } catch (err) {
      res.json({
        errorMsg: "Data Failed to load or document is does not exist",
        error: err,
      });
    }
  }
}

export async function addProfileData(userid, profileData) {
  const docPath = "user/user_" + userid + "/profile/profile_" + userid;
  const docRef = doc(db, docPath);
  try {
    await setDoc(docRef, profileData, { merge: true });
  } catch (err) {
    console.log(err);
  }
}

export async function getProfileData(userid) {
  const docPath = "user/user_" + userid + "/profile/profile_" + userid;
  const docRef = doc(db, docPath);
  try {
    const docSnap = await getDoc(docRef);
    return {
      docId: docSnap.id,
      data: docSnap.data(),
    };
  } catch (err) {
    return { errorMsg: "Data Failed to load or document is does not exist" };
  }
}
