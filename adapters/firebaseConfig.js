import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2mEqmIt_QRpZMRK-StBbhvrP4kgMmF1I",
  authDomain: "enewstech-2b810.firebaseapp.com",
  projectId: "enewstech-2b810",
  storageBucket: "enewstech-2b810.appspot.com",
  messagingSenderId: "602339495981",
  appId: "1:602339495981:web:6b740ed8280f9ab25e28a4",
  measurementId: "G-KT7682Y2LW",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
