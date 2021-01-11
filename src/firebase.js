import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDoODMipYkNWWHJGHFKlngm37EJX1TpepU",
    authDomain: "hito-fake.firebaseapp.com",
    projectId: "hito-fake",
    storageBucket: "hito-fake.appspot.com",
    messagingSenderId: "393900405038",
    appId: "1:393900405038:web:190b6840024011862e8abf",
    measurementId: "G-9LZGH1FBER"
};
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
export {db, firebase}