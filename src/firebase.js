// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo7upBSgSqf5P5-Siv5Alee5MsXaVizjI",
  authDomain: "custom-components-b761b.firebaseapp.com",
  projectId: "custom-components-b761b",
  storageBucket: "custom-components-b761b.appspot.com",
  messagingSenderId: "1066137568263",
  appId: "1:1066137568263:web:0ea1cebc489873f74f16a2",
  measurementId: "G-3NF5NYKHXW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
