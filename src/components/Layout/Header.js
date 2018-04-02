// Import dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

// Import components
import Navigation from './Navigation';

// Import styles
import './Header.scss';

/**
 * Header component.
 */
const Header = () => (
  <header className="navbar header">
    <div className="container">
      <div className="navbar-header">
        <NavLink className="navbar-brand" to="/" title="View home.">
          {'<Vijay />'}
        </NavLink>
      </div>
      <Navigation />
    </div>
  </header>
);

export default Header;
