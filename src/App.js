import "./App.css";
import Header from "./components/layout/Header";
import CategoriesNav from "./components/layout/CategoriesNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Electronics from "./pages/Electronics";
import Jewelery from "./pages/Jewelery";
import FemaleClothing from "./pages/FemaleClothing";
import MaleClothing from "./pages/MaleClothing";

function App() {
  return (
    <Router>
      <Header />
      <CategoriesNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/electronics" element={<Electronics />} />
        <Route path="/categories/jewelery" element={<Jewelery />} />
        <Route path="/categories/maleclothing" element={<MaleClothing />} />
        <Route path="/categories/femaleclothing" element={<FemaleClothing />} />
      </Routes>
    </Router>
  );
}

export default App;
