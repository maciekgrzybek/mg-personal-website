import React from 'react';
import { Link } from 'gatsby';

import Button from './Button';

const ArticleSnippet = ({ data }) => {
  const { frontmatter, timeToRead, fields } = data;
  return (
    <div className="mb-20">
      <h4 className="text-sm mb-2">
        {frontmatter.date} / Reading time ~{timeToRead}min
      </h4>
      <h3 className="text-2xl font-bold mb-4">{frontmatter.title}</h3>
      <div className="mb-8">
        <p>{frontmatter.description}</p>
      </div>
      <Link
        to={fields.slug}
        className="border border-solid border-black px-8 py-3 font-bold bg-white"
      >
        Read more
      </Link>
    </div>
  );
};

export default ArticleSnippet;
