// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm_OdWsEKhRAEcpSSrKA53UtUpA_YcYrA",
  authDomain: "chef-recipe-hunter-clien-ea96f.firebaseapp.com",
  projectId: "chef-recipe-hunter-clien-ea96f",
  storageBucket: "chef-recipe-hunter-clien-ea96f.appspot.com",
  messagingSenderId: "734401964712",
  appId: "1:734401964712:web:f3487eea06f5f83e94f09d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;