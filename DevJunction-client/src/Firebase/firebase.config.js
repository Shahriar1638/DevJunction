// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzVOStGrHJCIoOP1EBF1lMLgaQLoXPv7w",
  authDomain: "simple-project-2-687f2.firebaseapp.com",
  projectId: "simple-project-2-687f2",
  storageBucket: "simple-project-2-687f2.appspot.com",
  messagingSenderId: "299520740409",
  appId: "1:299520740409:web:3a6bd52722e02dc32f11e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

