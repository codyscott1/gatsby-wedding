import React from "react";
import "../css/App.css";
import Carousel from "../components/PhotoCarousel";
import Reservations from "../components/reservations";
import Details from "../components/VenueDetails";
import Seo from "../components/SearchEngineOptimization";
import Hero from "../components/Hero";

const IndexPage = () => {
  return (
    <div className="App">
      <Seo />
      <Hero />
      <div className="container-fluid">
        <div className="row text-center">
          <h2
            className="mb-3"
            style={{ zIndex: 10, backdropFilter: "blur(1px)" }}
          >
            We invite you to join in on the start to this new chapter of our
            lives
          </h2>
        </div>
        <Carousel />
        <Reservations />
        <Details />
      </div>
    </div>
  );
};

export default IndexPage;
