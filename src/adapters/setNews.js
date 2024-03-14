import { db } from "./firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
const date = new Date();

// ADICIONAR UMA NOVA NOTICIA
// setNews(
//   "romance",
//   "fulano de tal ta namorando.2",
//   "eu vi eles na rua2",
//   "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg2",
//   "anonimo para não dedurar2"
// );

export default async function setNews(categoria, title, desc, image_url, auth) {
  await setDoc(doc(db, categoria, uuidv4()), {
    auth: auth,
    title: title,
    desc: desc,
    image_url: image_url,
    data: date.toLocaleDateString(),
  }).then(() => {
    console.log("Noticia enviada com sucesso!");
  });
}
