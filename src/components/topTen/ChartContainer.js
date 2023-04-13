import React, { useState, useEffect } from "react";
import BarChart from "../charts/BarChart";
import { baseURL } from "../../api/config";
import axios from "axios";

const ChartContainer = () => {
  const [userData, setUserData] = useState({
    labels: [],
    datasets: [
      {
        label: "Слушания",
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

  useEffect(() => {
    axios.get(baseURL + "/tracks/top10/").then((res) => {
      let names = [];
      let listens = [];
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
  }, []);

  return (
    <div className="mt-5 container">
      <BarChart chartData={userData} />
    </div>
  );
};

export default ChartContainer;
