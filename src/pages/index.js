import React from "react";
import "./App.css";
import { StaticImage } from "gatsby-plugin-image";
import Home from "../components/Home";
import Reservations from "../components/reservations";
import Details from "../components/VenueDetails";

const IndexPage = () => {
  return (
    <div className="App">
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
        <Home />
        <Reservations />
        <Details />
      </div>
    </div>
  );
};

export default IndexPage;
