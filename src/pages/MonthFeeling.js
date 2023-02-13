import React, { useState } from "react";
import Header from "../components/Header";
import LineChart from "../components/feeling/LineChart";
import { UserData } from "../components/UserData";
import Table from "../components/feeling/Table";
import "../assets/css/feeling.css";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import Definition from "../components/feeling/Definition";

const MonthFeeling = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.song),
    datasets: [
      {
        label: "Слушания",
        data: UserData.map((data) => data.positivity),
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
          title="Какво е Вашето настроение този месец?"
          desc="Тук може да разгледате градацията за текущия месец."
        />
        <Definition />
        <div className="chart-container">
          <LineChart chartData={userData} />
        </div>
        <Table />
      </div>
      <Footer />
    </>
  );
};

export default MonthFeeling;
