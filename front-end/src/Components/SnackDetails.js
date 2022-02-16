import { useState, useEffect } from 'react';
import { Link, useParams , useNavigate } from 'react-router-dom'
import HeartHealth from "./HeartHealth";


import axios from 'axios'
const API = process.env.REACT_APP_API_URL;


function SnackDetails() {
  const [snack, setSnack] = useState({});
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(()=>{
    axios.get(`${API}/snacks/${id}`)
      .then((res)=>{
        setSnack(res.data.payload)
      }).catch((err)=>{
        console.log(err)
        navigate("*")
      })
  }, [id, navigate])

  const handleDelete=()=>{
      axios.delete(`${API}/snacks/${id}`)
      .then((res)=>{
        navigate("/snacks")
      }).catch((err)=>{
        console.log(err)
      })
  }

    return (
      <aside className="SnackDetails">
        <article>
        <h1>Snacks</h1>
        <h2>{snack.name}</h2>
          <HeartHealth snackHealth={snack.is_healthy} />
        <div><img src={snack.image} alt={snack.name}></img></div>

           <div>Protein: {snack.protein}</div>
           <div>Fiber: {snack.fiber}</div>
           <div>Added Sugar: {snack.added_sugar}</div>
          <button onClick={handleDelete}>Delete</button>
          <button><Link to={`/snacks/${id}/edit`}>Edit</Link></button>
        </article>
          <button><Link to="/snacks">Back</Link></button>
      </aside> 
    );
  }
  
  export default SnackDetails;
  