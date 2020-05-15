import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Image from "gatsby-image";
import "../assets/style.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  const images = useStaticQuery(graphql`
    query MyQuery {
      allFile {
        edges {
          node {
            childImageSharp {
              fluid(maxHeight: 240, maxWidth: 480) {
                originalName
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
      <div className="grid max-w-4xl grid-cols-2 gap-4 mx-auto bg-white">
        {images.allFile.edges.map((image) => {
          return (
            <div className="shadow rounded">
              <Link
                to={"/image/" + image.node.childImageSharp.fluid.originalName}
              >
                <Image
                  className="rounded-t"
                  fluid={image.node.childImageSharp.fluid}
                />
                <p className="p-6">
                  {image.node.childImageSharp.fluid.originalName}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Index;
