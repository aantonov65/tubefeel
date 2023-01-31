import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/Header";
import Table from "../components/lastListened/Table";
import Navigation from "../components/navigation/Navigation";

const LastListened = () => {
  return (
    <>
      <Navigation />
      <div className="last-listened">
        <Header
          title="Искате ли да знаете какво последно сте слушали?"
          desc="Тук може да видите последните слушани от Вас песни и техните характеристики."
        />
        <Table />
      </div>
      <Footer />
    </>
  );
};

export default LastListened;
