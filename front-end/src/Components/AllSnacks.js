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
  }, []);
console.log(snacks)
let snackList = snacks.map((snack)=>{
let heartHealth = HeartHealth(snack.is_healthy)

  return (
    <div className="Snack">
      <h4>{heartHealth}</h4>
      <h4>{snack.name}</h4>
      <img src={snack.image} alt={snack.name}></img>
       <Link to={`/snacks/${snack.id}`}>{snack.name} Details</Link>
    </div>
  )
});


    return (
      <section className="Snacks">
        <article>
        <div>
          <h1>Hello, AllSnacks!</h1>
          {snackList}
        </div>
        </article>
      </section>
    );
  }
  
  export default AllSnacks;
  