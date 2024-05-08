import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAZku7NrbJJs3CQNO-WzX25JHR-bnHqBEM",
  authDomain: "aprendendo-firebase-ea675.firebaseapp.com",
  databaseURL: "https://aprendendo-firebase-ea675-default-rtdb.firebaseio.com",
  projectId: "aprendendo-firebase-ea675",
  storageBucket: "aprendendo-firebase-ea675.appspot.com",
  messagingSenderId: "516691372230",
  appId: "1:516691372230:web:9cc8661001ab4e94724fc7",
  measurementId: "G-CLZGXG3ZDG"
};
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  export default firebase
  