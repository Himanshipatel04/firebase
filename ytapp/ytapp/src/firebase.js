import {initializeApp} from 'firebase/app';
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAGlJigV7CG8TSq4JB1fTJqN5hKCVQJ1Hg",
    authDomain: "app-e4ce3.firebaseapp.com",
    projectId: "app-e4ce3",
    storageBucket: "app-e4ce3.appspot.com",
    messagingSenderId: "936406133971",
    appId: "1:936406133971:web:2754ec54b786a1d7643826",
    databaseURL:"https://app-e4ce3-default-rtdb.firebaseio.com/"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)