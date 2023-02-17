import React from "react";
import SongForm from "../components/songNumbers/SongForm";
import Header from "../components/Header";
import SongData from "../components/songNumbers/SongData";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import Description from "../components/songNumbers/Description";
import { Container } from "react-bootstrap";

const SongNumbers = () => {
  return (
    <>
      <Navigation />
      <Header
        title="Интересувате се от характеристиките на слушаните от Вас песни?"
        desc="Тук ще откриете графично представени различни характеристики на последните 20 слушани от Вас песни."
      />
      <Container>
        <SongForm />
        <SongData />
        <Description />
      </Container>
      <Footer />
    </>
  );
};

export default SongNumbers;
