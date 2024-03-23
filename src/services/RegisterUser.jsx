import { createUserWithEmailAndPassword } from "firebase/auth";
import loginUser from "./loginUser";

export function registerUser(auth, email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Usuario cadastrado com sucesso! ");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Não foi possivel cadastrar usuario no momento!");
    });
}
