/* React */
import React from 'react';
import { Link } from 'react-router-dom';

/* Stylesheet */
import './Navigation.scss';

class Navigation extends React.Component {
  render() {
    return (
      <nav>

        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/work">Work</Link></li>
        </ul>

      </nav>
    );
  }
}

export default Navigation;