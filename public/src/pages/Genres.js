import React from "react";
import Table from "../components/genres/Table";
import ChartContainer from "../components/genres/ChartContainer";
import Header from "../components/Header";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";

const Genres = () => {
  return (
    <>
      <Navigation />
      <div className="genres">
        <Header
          title="Кой е любимият Ви жанр?"
          desc="Тук може да видите най-слушаните от Вас жанрове, представени в графичен и табличен вид."
        />
        <ChartContainer />
        <Table />
      </div>
      <Footer />
    </>
  );
};

export default Genres;
