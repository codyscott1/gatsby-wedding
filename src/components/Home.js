import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import Carousel from "react-bootstrap/Carousel";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Home() {
  const filteredImages = (images) =>
    images.filter(({ original }) => original.src.includes("carousel"));

  const {
    allImageSharp: { nodes },
  } = useStaticQuery(graphql`
    query MyQuery {
      allImageSharp {
        nodes {
          gatsbyImageData
          original {
            src
          }
        }
      }
    }
  `);

  const filtered = filteredImages(nodes);

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
          {filtered.map((image, i) => (
            <Carousel.Item key={i}>
              <GatsbyImage
                image={image.gatsbyImageData}
                alt="Carousel slide"
                className="d-block rounded mh-50"
                layout="full-width"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
}
