import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import LineChart from "../components/feeling/LineChart";
import Table from "../components/feeling/Table";
import "../assets/css/feeling.css";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import Definition from "../components/feeling/Definition";
import { baseURL } from "../api/config";
import axios from "axios";
import HeaderBreadcrumb from "../components/HeaderBreadcrumb";

const MonthFeeling = () => {
  const userID = localStorage.getItem("userID");

  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    axios
      .get(baseURL + "/users/history/month/" + userID)
      .then((res) => {
        const data = res.data.map((track, index) => {
          return {
            ...track,
            rank: index + 1,
          };
        });
          setTracks(data.reverse());

        let names = [];
        let valences = [];

        res.data.forEach((e) => {
          names.push(e.name);
          valences.push(e.valence);
        });

        setUserData({
          labels: names,
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
              responsive: false,
              maintainAspectRatio: false,
            },
          ],
        });
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
        responsive: false,
        maintainAspectRatio: false,
      },
    ],
  });
  return (
    <>
      <Navigation />
      <div className="feeling">
        <Header
          title="Какво е Вашето настроение този месец?"
          desc="Тук може да разгледате градацията за текущия месец."
          breadcrumb={<HeaderBreadcrumb page="Настроение този месец" />}
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

export default MonthFeeling;
