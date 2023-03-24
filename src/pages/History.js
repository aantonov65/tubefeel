import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/Header";
import Table from "../components/lastListened/Table";
import Navigation from "../components/navigation/Navigation";
import HeaderBreadcrumb from "../components/HeaderBreadcrumb";

const History = () => {
  return (
    <>
      <Navigation />
      <div className="last-listened">
        <Header
          title="Искате ли да знаете какво сте гледали последно?"
          desc="Тук може да видите добавените от вас песни и техните характеристики."
          breadcrumb={<HeaderBreadcrumb page="Вашата история" />}
        />
        <Table />
      </div>
      <Footer />
    </>
  );
};

export default History;
