import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export async function getNews(setN1) {
  const querySnapshot = await getDocs(collection(db, "news"));
  const data = [];

  querySnapshot.forEach((doc) => {
    data.push(doc.data());
  });

  if (data.length > 0) {
    setN1(data);
    return data;
  } else {
    console.log("No documents");
  }
}

export async function getSpecificNews(id) {
  const querySnapshot = await getDocs(collection(db, "news"));
  const data = [];
  const numberId = parseInt(id);

  querySnapshot.forEach((doc) => {
    const newsData = doc.data();

    if (newsData.id === numberId) {
      data.push(newsData);
    }
  });

  return data;
}
