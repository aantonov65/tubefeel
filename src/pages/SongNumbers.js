import React from "react";
import Description from "../components/songNumbers/Description";
import Header from "../components/Header";
import SongData from "../components/songNumbers/SongData";

const SongNumbers = () => {
  return (
    <div>
      <Header
        title="Искате ли да знаете характеристиките на слушаните от Вас песни?"
        desc="Тук ще Ви покажем графично различни характеристики на последните 20 слушани от Вас песни."
      />
      <Description />
      <SongData />
    </div>
  );
};

export default SongNumbers;
