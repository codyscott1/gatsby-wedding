import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => (
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
);

export default Hero;
