// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAXexY882uohbFK3K3xYX-YWjum3LlHK64",
  authDomain: "not-3a66d.firebaseapp.com",
  projectId: "not-3a66d",
  storageBucket: "not-3a66d.appspot.com",
  messagingSenderId: "528246811137",
  appId: "1:528246811137:web:8cb025ebcedae63c69ee00",
  measurementId: "G-5CV5WD73J9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
