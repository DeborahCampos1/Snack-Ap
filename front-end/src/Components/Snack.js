import { Link } from "react-router-dom";

function Snack({ snack }) {
  return (
    <tr>
      <td>{snack.name}</td>
      <td>{snack.fiber}</td>
      <td>{snack.protein}</td>
      <td>{snack.added_sugar}</td>
      <td>
        <Link to={`/snacks/${snack.id}`}>{snack.name}</Link>
      </td>
    </tr>
  );
}

export default Snack;