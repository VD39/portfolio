// Import dependencies.
import React from 'react';
import { NavLink } from 'react-router-dom';

// Import components.
import Navigation from '../Navigation';

/**
 * Header component.
 */
const Header = () => (
  <header className="header">
    <div className="header__inner inner">
      <NavLink className="header__name html-tag" title="View home" to="/">
        Vijay
      </NavLink>
      <Navigation />
    </div>
  </header>
);

export default Header;
