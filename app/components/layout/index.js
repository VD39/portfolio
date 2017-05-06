/* React */
import React from 'react';
import PropTypes from 'prop-types';

/* My components */
import Header from './Header';
import Footer from './Footer';

/**
 * Layout component.
 */
class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main className="main">
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

/**
 * Layout props.
 */
Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
