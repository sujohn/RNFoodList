import * as firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBLcZVr7KhKjEiH-bKqpJo064jqZjxLnRA",
    authDomain: "portfolio-8731a.firebaseapp.com",
    databaseURL: "https://portfolio-8731a.firebaseio.com",
    projectId: "portfolio-8731a",
    storageBucket: "portfolio-8731a.appspot.com",
    messagingSenderId: "641543612480",
    appId: "1:641543612480:web:4c128d411fdd253b54d7a5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;