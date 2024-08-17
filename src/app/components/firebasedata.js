// lib/firebase.js

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, push } from "firebase/database";

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
const db = getDatabase(app);

export function writeBlogData(title, description, date, authorName, vote) {
  const reference = ref(db, 'Blogs');
  const pus_ref = push(reference);
  return set(pus_ref, {
    Title: title,
    Description: description,
    Date: date,
    AuthorName: authorName,
    Vote: vote
  });
}

export function listenToBlogs(callback) {
  const blogsRef = ref(db, 'Blogs');
  onValue(blogsRef, (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
}
