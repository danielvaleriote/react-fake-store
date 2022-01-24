import Navbar from "./Navbar";
import "./CategoriesNav.css";

export default function CategoriesNav() {
  return (
    <section className="categories-container">
      <Navbar
        categories={[
          { name: "Electronics", path: "/categories/electronics" },
          { name: "Jewelery", path: "/categories/jewelery" },
          { name: "Men's clothing", path: "/categories/maleclothing" },
          { name: "Women's clothing", path: "/categories/femaleclothing" },
        ]}
      />
    </section>
  );
}
