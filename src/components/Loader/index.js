// Import dependencies
import React from 'react';

// Import styles
import './Loader.scss';

/**
 * Loader component.
 */
const Loader = () => (
  <div className="loader">
    <div className="spinner">
      <div className="rect1" />
      <div className="rect2" />
      <div className="rect3" />
      <div className="rect4" />
      <div className="rect5" />
    </div>
    <h2>Fetching data</h2>
  </div>
);

export default Loader;
