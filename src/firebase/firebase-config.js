import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCdzLvZASTNLyO4Gl_TXYgAupiw-NCpKN0',
    authDomain: 'react-app-curso-95e2d.firebaseapp.com',
    projectId: 'react-app-curso-95e2d',
    storageBucket: 'react-app-curso-95e2d.appspot.com',
    messagingSenderId: '486935253923',
    appId: '1:486935253923:web:1437b786be706c728d8016',
};


firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}