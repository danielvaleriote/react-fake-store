import Container from "react-bootstrap/Container";
import "./About.scss";
const About = () => {
  return (
    <Container className="about-container">
      <div className="english-about-content lang-container">
        <h3>About this project:</h3>
        <p>
          This project was built with ReactJs, React-router-dom, React-icons,
          Bootstrap and some other modules that are avaliable on the{" "}
          <a
            rel="external"
            target="_blank"
            href="https://github.com/DanielValeriote/react-fake-store"
          >
            Github repository
          </a>
          . The fictitious products are from the{" "}
          <a rel="external" target="_blank" href="https://fakestoreapi.com/">
            Fake Store API
          </a>{" "}
          using the data to show the front-end side of a simple store.
        </p>
        <p className="text-muted credits">
          Project created by{" "}
          <a
            rel="external"
            target="_blank"
            href="https://github.com/DanielValeriote"
          >
            Daniel Valeriote
          </a>
          .
        </p>
      </div>

      <div className="portuguese-about-content lang-container">
        <h3>Sobre este projeto:</h3>
        <p>
          Este projeto foi criado com ReactJs, React-router-dom, React-Icons,
          Bootstrap e mais alguns módulos que podem ser encontrados no{" "}
          <a
            rel="external"
            target="_blank"
            href="https://github.com/DanielValeriote/react-fake-store"
          >
            repositório do Github
          </a>
          . Foram obtidos produtos fictícios de uma API chamada{" "}
          <a rel="external" target="_blank" href="https://fakestoreapi.com/">
            Fake Store
          </a>{" "}
          usando esses dados para mostrar a parte front-end the uma loja
          simples.
        </p>
        <p className="text-muted credits">
          Projeto criado por{" "}
          <a
            rel="external"
            target="_blank"
            href="https://github.com/DanielValeriote"
          >
            Daniel Valeriote
          </a>
          .
        </p>
      </div>
    </Container>
  );
};

export default About;
