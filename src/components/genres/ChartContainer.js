import React, { useState } from "react";
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
    <div className="mt-5 container">
      <h3 className="h4 text-center">
        Стойностите в следната диаграма изразяват колко процента заема
        определения жанр във вашите любими жанрове.
      </h3>
      <div className="chart-container">
        <PieChart chartData={userData} />
      </div>
    </div>
  );
};

export default ChartContainer;
