import React, { useState } from "react";
import Header from "../components/Header";
import LineChart from "../components/feeling/LineChart";
import { UserData } from "../components/UserData";
import Table from "../components/feeling/Table";
import "../assets/css/feeling.css";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import Definition from "../components/feeling/Definition";

const TodayFeeling = () => {
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
          title="Какво е настроението Ви днес?"
          desc="Тук може да разгледате градацията на настроението Ви за днешния ден."
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

export default TodayFeeling;
