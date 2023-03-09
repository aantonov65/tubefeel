import React from "react";
import { Container, Row } from "react-bootstrap";
import { ReactComponent as Wave } from "../../assets/wave.svg";
import Widget from "./Widget";

const Widgets = () => {
  return (
    <section className="widgets">
      <Container fluid>
        <Row className="widgets-container p-5 d-flex justify-content-center">
          <Widget
            title="Вашето настроение"
            desc="Разгледайте променливостта на настроението Ви спрямо последните 50
        песни, които сте слушали."
            to="/feeling"
          />
          <Widget
            title="Подобрете настроението си"
            desc="Слушайте най-позитивните песни слушани в нашата система, за да се заредите с позитивна енергия."
            to="/positivity"
          />
          <Widget
            title="Вашето чувство по дни"
            desc="Проследете промяната във Вашите чувства по дни спрямо средното ниво на позитивност на деня Ви."
            to="/days-feeling"
          />
        </Row>
      </Container>
      <Wave />
    </section>
  );
};

export default Widgets;
