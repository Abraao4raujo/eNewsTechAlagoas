import { signInWithEmailAndPassword } from "firebase/auth";

export default async function loginUser(
  auth,
  email,
  password,
  setUserIsConnected
) {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("conectado")
      setUserIsConnected(true);
      return user;
    })
    .catch((error) => {
      window.alert("Dados invalidos!");
    });
}
