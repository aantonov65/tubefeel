import React, { useState, useEffect, useContext } from "react";
import UserContext from "../api/userContext";
import Header from "../components/Header";
import LineChart from "../components/feeling/LineChart";
import Table from "../components/feeling/Table";
import "../assets/css/feeling.css";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import Definition from "../components/feeling/Definition";
import { baseURL } from "../api/config";
import axios from "axios";

const YearFeeling = () => {
    const { userID } = useContext(UserContext);

    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        axios.get(baseURL + "/users/valences/year/" + userID)
            .then((res) => {
                axios.get(baseURL + "/users/history/year/" + userID)
                .then((response) => {
                    const data = response.data.map((track, index) => {
                        return {
                            ...track,
                            rank: index + 1,
                        };
                    });
                    setTracks(data);
                })
                let months = [];
                let valences = [];

                res.data.forEach(e => {
                    months.push(e.month);
                    valences.push(e.averageValence);
                });

                setUserData({
                    labels: months,
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
                            responsive: true,
                            maintainAspectRatio: false,
                        },
                    ],
                })
            })
            .catch((err) => console.log(err));

        axios.get(baseURL + "/users/history/today/" + userID)
            .then((res) => {
                const data = res.data.map((track, index) => {
                    return {
                        ...track,
                        rank: index + 1,
                    };
                });
                setTracks(data);
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
          title="Какво е настроението Ви тази година?"
          desc="Тук може да разгледате градацията на настроението Ви за текущата година."
        />
        <Definition />
        <div className="container">
          <LineChart chartData={userData} />
        </div>
        <Table tracks={ tracks }/>
      </div>
      <Footer />
    </>
  );
};

export default YearFeeling;
