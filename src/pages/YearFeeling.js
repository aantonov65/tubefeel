import React, { useState } from "react";
import Header from "../components/Header";
import LineChart from "../components/feeling/LineChart";
import { UserData } from "../components/UserData";
import "../assets/css/feeling.css";
import Table from "../components/feeling/Table";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";

const YearFeeling = () => {
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
          title="Какво е Вашето настроение тази година?"
          desc="Тук може да разгледате градацията на Вашето настроение за текущата година."
        />
        <p className="text-center mt-4 px-2">
          Стойността <span className="text-danger">"Позитивност"</span> в
          следната диаграма изразява колко положителна е дадена песен чрез число
          между 0 и 1. Колкото тя е по-близо до 1, толкова по-позитивно е
          чувството на песента.
        </p>
        <div className="chart-container">
          <LineChart chartData={userData} />
        </div>
        <Table />
      </div>
      <Footer />
    </>
  );
};

export default YearFeeling;
