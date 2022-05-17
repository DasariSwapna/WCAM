import React from "react";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { Component, useEffect, useState } from 'react';
//import {storage} from './firebaseconfig';
import { app } from './firebaseconfig';

function Firebase (){
const [todos, setTodos] = useState([])

  const db = getFirestore(app);

  useEffect(() => {
    onSnapshot(collection(db, 'contents'), (snapshot) => {
      setTodos(snapshot.docs.map(doc => doc.data()))
      console.log(todos)
    })
  }, []);
//have to complete the logic 
//   return (
    //
//   );
}

export default Firebase;