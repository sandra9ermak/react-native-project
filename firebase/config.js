// import * as firebase from 'firebase';
import firebase from "firebase/compat/app";
// import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA7P6ApAwP7rQhbAdA0HZ0zFqYjnjTUxIY",
  authDomain: "react-native-project-4afae.firebaseapp.com",
  projectId: "react-native-project-4afae",
  storageBucket: "react-native-project-4afae.appspot.com",
  messagingSenderId: "459044948544",
  appId: "1:459044948544:web:eccb155fda5fe5ba062da5",
  measurementId: "G-S58WSE455D",
};

export default firebase.initializeApp(firebaseConfig);
