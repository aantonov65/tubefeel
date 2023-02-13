import React, { useState } from "react";
import BarChart from "./BarChart";
import { baseURL } from "../../database/config";
import axios from "axios";

const ChartContainer = () => {
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
    <div className="mt-5 container">
      <BarChart chartData={userData} />
    </div>
  );
};

export default ChartContainer;
