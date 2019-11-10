import { Link } from 'gatsby';
import React from 'react';

import Logo from './Logo';
import Icon from './Icon';

const Header = () => (
  <header className="flex p-3">
    <div className="w-2/4">
      <Logo />
    </div>
    <div />
    <div className="w-2/4 flex justify-end">
      <div className="w-5 mr-3">
        <Icon type="github" />
      </div>
      <div className="w-8">
        <Icon type="devto" />
      </div>
    </div>
  </header>
);

export default Header;
