import React from 'react';
import { Link, graphql } from 'gatsby';
import { remarkForm } from 'gatsby-tinacms-remark';

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

const homePageForm = {
  fields: [
    {
      label: 'Title',
      name: 'rawFrontmatter.title',
      description: 'Enter the title of the page here',
      component: 'text',
    },
    {
      label: 'Body',
      name: 'rawMarkdownBody',
      component: 'markdown',
    },
  ],
};

export const homepageQuery = graphql`
  query HomepageQuery {
    markdownRemark(frontmatter: { path: { eq: "homepage" } }) {
      frontmatter {
        title
        path
      }
      html
      fileRelativePath
      rawMarkdownBody
      rawFrontmatter
      id
    }
  }
`;

export default remarkForm(IndexPage, homePageForm);
