import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import Carousel from "react-bootstrap/Carousel";
import { GatsbyImage } from "gatsby-plugin-image";

const PhotoCarousel = () => {
  const filteredImages = (images) =>
    images.filter(({ original }) => original.src.includes("carousel"));

  const {
    allImageSharp: { nodes },
  } = useStaticQuery(graphql`
    query MyQuery {
      allImageSharp {
        nodes {
          gatsbyImageData(quality: 100)
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
              quality={100}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default PhotoCarousel;
