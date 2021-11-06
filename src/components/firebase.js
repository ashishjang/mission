// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeXcuw8-LuSyRbc18FE03kEbyUPxqrBS4",
  authDomain: "something-unique-aaedb.firebaseapp.com",
  databaseURL: "https://something-unique-aaedb-default-rtdb.firebaseio.com",
  projectId: "something-unique-aaedb",
  storageBucket: "something-unique-aaedb.appspot.com",
  messagingSenderId: "482792995118",
  appId: "1:482792995118:web:24140054936a908fc122bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
