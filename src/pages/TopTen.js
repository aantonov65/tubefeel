import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import BarChart from "../components/myTopTen/BarChart";
import { baseURL } from "../database/config";
import axios from "axios";

const TopTen = () => {
    let names = [];
    let listens = [];
    axios.get(baseURL + "/tracks/top10/")
        .then(res => {
            res.data.map((track) => {
                names.push(track.name);
                listens.push(track.listens);
            });
            setUserData({
                labels: names,
                datasets: [
                    {
                        label: "Слушания",
                        data: listens,
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
        });
  /*let arrayOfData = UserData.map((data) => data.timesListened);
  //Sorting the received array
  let sortedArrayOfData = arrayOfData.sort(function (a, b) {
    return b - a;
  });*/

  const [userData, setUserData] = useState({
    labels: names,
    datasets: [
      {
        label: "Слушания",
        data: listens,
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
        title="Искате ли да узнаете Топ 10 на всички потребители?"
        desc="Тук може да видите Топ 10 на песните, слушани от всички потребители в системата."
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

export default TopTen;
