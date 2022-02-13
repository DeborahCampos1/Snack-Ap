import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Form = (isEdit = false) => {
  let navi = useNavigate();
  const URL = process.env.REACT_APP_API_URL;
  let params = useParams();
  const id = params.id ? params.id : null;
  const [snack, setSnack] = useState({
    name: "",
    fiber: "",
    protein: "",
    added_sugar: "",
    is_healthy: false,
    image: "",
  });
  useEffect(() => {
    if (isEdit) {
      axios.get(`${URL}/snacks/${id}`).then((response) => {
        setSnack(response.data);
      });
    }
  }, [URL, id]);

  let handleChange = (event) => {
    if (event.target.id === "is_healthy") {
      setSnack({ ...snack, is_healthy: !snack.is_healthy });
    } else {
      setSnack({ ...snack, [event.target.id]: event.target.value });
    }
  };

  /* put request & post request */
  let handleSubmit = (event) => {
    if (isEdit) {
      axios
        .put(`${URL}/snacks/${id}`, snack)
        .then(() => {
          navi(`/${id}`);
        })
        .catch((error) => console.warn(error));
    } else {
      axios
        .post(`${URL}/snacks/`, snack)
        .then(() => {
          navi("/");
        })
        .catch((error) => console.warn(error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="name">Name:</label>
      <input
        id="name"
        name="name"
        value={snack.name}
        onChange={handleChange}
        placeholder="name"
      />
      <label for="fiber">Protein:</label>
      <input
        id="fiber"
        name="fiber"
        value={snack.fiber}
        onChange={handleChange}
        placeholder="fiber"
      />
      <label for="protein">Protein:</label>
      <input
        id="protein"
        name="protein"
        value={snack.protein}
        onChange={handleChange}
        placeholder="protein"
      />
      <label for="added_sugar">Added Sugars:</label>
      <input
        id="added_sugar"
        name="added_sugar"
        value={snack.added_sugar}
        onChange={handleChange}
        placeholder="added_sugar"
      />
      <label for="is_healthy">Is it Healthy:</label>
      <input
        id="is_healthy"
        name="is_healthy"
        value={snack.is_healthy}
        onChange={handleChange}
        placeholder="is_healthy"
      />
      <label for="image">Image:</label>
      <input
        id="image"
        name="image"
        value={snack.image}
        onChange={handleChange}
        placeholder="image"
      />
    </form>
  );
};

export default Form;