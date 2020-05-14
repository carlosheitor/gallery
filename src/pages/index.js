import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import "../assets/style.css";

import Header from "../components/Header";

const Index = () => {
  const images = useStaticQuery(graphql`
    query MyQuery {
      allFile {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
        {images.allFile.edges.map((image) => {
          return <Image fluid={image.node.childImageSharp.fluid} />;
        })}
      </div>
    </div>
  );
};

export default Index;
