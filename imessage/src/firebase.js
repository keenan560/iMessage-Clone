import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCRnNqD54R7u9eIUWSwlEVk2Q07zw0ijYQ",
  authDomain: "imessage-1f7b8.firebaseapp.com",
  databaseURL: "https://imessage-1f7b8.firebaseio.com",
  projectId: "imessage-1f7b8",
  storageBucket: "imessage-1f7b8.appspot.com",
  messagingSenderId: "506342098601",
  appId: "1:506342098601:web:62c7e77891185e8cac0bb8",
  measurementId: "G-K2SR0TDLSE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
