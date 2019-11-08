import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Logo from './Logo';
import Icon from './Icon';

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Logo />
    </div>
    <div />
    <div>
      <Icon type="github" />
      <Icon type="devto" />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
