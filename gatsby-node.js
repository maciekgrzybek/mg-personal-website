const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (
    // Create slug for blog articles
    node.internal.type === `MarkdownRemark` &&
    node.frontmatter.type === 'article'
  ) {
    const slug = createFilePath({ node, getNode, basePath: 'articles' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  // Create blog articles pages
  const result = await graphql(`
    query {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "article" } } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    actions.createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/Article.js'),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
