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

  let snackList = snacks.map((snack, index)=>{

  return (
    <div key={index} className="Snack">
      <img src={snack.image} alt={snack.name}></img>
       <Link to={`/snacks/${snack.id}`}>
      <h4>{snack.name}</h4>
      <h4>
        <HeartHealth snackHealth={snack.is_healthy} />
      </h4>
        </Link>
        <h4>{snack.name}</h4>
    </div>
  )
});


    return (
      <section className="Snacks">
        <article>
          {snackList}
        </article>
      </section>
    );
  }
  
  export default AllSnacks;
  