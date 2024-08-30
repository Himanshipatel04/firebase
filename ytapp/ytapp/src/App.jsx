import { useState } from "react";
// import { getDatabase, ref, set } from "firebase/database";
// import { app, auth } from "./firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// const db = getDatabase(app);

function App() {

  // const putdata = () => {
  //   set(ref(db, "users/surbhi"), {
  //     id: 1,
  //     name: "surbhi",
  //     age: "22",
  //   });
  // };

  // const signupuser = () => {
  //   createUserWithEmailAndPassword(
  //     auth,
  //     "himanshi11@gmail.com",
  //     "12311321"
  //   ).then((value) => console.log(value));
  // };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justify: "center",
      }}
    >
      <h1>Vite + React</h1>
     
    </div>
  );
}

export default App;
