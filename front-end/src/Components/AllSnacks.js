import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function AllSnacks() {
  const[ snacks, setSnacks ] = useState([]);

  useEffect(()=>{
    axios.get(`${API}/snacks`)
    .then((res)=>{
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])

    return (
      <div className="AllSnacks">
        <h1>Hello, AllSnacks!</h1>
       
      </div>
    );
  }
  
  export default AllSnacks;
  