import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

export function logout() {
  signOut(auth)
    .then(() => {
      alert("Usuario desconectado com sucesso!");
    })
    .catch((error) => {
      console.log(error);
    });
}
