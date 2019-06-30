// Import dependencies.
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Navigation component.
 */
const Navigation = () => (
  <nav className="navigation">
    <ul className="navigation__list">
      <li>
        <NavLink
          activeClassName="navigation__link--current"
          className="navigation__link"
          exact
          title="View home"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName="navigation__link--current"
          className="navigation__link"
          title="View about"
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName="navigation__link--current"
          className="navigation__link"
          title="View projects"
          to="/projects"
        >
          Projects
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
