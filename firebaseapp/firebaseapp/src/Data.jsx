import React from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { firebaseApp } from "./context/Firebase";
import App from "./App";

const firestore = getFirestore(firebaseApp);

const Data = () => {
  const writedata = async () => {
    try {
      const docRef = await addDoc(collection(firestore, "users"), {
        name: "himanshi",
        email: "himanshi@gmail.com",
        age: 20,
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Posted successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error posting data.");
    }
  };

  return (
    <div>
        <App/>
      <h2>Hi Firestore</h2>
      <button onClick={writedata}>Click to post data</button>
    </div>
  );
};

export default Data;
