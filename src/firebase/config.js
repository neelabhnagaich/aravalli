import firebase from 'firebase/compat/app'

//image storage
import 'firebase/compat/storage'

//database
import 'firebase/compat/firestore'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd7ZaK8fDNk_wkS9MJFtM4S4p_bot95_U",
  authDomain: "aravalli-6396a.firebaseapp.com",
  projectId: "aravalli-6396a",
  storageBucket: "aravalli-6396a.appspot.com",
  messagingSenderId: "308514311210",
  appId: "1:308514311210:web:56b1eec87e21a51a564753"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage()

const projectFirestore = firebase.firestore()

const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export   {projectStorage,projectFirestore,timeStamp}