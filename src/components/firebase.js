// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHg-XJsvHa9Dk4unkCx-qr0ahmHq7qEXs",
  authDomain: "gym-application-e5de5.firebaseapp.com",
  projectId: "gym-application-e5de5",
  storageBucket: "gym-application-e5de5.appspot.com",
  messagingSenderId: "163946345653",
  appId: "1:163946345653:web:1d932525ffbaab17167afc"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const db=getFirestore(app);
// Initialize Firebase
