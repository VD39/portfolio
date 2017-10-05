// Import dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

/**
 * Navigation component.
 */
function Navigation() {
  return (
    <nav>
      <ul className="nav navbar-nav navbar-right">
        <li><NavLink activeClassName="current" exact to="/">Home</NavLink></li>
        <li><NavLink activeClassName="current" to="/about">About</NavLink></li>
        <li><NavLink activeClassName="current" to="/projects">Projects</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
