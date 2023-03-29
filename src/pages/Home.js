import React from "react";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import "../assets/css/home.css";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import Widgets from "../components/home/Widgets";
import { motion } from "framer-motion";

const Home = () => {
  const userID = localStorage.getItem("userID");

  return (
    <>
      <Navigation />
      <motion.div
        className="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0 }}>
        <Hero />
        <Stats />
        {typeof userID == "string" ? <Widgets /> : null}
      </motion.div>
      <Footer />
    </>
  );
};

export default Home;
