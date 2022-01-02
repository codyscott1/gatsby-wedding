import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import michaelScott from "../images/timeline-michaelScott.gif";
const VenueDetails = () => {
  const TimelineItem = ({ children, text }) => (
    <div className="col-lg-3 col-md-6 gy-4">
      <p className="w-full pt-3 mb-0">{text}</p>
      {children}
    </div>
  );

  const StaticImageStyles = {
    height: "375px",
    width: "250px",
    borderRadius: "15px",
  };

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
          <h2 className="mb-3">Giovannetti Community Shelter</h2>
        </div>
      </div>
      <div className="col-12">
        <StaticImage
          src="../images/giovenetti.jpg"
          alt="venue"
          className="d-block w-100 rounded shadow "
          placeholder="blurred"
        />
      </div>
      <div className="col-12 mt-5 text-center mb-5">
        <h1 className="mb-3 display-4"> Date and Itinerary</h1>
        <h2 className="mb-3">Saturday June 4, 2022</h2>
        <div className="row">
          <TimelineItem text="4:00 PM - Outdoor Ceremony">
            <StaticImage
              src="../images/timeline-codyLexie.jpeg"
              alt="bride and groom"
              className="w-full"
              style={StaticImageStyles}
            />
          </TimelineItem>
          <TimelineItem text="4:30 PM - Happy Hour">
            <StaticImage
              src="../images/timeline-cheers.jpg"
              alt="champagne"
              className="w-full"
              style={StaticImageStyles}
            />
          </TimelineItem>
          <TimelineItem text="5:30 PM - Kue'd BBQ">
            <a href="https://www.kuedsmokehouse.com/">
              <StaticImage
                className="w-full"
                src="../images/timeline-Kued.png"
                alt="kued BBQ"
                backgroundColor="#5b0000"
                objectFit="contain"
                style={{
                  border: "10px solid #5b0000",
                  aspectRatio: "4 / 5",
                  ...StaticImageStyles,
                }}
              />
            </a>
          </TimelineItem>
          <TimelineItem text="6:30 PM - Party Time">
            <img
              src={michaelScott}
              alt="michael scott dancing"
              className="w-full"
              style={{
                objectFit: "contain",
                borderRadius: "15px",
                ...StaticImageStyles,
              }}
            />
          </TimelineItem>
        </div>
      </div>
    </>
  );
};
export default VenueDetails;
