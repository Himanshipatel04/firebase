import { useEffect, useState } from "react";
import "./App.css";
import { firebaseApp, useFirebase } from "./context/Firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

function App() {
  const firebaseAuth = getAuth(firebaseApp)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user,setUser] = useState(null)

  useEffect(()=> {
    onAuthStateChanged(firebaseAuth,(user)=>{
      if (user){
        setUser(user)
        console.log("hello",user);
      }
      else{
        console.log("not user");
        setUser(null)
      }
    })
  },[user])

  const firebase = useFirebase();
  console.log(firebase);
  
  if (user == null){
    return (
      <>
      <p>Firebase app</p>
      <input
        type="email"
        name=""
        id=""
        value={email}
        placeholder="enter email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name=""
        id=""
        value={password}
        placeholder="enter password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={firebase.signupWithGoogle}>Google se krlo!</button>
      <br />
      <button
        onClick={() => {
          firebase.signupUserWithEmailAndPassword(email, password);
          firebase.putdata("users/" + "himi", { email, password });
        }}
        type="submit"
      >
        Signup
      </button>
    </>
    )
  }
  else{
    return (
     <div>
      <p>Inside authenticated app!</p>
      <button onClick={()=>{
        signOut(firebaseAuth)
      }}>Logout</button>
     </div>
    );
  }
  
}

export default App;
