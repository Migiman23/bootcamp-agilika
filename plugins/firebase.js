import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/functions';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: process.env.firebaseApiKey,
    authDomain: process.env.firebaseAuthDomain,
    projectId: process.env.firebaseProjectId,
    storageBucket: process.env.firebaseStorageBucket,
    messagingSenderId: process.env.firebaseMessagingSenderId,
    appId: process.env.firebaseAppId
};

// ------------- ACTIVAR PARA USAR FIREBASE EMULATORS ------------- //

// if(location.hostname === "localhost"){
//       firebaseConfig = {
//             projectId: "my-test-project",
//             auth: { uid: "admin", email: "admin@admin.com" }

//       }
// }

//firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {firebase, db, auth, storage}