import React from "react";
import ChartContainer from "../components/genres/ChartContainer";
import Header from "../components/Header";

const Genres = () => {
  return (
    <div>
      <Header
        title="Кой е любимият Ви жанр?"
        desc="Тук може да видите най-слушаните от Вас жанрове, представени в графичен и табличен вид."
      />
      <ChartContainer />
    </div>
  );
};

export default Genres;
