// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrvB-0akSFeKSlfkiW9NpiCRBBpC6Nz_s",
  authDomain: "crud-a536f.firebaseapp.com",
  databaseURL:"https://crud-a536f-default-rtdb.firebaseio.com/",
  projectId: "crud-a536f",
  storageBucket: "crud-a536f.firebasestorage.app",
  messagingSenderId: "417930835088",
  appId: "1:417930835088:web:c57cb4339725fc9aa39415"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app