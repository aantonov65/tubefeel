import React, { useContext } from "react";
import UserContext from "../api/userContext";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import "../assets/css/home.css";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import Widgets from "../components/home/Widgets";

const Home = () => {
  const { userID } = useContext(UserContext);
  return (
    <>
      <Navigation />
      <div className="home">
        <Hero />
        <Stats />
        <Widgets />
      </div>
      <Footer />
    </>
  );
};

export default Home;
