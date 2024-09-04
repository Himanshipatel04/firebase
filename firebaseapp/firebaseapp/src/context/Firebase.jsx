import React, { createContext, useContext } from 'react'
import {initializeApp} from 'firebase/app'
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider,signInWithRedirect} from "firebase/auth"
import {getDatabase, ref, set} from 'firebase/database'


export const FirebaseContext = createContext(null)

const firebaseConfig = {
    apiKey: "AIzaSyAudeU7ah1paZDa-UBTrgBRbAjS5rtQ0hM",
    authDomain: "fir-app-a8e13.firebaseapp.com",
    projectId: "fir-app-a8e13",
    storageBucket: "fir-app-a8e13.appspot.com",
    messagingSenderId: "296186102807",
    appId: "1:296186102807:web:d063855d18620031248852",
    databaseURL:"https://fir-app-a8e13-default-rtdb.firebaseio.com/"
  };

export const firebaseApp = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp)
const database = getDatabase(firebaseApp)

const GoogleProvider = new GoogleAuthProvider()

export const FirebaseProvider = (props) => {
  
    const signupUserWithEmailAndPassword = (email,password) => {
      return createUserWithEmailAndPassword(firebaseAuth,email,password)
    }
    
    const putdata = (key,data) =>{
         set(ref(database,key),data)
    }

    const signupWithGoogle = () => {
      signInWithRedirect(firebaseAuth,GoogleProvider)
    }

  return (
    <FirebaseContext.Provider value={{signupUserWithEmailAndPassword,putdata,signupWithGoogle}}>
       {props.children}
    </FirebaseContext.Provider>
  )
}

export const useFirebase = () => {
     return useContext(FirebaseContext)
}

export default FirebaseProvider