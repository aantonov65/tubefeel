import React from "react";
import SearchContainer from "../components/search/SearchContainer";
import "../assets/css/search.css";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";

const Search = () => {
  return (
    <>
      <Navigation />
      <div className="search">
        <SearchContainer />
      </div>
      <Footer />
    </>
  );
};

export default Search;
