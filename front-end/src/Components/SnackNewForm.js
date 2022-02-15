import axios from "axios";
import { useNavigate , Link } from "react-router-dom";
import { useState } from "react";


const SnackNewForm = () => {
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  const [snack, setSnack] = useState({
    name: "",
    image: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0
  });

  const handleChange = (event) => {      
    setSnack({ ...snack, [event.target.id]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();   
  
    axios.post(`${API}/snacks/`, snack)
        .then((res) => {
          navigate("/snacks");
        }).catch((err) => navigate("*"));
  }

  return (
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
      <button><Link to="/snacks">Back</Link></button>
    </form>
  );
};

export default SnackNewForm;



  