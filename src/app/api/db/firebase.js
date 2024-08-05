// lib/firebase.js

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCx17DD9rMh2-fiu0uzL9G5z1SHeEHYW4M",
    authDomain: "agrimkulshreshtha69.firebaseapp.com",
    databaseURL: "https://agrimkulshreshtha69-default-rtdb.firebaseio.com",
    projectId: "agrimkulshreshtha69",
    storageBucket: "agrimkulshreshtha69.appspot.com",
    messagingSenderId: "629402076145",
    appId: "1:629402076145:web:3634288be662a8d8127a50",
    measurementId: "G-9DY0QF9704"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, onValue };
