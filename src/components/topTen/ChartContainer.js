import React, { useState } from "react";
import BarChart from "./BarChart";
import { UserData } from "../UserData";

const ChartContainer = () => {
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
    <div className="mt-5 container">
      <BarChart chartData={userData} />
    </div>
  );
};

export default ChartContainer;
