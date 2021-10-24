import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD9saqBk5laggAI_zKvd4FNYYbeZH101E4",
  authDomain: "help-a-pet-f3c12.firebaseapp.com",
  projectId: "help-a-pet-f3c12",
  storageBucket: "help-a-pet-f3c12.appspot.com",
  messagingSenderId: "704372714864",
  appId: "1:704372714864:web:70fe0d367d25ee8f6fb3b5",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
