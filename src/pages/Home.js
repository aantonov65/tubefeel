import React from "react";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import "../assets/css/home.css";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import Widgets from "../components/home/Widgets";

const Home = () => {
    const userID = localStorage.getItem('userID');

    return (
    <>
      <Navigation />
      <div className="home">
        <Hero />
        <Stats />
        {typeof userID == "string" ? <Widgets /> : null}
      </div>
      <Footer />
    </>
  );
};

export default Home;
