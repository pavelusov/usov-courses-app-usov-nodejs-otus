import React from 'react';

import './Header.css';

import Link from '../Link';
import linksData from './links-data';

const Header = () => (
  <div className="Header-root">
    {linksData.map(({ link, title }) => (
      <Link key={link} className="Header-link" to={link}>{title}</Link>
      ))}
  </div>
);

export default Header;
