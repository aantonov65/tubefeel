import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import LineChart from "../components/charts/LineChart";
import Table from "../components/feeling/Table";
import "../assets/css/feeling.css";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import Definition from "../components/feeling/Definition";
import { baseURL } from "../api/config";
import axios from "axios";
import HeaderBreadcrumb from "../components/HeaderBreadcrumb";

const YearFeeling = () => {
  const userID = localStorage.getItem("userID");

  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    axios
      .get(baseURL + "/users/valences/year/" + userID)
      .then((res) => {
        axios
          .get(baseURL + "/users/history/year/" + userID)
          .then((response) => {
            const data = response.data.map((track, index) => {
              return {
                ...track,
                rank: index + 1,
              };
            });
            setTracks(data.reverse());
          });
        let months = [];
        let valences = [];
        let monthName;

        res.data.forEach((e) => {
          switch (e.month) {
            case 1:
              monthName = "Януари";
              break;
            case 2:
              monthName = "Февруари";
              break;
            case 3:
              monthName = "Март";
              break;
            case 4:
              monthName = "Април";
              break;
            case 5:
              monthName = "Май";
              break;
            case 6:
              monthName = "Юни";
              break;
            case 7:
              monthName = "Юли";
              break;
            case 8:
              monthName = "Август";
              break;
            case 9:
              monthName = "Септември";
              break;
            case 10:
              monthName = "Октомври";
              break;
            case 11:
              monthName = "Ноември";
              break;
            case 12:
              monthName = "Декември";
              break;
          }
          months.push(monthName);
          valences.push(e.averageValence);
        });
        setUserData({
          labels: months,
          datasets: [
            {
              label: "Позитивност",
              data: valences,
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
      })
      .catch((err) => console.log(err));

    axios
      .get(baseURL + "/users/history/today/" + userID)
      .then((res) => {
        const data = res.data.map((track, index) => {
          return {
            ...track,
            rank: index + 1,
          };
        });
        setTracks(data.reverse());
      })
      .catch((err) => console.log(err));
  }, []);

  const [userData, setUserData] = useState({
    labels: [],
    datasets: [
      {
        label: "Позитивност",
        data: [],
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
    <>
      <Navigation />
      <div className="feeling">
        <Header
          title="Какво е настроението Ви тази година?"
          desc="Тук може да проследите градацията на настроението Ви за текущата година чрез средната позитивност за всеки месец."
          breadcrumb={<HeaderBreadcrumb page="Настроение тази година" />}
        />
        <Definition />
        <div className="chart-container">
          <LineChart chartData={userData} />
        </div>
        <Table tracks={tracks} />
      </div>
      <Footer />
    </>
  );
};

export default YearFeeling;
