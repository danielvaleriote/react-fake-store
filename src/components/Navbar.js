import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavbarHeader = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="p-3 text"
      // style={{ fontSize: "1.2rem" }}
    >
      <Container>
        {/* Navbar Brand */}
        <Link to="/">
          <Navbar.Brand>
            {<FaReact size={40} color="cyan" />} React Store
          </Navbar.Brand>
        </Link>
        {/* Responsive Navbar toggle button  */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* Responsive Navbar */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Item>
              <Link className="nav-link" to="/categories/electronics">
                Electronics
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/categories/jewelery">
                Jewelery
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/categories/maleclothing">
                Men's clothing
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/categories/femaleclothing">
                Women's clothing
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarHeader;
