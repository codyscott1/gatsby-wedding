import React from "react";
import { Helmet } from "react-helmet";

const Seo = () => {
  const title = "Crandall Wedding";
  const description = "Crandall Wedding reservation site";
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title="Crandall Wedding"
      titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ]}
    />
  );
};

export default Seo;
