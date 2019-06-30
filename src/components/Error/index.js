// Import dependencies.
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * ErrorPage component.
 */
const ErrorPage = () => (
  <section className="error inner">
    <h1 className="error__emotion">:(</h1>
    <p>Sorry, the page you were looking for couldn&rsquo;t be found.</p>
    <p>
      If you&apos;d like to know more about me, you can go here:&nbsp;
      <NavLink title="View about" to="/about">
        SYSTEM_ABOUT_ME
      </NavLink>
      {' || '}
      <NavLink title="View home" to="/">
        SYSTEM_GO_TO_HOME_PAGE
      </NavLink>
    </p>
  </section>
);

export default ErrorPage;
