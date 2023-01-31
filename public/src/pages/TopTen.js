import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/Header";
import Navigation from "../components/navigation/Navigation";
import ChartContainer from "../components/topTen/ChartContainer";
import Table from "../components/topTen/Table";

const TopTen = () => {
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
