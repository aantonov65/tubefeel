import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import BarChart from "../components/myTopTen/BarChart";
import { UserData } from "../components/UserData";

const MyTopTen = () => {
  let arrayOfData = UserData.map((data) => data.timesListened);
  //Sorting the received array
  let sortedArrayOfData = arrayOfData.sort(function (a, b) {
    return b - a;
  });

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.song),
    datasets: [
      {
        label: "Слушания",
        data: sortedArrayOfData,
        backgroundColor: "#DC3545",
        hoverBackgroundColor: "#bb2d3b",
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
      <Header
        title="Искате ли да узнаете вашата Топ 10 класация?"
        desc="Тук може да видите Топ 10 на песните, слушани от Вас в системата."
      />
      <Container>
        <Row>
          <Col>
            <div className="mt-5 chart__container-bar">
              <BarChart chartData={userData} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MyTopTen;
