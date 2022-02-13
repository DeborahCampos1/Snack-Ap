
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
/* pages */
import Details from "./Pages/Details";
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";
import New from "./Pages/New";
import PageNF from "./Pages/PageNF";


function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <main>
          main
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/:id" element={<Details />} />
            <Route path="/new" element={<New />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="*" element={<PageNF />} />
          </Routes>
        </main>
      </BrowserRouter>
  );
}

export default App;