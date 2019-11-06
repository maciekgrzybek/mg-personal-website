import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{data.markdownRemark.frontmatter.title} - hello</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </Layout>
  );
};

export const homepageQuery = graphql`
  query HomepageQuery {
    markdownRemark(frontmatter: { path: { eq: "homepage" } }) {
      frontmatter {
        title
        path
      }
      html
      id
    }
  }
`;

export default IndexPage;
