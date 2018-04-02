// Import dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

/**
 * Navigation component.
 */
const Navigation = () => (
  <nav>
    <ul className="nav navbar-nav navbar-right">
      <li>
        <NavLink activeClassName="current" exact to="/" title="View home.">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="current" to="/about" title="View about.">
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName="current"
          to="/projects"
          title="View projects."
        >
          Projects
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
