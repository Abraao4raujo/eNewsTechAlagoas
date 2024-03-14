import { db } from "./firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

export default async function getNews() {
  const q = query(collection(db, "romance"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}
