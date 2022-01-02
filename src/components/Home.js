import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import images from "../images/images";

export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => setIndex(selectedIndex);

  return (
    <>
      <div className="row text-center">
        <h4
          className="mb-3"
          style={{ zIndex: 10, backdropFilter: "blur(1px)" }}
        >
          We invite you to join in on the start to this new chapter of our lives
        </h4>
      </div>
      <div className="row carousel-wrapper">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="col-12"
          slide={true}
          indicators={false}
        >
          {images.map((image, i) => (
            <Carousel.Item key={i}>
              <img
                loading="lazy"
                className="d-block w-100 rounded mh-50"
                src={image}
                alt="First slide"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
}
