// Import dependencies.
import React from 'react';
import PropTypes from 'prop-types';

// Import components.
import Header from './Header';
import Footer from './Footer';

/**
 * Layout component.
 */
const Layout = ({ children }) => (
  <div>
    <Header />
    <main className="inner main">{children}</main>
    <Footer />
  </div>
);

// PropTypes.
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
