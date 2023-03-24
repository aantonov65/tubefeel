import React from "react";
import { Container, Row } from "react-bootstrap";
import { ReactComponent as Wave } from "../../assets/wave.svg";
import Widget from "./Widget";

const Widgets = () => {
    const userID = localStorage.getItem('userID');

  return (
    typeof userID == "string" ? (<section className="widgets">
            <Container fluid>
                <Row className="widgets-container p-5 d-flex justify-content-center">
                    <Widget
                        title="Вашето настроение"
                        desc="Разгледайте променливостта на настроението Ви спрямо последните 50
        песни, които сте слушали."
                        to="/feeling"
                    />
                    <Widget
                        title="Повдигнете духа си"
                        desc="Слушайте най-позитивните песни слушани в нашата система, за да се заредите с позитивна енергия."
                        to="/positivity"
                    />
                    <Widget
                        title="Вашата средна позитивност по дни"
                        desc="Проследете промяната във Вашите чувства по дни спрямо средното ниво на позитивност на деня Ви."
                        to="/days-feeling"
                    />
                </Row>
            </Container>
            <svg
                className="wave"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320">
                <path
                    fill="#dc3545"
                    fill-opacity="1"
                    d="M0,96L34.3,112C68.6,128,137,160,206,160C274.3,160,343,128,411,112C480,96,549,96,617,106.7C685.7,117,754,139,823,160C891.4,181,960,203,1029,208C1097.1,213,1166,203,1234,181.3C1302.9,160,1371,128,1406,112L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
            </svg>
        </section>
        ): null
  );
};

export default Widgets;
