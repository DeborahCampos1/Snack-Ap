import { Link } from "react-router-dom";

function NavBar() {
    return (
      <div className="NavBar">
        <Link to="/snacks"><h1>NavBar!</h1></Link>
        <Link to="/snacks/new"><h1>New Snack</h1></Link>
      </div>
    );
  }
  
  export default NavBar;
  