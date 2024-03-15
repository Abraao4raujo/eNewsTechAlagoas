import { db } from "./firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
const date = new Date();

export default async function setNews(title, desc, image_url, auth) {
  await setDoc(doc(db, "news", uuidv4()), {
    auth: auth,
    title: title,
    desc: desc,
    image_url: image_url,
    data: date.toLocaleDateString(),
  }).then(() => {
    console.log("Noticia enviada com sucesso!");
  });
}
