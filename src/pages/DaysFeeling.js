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

const DaysFeeling = () => {
    const userID = localStorage.getItem('userID');

    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        axios.get(baseURL + "/users/positivity/day/" + userID)
            .then((res) => {
                const data = res.data.map((track, index) => {
                    return {
                        ...track,
                        rank: index + 1,
                    };
                });
                setTracks(data);


                let days = [];
                let valences = [];

                res.data.forEach(e => {
                    days.push(e.day);
                    valences.push(e.averageValence);
                });

                setUserData({
                    labels: days,
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
                })
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
      <div className="feeling">
        <Navigation />
        <Header
          title="Какво е било настроението Ви по дни?"
          desc="Тук може да разгледате градацията на настроението Ви по дни."
        />
        <Definition />
        <div className="container">
          <LineChart chartData={userData} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DaysFeeling;
