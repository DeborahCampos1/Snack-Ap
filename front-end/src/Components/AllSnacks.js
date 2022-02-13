import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeartHealth from "./HeartHealth";
const API = process.env.REACT_APP_API_URL;

function AllSnacks() {
  const[ snacks, setSnacks ] = useState([]);

  useEffect(()=>{
    axios.get(`${API}/snacks`)
    .then((res)=>{
      console.log(res.data)
      setSnacks(res.data.payload)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])
let snackList = snacks.map((snack)=>{
  return (
    <div>
      {snack.name} <span>{HeartHealth(snack.is_healthy)}</span>
      <li>{snack.protein}</li>
    </div>
  )
})
    return (
      <div className="AllSnacks">
        <h1>Hello, AllSnacks!</h1>
        {snackList}
      </div>
    );
  }
  
  export default AllSnacks;
  