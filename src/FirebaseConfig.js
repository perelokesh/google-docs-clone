import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCDUnmdG4cToDosHfoI_HwBfWb4Me1qDTc",
  authDomain: "doc-48205.firebaseapp.com",
  projectId: "doc-48205",
  storageBucket: "doc-48205.appspot.com",
  messagingSenderId: "1064836639851",
  appId: "1:1064836639851:web:492ca2bdd092b5203a552e"
};

const app = !firebase.apps.length 
                 ? firebase.initializeApp(firebaseConfig)
                 : firebase.app();
const db = app.firestore();
export { db };                 