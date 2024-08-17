
import { initializeApp } from "firebase/app";
import { getDatabase, ref ,set, onValue , push} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const db =getDatabase();
// function writeUserData(userid, name, email){

// const reference =ref(db,'bolgs/' + userid);
// set(reference,{
//   username: name,
//   email: email,

// });
// }

function writeBlogData(title, description, date, authorName , vote) {
  const reference = ref(db, 'Blogs' );
  const pus_ref = push(reference);
  set(pus_ref, {
      Title: title,
      Description: description,
      Date: date,
      AuthorName: authorName,
      Vote:vote
  });
}
// writeBlogData("Title1","Description","1/2/20030", "Agrim");
writeBlogData("The Role of Renewable Energy in Sustainable Development","Description","1/2/20030", "Agrim", "3");
writeBlogData("Sustainable Agriculture: Practices for a Greener Future","Description","1/2/20030", "Agrim", "3");
writeBlogData("Urban Planning for Sustainability: Creating Green Cities","Description","1/2/20030", "Agrim", "3");
writeBlogData("The Circular Economy: Redefining Waste and Resource Use","Description","1/2/20030", "Agrim", "3");
writeBlogData("Water Conservation Strategies in a Changing Climate","Description","1/2/20030", "Agrim", "3");
writeBlogData("Sustainable Fashion: From Fast Fashion to Eco-Friendly Choices","Description","1/2/20030", "Agrim", "3");
writeBlogData("The Impact of Climate Change on Biodiversity and Ecosystems","Description","1/2/20030", "Agrim", "3");
writeBlogData("Sustainable Development Goals (SDGs): Progress and Challenges","Description","1/2/20030", "Agrim", "3");



// writeUserData("1", "Topic","Agrim@gmal.com", "Agrim_url");
// writeUserData("2", "Manjeet","Manjeet@gmal.com", "Manjeet_url");
// writeUserData("3", "Archi","Archi@gmal.com", "Archi_urlll");
// writeUserData("4", "riya","riya@gmal.com", "riya_url");

console.log('working');
// const distanceRef= ref(db, 'users/' + userid + '/distance');
// const distanceRef= ref(db, 'Blogs');
// onValue(distanceRef,(snapshot) => {
//   const data =snapshot.val();
//   console.log(data);
// });

const blogsRef = ref(db, 'Blogs');
onValue(blogsRef, (snapshot) => {
  const data = snapshot.val();
  const keys = Object.keys(data);
  keys.forEach(key => {
    const blogPost = data[key];
    console.log(`Title: ${blogPost.Title}`);
    console.log(`Description: ${blogPost.Description}`);
    console.log(`Date: ${blogPost.Date}`);
    console.log(`Author: ${blogPost.AuthorName}`);
    console.log(`Vote: ${blogPost.Vote}`);
    console.log('---');
    console.log('---');
})});

