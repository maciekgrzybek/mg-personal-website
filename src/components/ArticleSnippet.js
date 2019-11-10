import React from 'react';
import { Link } from 'gatsby';

import Button from './Button';

const ArticleSnippet = ({ data }) => {
  const { frontmatter, timeToRead, fields } = data;
  return (
    <div>
      <h4>
        {frontmatter.date} / Reading time ~{timeToRead}min
      </h4>
      <h3>{frontmatter.title}</h3>
      <div>
        <p>{frontmatter.description}</p>
      </div>
      <Link to={fields.slug}>Read more</Link>
    </div>
  );
};

export default ArticleSnippet;
