import React, { useState, useEffect } from "react";
import SongForm from "../components/songNumbers/SongForm";
import Header from "../components/Header";
import SongData from "../components/songNumbers/SongData";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import Description from "../components/songNumbers/Description";
import { Container } from "react-bootstrap";
import { baseURL } from "../api/config";
import axios from "axios";
import HeaderBreadcrumb from "../components/HeaderBreadcrumb";

const SongNumbers = () => {
  const [songsData, setSongsData] = useState([]);

  const userID = localStorage.getItem("userID");

  useEffect(() => {
    axios
      .get(baseURL + "/users/songNumbers/" + userID)
      .then((res) => {
        setSongsData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navigation />
      <Header
        title="Интересувате се от характеристиките на слушаните от Вас песни?"
        desc="Тук ще откриете графично представени различни характеристики на последните 20 слушани от Вас песни."
        breadcrumb={<HeaderBreadcrumb page="Песните в цифри" />}
      />
      <Container>
        <SongForm data={songsData} />
        <SongData data={songsData} />
        <Description />
      </Container>
      <Footer />
    </>
  );
};

export default SongNumbers;
