import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({ categories }) {
  return (
    <nav>
      {categories && (
        <ul className="categories-list">
          <Link to="/">All categories</Link>
          {categories.map((category, index) => {
            return (
              <Link to={`${category.path}`} key={index + 1}>
                {category.name}
              </Link>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
