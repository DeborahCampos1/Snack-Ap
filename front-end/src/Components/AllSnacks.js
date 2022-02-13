import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";
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
  
let snackList = snacks.map((snack , id)=>{

  return (
    <div className="Snack">
      <h4>{snack.name}</h4>
      {snack.is_healthy ? <img alt="healthy food" src={heartSolid}/> : <img src={heartOutline} alt="unhealthy food" />}
      <img src={snack.image}></img>
       <Link to={`/snacks/${id}`}>{snack.name} Details</Link>
      <li>{snack.protein}</li>
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
  