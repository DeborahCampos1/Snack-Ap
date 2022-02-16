import { Link } from "react-router-dom";

function Home() {
    return (
      <div className="home">
        <h1>Welcome to Deb's Snack Log!</h1>
        <h1><Link to="/snacks">Click Here For All Snacks!</Link></h1>
        <h1><Link to="/snacks/new">Click Here to Create a New Snack!</Link></h1>
      </div>
    );
  }
  
  export default Home;
