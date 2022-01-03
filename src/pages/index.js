import React from "react";
import "../css/App.css";
import { StaticImage } from "gatsby-plugin-image";
import Carousel from "../components/PhotoCarousel";
import Reservations from "../components/reservations";
import Details from "../components/VenueDetails";
import Seo from "../components/SearchEngineOptimization";

const IndexPage = () => {
  return (
    <div className="App">
      <Seo />
      <div className="position-relative text-center">
        <StaticImage
          src="../images/leaves.png"
          alt="leaves"
          loading="eager"
          placeholder="blurred"
          height={300}
          width={300}
        />
        <h1
          className="display-1"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Crandall Wedding
        </h1>
      </div>
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
