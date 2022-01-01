import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import michaelScott from "../images/michaelScott.gif";
import codyLexie from "../images/codyLexie.jpeg";
import kued from "../images/Kued.png";
import cheers from "../images/cheers.jpg";

const VenueDetails = () => {
  const TimelineItem = ({ text, src, styles = {}, link = null }) => (
    <div className="col-lg-3 col-md-6">
      <div className="w-full mt-3">{text}</div>
      <a href={link}>
        <img
          loading="lazy"
          style={{
            maxHeight: "220px",
            objectFit: "contain",
            borderRadius: "15px",
            ...styles,
          }}
          src={src}
          alt={text}
        />
      </a>
    </div>
  );

  return (
    <>
      <div className="col-12 text-center">
        <h1 id="venue-details-header" className="display-4 mb-3">
          Venue Details
        </h1>
        <div>
          <div className="mb-3">
            <a
              className="btn-primary static p-2 btn btn-primary static btn-lg shadow rounded text-nowrap"
              target="_blank"
              rel="noreferrer"
              href="https://goo.gl/maps/zeHaVXJ82Ga8SKEU9"
            >
              9000 Douglas Avenue, Urbandale
            </a>
          </div>
          <h5 className="mb-3">Giovannetti Community Shelter</h5>
        </div>
      </div>
      <div className="col-12">
        <StaticImage
          src="../images/giovenetti.jpg"
          alt="leaves"
          loading="lazy"
          className="d-block w-100 rounded shadow "
          placeholder="blurred"
        />
      </div>
      <div className="col-12 mt-5 text-center mb-5">
        <h1 className="mb-3 display-4"> Date and Itinerary</h1>
        <h2 className="mb-3">Saturday June 4, 2022</h2>
        <div className="row">
          <TimelineItem text="4:00 PM - Outdoor Ceremony" src={codyLexie} />
          <TimelineItem text="4:30 PM - Happy Hour" src={cheers} />
          <TimelineItem
            text="5:30 PM - Kue'd BBQ"
            src={kued}
            styles={{ backgroundColor: "#5b0000", width: "220px" }}
            link={"https://www.kuedsmokehouse.com/"}
          />
          <TimelineItem text="6:30 PM - Party Time" src={michaelScott} />
        </div>
      </div>
    </>
  );
};
export default VenueDetails;
