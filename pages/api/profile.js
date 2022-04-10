import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../middleware/firebase.js";

export default async function profileData(req, res, next) {
  console.log(req.body);
  res.status(200).json({ name: "Profile data API" });
}

export async function addProfileData(userid, profileData) {
  const userDocId = "user_" + userid;
  const profileDocId = "profile_" + userid;
  const docRef = doc(db, "user", userDocId, "profile", profileDocId);
  try {
    await setDoc(docRef, profileData, { merge: true });
  } catch (err) {
    console.log(err);
  }
}

export async function getProfileData(userid) {
  const userDocId = "user_" + userid;
  const profileDocId = "profile_" + userid;
  const docRef = doc(db, "user", userDocId, "profile", profileDocId);
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
