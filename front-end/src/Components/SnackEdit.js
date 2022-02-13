import { Link } from "react-router-dom";

function SnackEdit() {
    return (
      <div className="SnackEdit">
        <h1>SnackEdit!</h1>
        <Link to="/snacks/new"></Link>
      </div>
    );
  }
  
  export default SnackEdit;
