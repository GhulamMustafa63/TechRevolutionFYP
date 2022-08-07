import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtmdkt-ANU7xaQMREmP3fxpePNmQq6Mn8",
  authDomain: "techr-67aa3.firebaseapp.com",
  projectId: "techr-67aa3",
  storageBucket: "techr-67aa3.appspot.com",
  messagingSenderId: "267636828975",
  appId: "1:267636828975:android:189708692bcf4205b2cfda",
  databaseURL: "https://techr-67aa3-default-rtdb.firebaseio.com/",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
