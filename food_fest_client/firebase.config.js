// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log(import.meta.env.VITE_APIKEYS)
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnmpmv5LjHLFifINrklGanGOBc0KO_S1Y",
  authDomain: "chef-14558.firebaseapp.com",
  projectId: "chef-14558",
  storageBucket: "chef-14558.appspot.com",
  messagingSenderId: "667515223948",
  appId: "1:667515223948:web:9f1332c2f1ac8c19dda0a9"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);