/* React */
import React from 'react';
import { Link } from 'react-router-dom';

/* My components */
import Navigation from './Navigation';

/* Stylesheet */
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className="navbar navbar-default">

        <div className="container">

          <div className="navbar-header">
            <Link to="/" className="navbar-brand">{'<Vijay />'}</Link>
          </div>

          <Navigation />

        </div>

      </header>
    );
  }
}

export default Header;