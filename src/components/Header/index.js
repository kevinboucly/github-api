import React from 'react';
import logo from 'src/assets/images/logo-github.png';
import './style.scss';

const Header = () => (
  <header className="header">
    <img className="header-logo" src={logo} alt="Github API" />
  </header>
);

export default Header;
