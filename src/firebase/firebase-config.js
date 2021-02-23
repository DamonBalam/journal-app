import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

// console.log(process.env);

const firebaseConfig = {
    apiKey: 'AIzaSyCdzLvZASTNLyO4Gl_TXYgAupiw-NCpKN0',
    authDomain: 'react-app-curso-95e2d.firebaseapp.com',
    projectId: 'react-app-curso-95e2d',
    storageBucket: 'react-app-curso-95e2d.appspot.com',
    messagingSenderId: '486935253923',
    appId: '1:486935253923:web:1437b786be706c728d8016',
};

const firebaseConfigTesting = {
    apiKey: 'AIzaSyACBoM95_Em_9xaA7T2hWdxIlcMQU6jIJU',
    authDomain: 'journal-testing-cdea0.firebaseapp.com',
    projectId: 'journal-testing-cdea0',
    storageBucket: 'journal-testing-cdea0.appspot.com',
    messagingSenderId: '953894116279',
    appId: '1:953894116279:web:3119454ecb40782405a632',
};

if (process.env.NODE_ENV === 'test') {
    // ? TEST
    firebase.initializeApp(firebaseConfigTesting);
} else {
    // ? DEV/PROD
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
