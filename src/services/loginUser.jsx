import { signInWithEmailAndPassword } from "firebase/auth";

export default async function loginUser(auth, email, password, setModalAuth) {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setModalAuth(false);
      return user;
    })
    .catch((error) => {
      window.alert("Dados invalidos!");
    });
}
