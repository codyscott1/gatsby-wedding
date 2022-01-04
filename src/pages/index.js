import React from "react";
import "../css/App.css";
import Carousel from "../components/PhotoCarousel";
import Reservations from "../components/Reservations";
import Details from "../components/VenueDetails";
import Seo from "../components/SearchEngineOptimization";
import Hero from "../components/Hero";

const IndexPage = () => {
  return (
    <div className="App container-fluid">
      <Seo />
      <Hero />
      <Carousel />
      <Reservations />
      <Details />
    </div>
  );
};

export default IndexPage;
