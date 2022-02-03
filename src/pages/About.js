import Container from "react-bootstrap/Container";
import "./About.css";
const About = () => {
  return (
    <Container className="about-container">
      <h3>About this project:</h3>
      <p>
        This project was build with ReactJS, React-router-dom, React-icons,
        Bootstrap and some other modules that are avaliable on the{" "}
        <a href="">Github repository</a>
      </p>
    </Container>
  );
};

export default About;
