import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDeGjR-FFV68jjTG8AJc4OdpKaVz7_-jDY",
  authDomain: "taskmanager-25e6d.firebaseapp.com",
  projectId: "taskmanager-25e6d",
  storageBucket: "taskmanager-25e6d.appspot.com",
  messagingSenderId: "189010405890",
  appId: "1:189010405890:web:7a90f9fd218d8261c2551b",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
