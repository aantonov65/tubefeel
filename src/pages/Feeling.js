import React, { useState } from "react";
import Definition from "../components/feeling/Definition";
import LineChart from "../components/feeling/LineChart";
import Footer from "../components/footer/Footer";
import Header from "../components/Header";
import Navigation from "../components/navigation/Navigation";
import { UserData } from "../components/UserData";

const Feeling = () => {
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
      <div className="feeling">
        <Navigation />
        <Header
          title="Какво е настроение Ви напоследък?"
          desc="Тук може да разгледате градацията на настроението Ви от последните 50 слушани от Вас песни."
        />
        <Definition />
        <div className="chart-container">
          <LineChart chartData={userData} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Feeling;
