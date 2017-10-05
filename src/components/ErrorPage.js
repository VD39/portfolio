// Import dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

// Import styles
import './ErrorPage.scss';

/**
 * ErrorPage component.
 */
function ErrorPage() {
  return (
    <section className="error-page">
      <h1 className="emotion">:(</h1>
      <p className="margin-top">
        Sorry, the page you were looking for couldn’t be found.
      </p>
      <p className="margin-top">
        If you&apos;d like to know more about me, you can go here:
        <NavLink activeClassName="current" exact to="/about"> SYSTEM_ABOUT_ME</NavLink> ||
        <NavLink activeClassName="current" exact to="/"> SYSTEM_GO_TO_HOME_PAGE</NavLink>
      </p>
    </section>
  );
}

export default ErrorPage;
