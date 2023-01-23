import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PieChart from "./PieChart";
import { UserData } from "../UserData";

const ChartContainer = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.genre),
    datasets: [
      {
        label: "Amount",
        data: UserData.map((data) => data.amount),
      },
    ],
    options: [
      {
        responsive: true,
        maintainAspectRatio: false,
      },
    ],
  });

  return (
    <section>
      <Container className="mt-5">
        <Row>
          <Col>
            <h3 className="h4 text-center">
              Стойностите в следната диаграма изразяват колко процента заема
              определения жанр във вашите любими жанрове.
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="chart__container-pie">
              <PieChart chartData={userData} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChartContainer;
