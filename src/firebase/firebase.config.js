// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAR-6kvqqLkuiDW6GskF6Pwciti2SvkgCU",
    authDomain: "the-news-dragon-client-4e640.firebaseapp.com",
    projectId: "the-news-dragon-client-4e640",
    storageBucket: "the-news-dragon-client-4e640.appspot.com",
    messagingSenderId: "11842839475",
    appId: "1:11842839475:web:9598969e50ce48b17ca1c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;