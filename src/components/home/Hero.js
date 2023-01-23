import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Gradient from "./Gradient";

const Hero = () => {
  return (
    <main className="h-75 d-flex align-items-center position-relative overflow-hidden pb-5">
      <Gradient />
      <Container>
        <Row>
          <Col className="col-10 col-md-6 m-4 text-center text-md-start mx-auto mx-md-0 pt-4">
            <h1 className="m-0 me-2 h1 mt-4 mt-sm-0 hero__heading">
              Проследете музикалната си
              <span className="hero__gradient"> градация!</span>
            </h1>
            <p className="font-weight-normal h5 mt-3 hero__text">
              Проект, който анализира последно слушаните песни от потребителя в
              платформата YouTube. Данните са представени чрез интерактивни
              диаграми, таблици и статистики. Целта е да се проследи музикалната
              градация и развитие на личността, чрез която да се характеризира и
              проучи емоционалната същност на човека. На всеки 5 минути нашият
              сървър автоматично обновява и записва историята на слушаните песни
              на потребителя.
            </p>
            <Button className="btn mt-2 p-2 hero__btn" variant="danger">
              Влез
            </Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Hero;
