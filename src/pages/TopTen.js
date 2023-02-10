import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/Header";
import Navigation from "../components/navigation/Navigation";
import ChartContainer from "../components/topTen/ChartContainer";
import Table from "../components/topTen/Table";
import axios from "axios";

const TopTen = () => {
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
  /*let arrayOfData = UserData.map((data) => data.timesListened);
  //Sorting the received array
  let sortedArrayOfData = arrayOfData.sort(function (a, b) {
    return b - a;
  });*/

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
    <>
      <Navigation />
      <div className="topTen">
        <Header
          title="Искате ли да узнаете Топ 10 на всички потребители?"
          desc="Тук може да видите Топ 10 на песните, слушани от всички потребители в системата."
        />
        <ChartContainer />
        <Table />
      </div>
      <Footer />
    </>
  );
};

export default TopTen;
