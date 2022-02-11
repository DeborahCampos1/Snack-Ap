import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "./Snack";

function Snacks() {
  const URL = process.env.REACT_APP_API_URL;
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/snacks`)
      .then((response) => setSnacks(response.data))
      .catch((error) => console.warn(error));
  }, [URL]);

  return (
    <div className="snacks">
      <section>
        <table>
          <thead>
            <tr>
              <th>SNACK</th>
              <th>FIBER</th>
              <th>PROTEIN</th>
              <th>ADDED SUGAR</th>
            </tr>
          </thead>
          <tbody>
            {snacks.map((snack) => {
              return <Snack key={snack.id} snack={snack} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Snacks;