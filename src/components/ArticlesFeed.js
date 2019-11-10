import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import ArticleSnippet from './ArticleSnippet';

const ArticlesFeed = () => {
  const articles = useStaticQuery(graphql`
    query ArticlesFeedQuery {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "article" } } }) {
        edges {
          node {
            frontmatter {
              type
              title
              date
              description
            }
            fields {
              slug
            }
            id
            html
            timeToRead
          }
        }
      }
    }
  `);
  const renderArticles = () => {
    return articles.allMarkdownRemark.edges.map(({ node }) => {
      return <ArticleSnippet key={node.id} data={node} />;
    });
  };

  return (
    <div>
      <h2>Articles</h2>
      {renderArticles()}
    </div>
  );
};

export default ArticlesFeed;
