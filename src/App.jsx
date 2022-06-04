import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Navbar} from "./components";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Electronics from "./pages/Electronics.jsx";
import Jewelery from "./pages/Jewelery.jsx";
import MaleClothing from "./pages/MaleClothing.jsx";
import FemaleClothing from "./pages/FemaleClothing.jsx";
import Error from "./pages/Error.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories/electronics" element={<Electronics />} />
        <Route path="/categories/jewelery" element={<Jewelery />} />
        <Route path="/categories/maleclothing" element={<MaleClothing />} />
        <Route path="/categories/femaleclothing" element={<FemaleClothing />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
