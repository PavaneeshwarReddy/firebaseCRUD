// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7sfmzrW74hpVVq_hJtkFtnzlMOVtBxck",
  authDomain: "taskmanagementapp-382d9.firebaseapp.com",
  databaseURL: "https://taskmanagementapp-382d9-default-rtdb.firebaseio.com",
  projectId: "taskmanagementapp-382d9",
  storageBucket: "taskmanagementapp-382d9.appspot.com",
  messagingSenderId: "330645852678",
  appId: "1:330645852678:web:28cb64b2bc1368a012e987"
};

// Initialize Firebase
const RealTimeDataBase = initializeApp(firebaseConfig);
export {RealTimeDataBase};
