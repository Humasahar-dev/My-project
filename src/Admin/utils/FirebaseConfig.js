// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage }from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB14qZlj11LYnlp1WWTyBA_Atr1aoY86N4",
  authDomain: "my-api-5d116.firebaseapp.com",
  projectId: "my-api-5d116",
  storageBucket: "my-api-5d116.appspot.com",
  messagingSenderId: "874918321430",
  appId: "1:874918321430:web:6ef7b141006ea826cdc437"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)