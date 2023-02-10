import React from "react";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import "../assets/css/home.css";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <div className="home">
        <Hero />
        <Stats />
      </div>
      <Footer />
    </>
  );
};

export default Home;
