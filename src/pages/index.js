import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ArticlesFeed from '../components/ArticlesFeed';

const IndexPage = ({ data }) => {
  const portraitImageFluid =
    data.markdownRemark.frontmatter.portraitPhoto.childImageSharp.fluid;
  return (
    <Layout>
      <SEO title="Home" />
      <div
        className="mb-12"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
      <div className="relative max-w-3/4 mx-auto mb-16 mt-6">
        <Img className="absolute z-10" fluid={portraitImageFluid} />
        <div className="bg-blue-500 absolute w-full h-full top-1 left-1 z-0"></div>
      </div>
      <ArticlesFeed />
    </Layout>
  );
};

export const homepageQuery = graphql`
  query HomepageQuery {
    markdownRemark(frontmatter: { path: { eq: "homepage" } }) {
      frontmatter {
        title
        portraitPhoto {
          id
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`;

export default IndexPage;
