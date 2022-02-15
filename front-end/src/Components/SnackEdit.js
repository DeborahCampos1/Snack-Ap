import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SnackEdit() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [snack, setSnack] = useState({
    name: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0,
    image: ""
  });

  useEffect(()=>{
    axios.get(`${API}/snacks/${id}`)
      .then((res)=>{
        setSnack(res.data.payload)
      }).catch((err)=> navigate("*"))
  }, [id])

  let handleChange = (event) => {  
    setSnack({ ...snack, [event.target.id]: event.target.value});
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    
      axios.put(`${API}/snacks/${id}`, snack)
        .then(() => {
          navigate("/snacks");
        }).catch((err) => console.log(err));
  }


  console.log(snack)

    return (
      <div className="SnackEdit">
        <form onSubmit={handleSubmit}>
        <h1>New Snacks Form</h1>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={snack.name}
          onChange={handleChange}
          placeholder="Snack name"
          required
        />
        <label htmlFor="fiber">Fiber:</label>
        <input
          id="fiber"
          name="fiber"
          type="number"
          value={snack.fiber}
          onChange={handleChange}
          placeholder="fiber"
        />
        <label htmlFor="protein">Protein:</label>
        <input
          id="protein"
          type="number"
          name="protein"
          value={snack.protein}
          onChange={handleChange}
          placeholder="protein"
        />
        <label htmlFor="added_sugar">Added Sugars:</label>
        <input
          id="added_sugar"
          name="added_sugar"
          type="number"
          value={snack.added_sugar}
          onChange={handleChange}
          placeholder="added_sugar"
        />
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          name="image"
          type="text"
          value={snack.image}
          onChange={handleChange}
          placeholder="image"
        />
        <button type="submit">Submit</button>
        </form>
        <button><Link to="/snacks">Back</Link></button>
      </div>
    );
}
  
  export default SnackEdit;
