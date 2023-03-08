import React from "react";
import SearchContainer from "../components/search/SearchContainer";
import "../assets/css/search.css";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import HeaderBreadcrumb from "../components/HeaderBreadcrumb";

const Search = () => {
  return (
    <>
      <Navigation />
      <div className="search">
        <SearchContainer />
      </div>
      <HeaderBreadcrumb page="Добави в историята" />
      <Footer />
    </>
  );
};

export default Search;
