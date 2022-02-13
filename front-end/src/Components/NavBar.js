import { Link } from "react-router-dom";

function NavBar () {
        return (
            <nav>
                <h1 className="title">
                    <Link to="/">Snack App</Link>
                </h1>
                <button className="button">
                <Link to="/createSnack">Create Snack</Link>
                </button>    
            </nav>
        )
} 

export default NavBar;