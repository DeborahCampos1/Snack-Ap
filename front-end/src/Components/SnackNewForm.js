import { useNavigate } from "react-router-dom";
import { useState } from "react";
import confirmHealth from "./confirmHealth";
import HeartHealth from "./HeartHealth";

import axios from "axios";

const SnackNewForm = () => {
  let navi = useNavigate();
  const URL = process.env.REACT_APP_API_URL;
  
  const [snack, setSnack] = useState({
    name: "",
    fiber: "",
    protein: "",
    added_sugar: "",
    is_healthy: false,
    image: ""
  });

  let handleChange = (event) => {      
      setSnack({ ...snack, [event.target.id]: event.target.value});
  };

  let handleSubmit = (event) => {
    event.preventDefault();    

      axios.post(`${URL}/snacks/`, snack)
        .then(() => {
          navi("/snacks");
        })
        .catch((error) => console.warn(error));
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
      <label htmlFor="is_healthy">Is it Healthy:</label>
      <input
        id="is_healthy"
        name="is_healthy"
        value={snack.is_healthy}
        onChange={handleChange}
        placeholder="is_healthy"
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
  );
};

export default SnackNewForm;



  