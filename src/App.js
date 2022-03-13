import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarHeader from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Electronics from "./pages/Electronics";
import Jewelery from "./pages/Jewelery";
import MaleClothing from "./pages/MaleClothing";
import FemaleClothing from "./pages/FemaleClothing";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <NavbarHeader />
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
