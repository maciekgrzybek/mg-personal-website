import React from 'react';

import Logo from './Logo';
import Icon from './Icon';

const Header = () => (
  <header className="flex mb-4 items-center h-100vh max-w-screen-xl">
    <div className="w-full flex flex-wrap">
      <div className="w-full text-center">
        <p>Website coming soon</p>
      </div>
      <div className="w-full p-8 max-w-400" style={{ margin: '0 auto' }}>
        <Logo />
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-5 mr-5">
          <a href="https://github.com/maciekgrzybek">
            <Icon type="github" />
          </a>
        </div>
        <div className="w-5 mr-5">
          <a href="https://twitter.com/maciek_g88">
            <Icon type="twitter" />
          </a>
        </div>
        <div className="w-8">
          <a href="https://dev.to/maciekgrzybek">
            <Icon type="devto" />
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
