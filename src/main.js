import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJxYRvEbLahY9EsKA54aHEz2Ddg2fVB3k",
  authDomain: "wad2-6e92f.firebaseapp.com",
  projectId: "wad2-6e92f",
  storageBucket: "wad2-6e92f.appspot.com",
  messagingSenderId: "154701749739",
  appId: "1:154701749739:web:44d68172badade01508dae",
  measurementId: "G-D6H98J5S3X"
};

window.$ = window.jQuery = require('jquery');

// Initialize Firebase
const fb = initializeApp(firebaseConfig);
getStorage(fb);
const db = getFirestore(fb);
db;

export {db}



// createApp(App).mount('#app')
const app = createApp(App)

app.use(router)

app.mount('#app')