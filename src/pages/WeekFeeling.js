import React, { useState } from "react";
import Header from "../components/Header";
import LineChart from "../components/feeling/LineChart";
import { UserData } from "../components/UserData";

const WeekFeeling = () => {
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
    <div>
      <Header
        title="Какво е Вашето настроение през тази седмица?"
        desc="Тук може да разгледате градацията на Вашето настроение за текущата седмица."
      />
      <p className="text-center mt-4 px-2">
        Стойността <span className="text-danger">"Позитивност"</span> в следната
        диаграма изразява колко положителна е дадена песен чрез число между 0 и
        1. Колкото тя е по-близо до 1, толкова по-позитивно е чувството на
        песента.
      </p>
      <div className="chart__container-line">
        <LineChart chartData={userData} />
      </div>
    </div>
  );
};

export default WeekFeeling;
