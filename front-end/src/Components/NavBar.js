import { Link } from "react-router-dom";

function NavBar() {
    return (
      <nav className="nav">
        <h1><Link to="/snacks">All Snacks</Link></h1>
        <h1><Link to="/snacks/new">New Snack</Link></h1>
      </nav>
    );
  }
  
  export default NavBar;
  