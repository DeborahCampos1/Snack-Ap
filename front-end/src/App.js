import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HeartHealth from "./Components/HeartHealth";
import NavBar from "./Components/NavBar";
import AllSnacks from "./Components/AllSnacks";
import SnackDetails from "./Components/SnackDetails";
import SnackEdit from "./Components/SnackEdit";
import SnackNewForm from "./Components/SnackNewForm";
import PageNF from "./Pages/PageNF";


function App() {
  return (
    <Router>
      <NavBar />
      <main>
      <Routes>
        <Route path="/snacks" element={<AllSnacks />} />
        <Route path="/snacks/:id" element={<SnackDetails />}/>
        <Route path="/snacks/:id/edit" element={<SnackEdit />}/>
        <Route path="/snacks/new" element={<SnackNewForm />}/>
         <Route path="*" element={<PageNF />} />
      </Routes>
      </main>
    </Router>
  );
}

export default App;